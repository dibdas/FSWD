import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import News from "./News";
import "./NewsApp.css";

function NewsApp() {
  const apiKey = `d0363ccd3d6e495abe35d73ac2e0bed9`;
  // const url = `https://newsapi.org/v2/everything?q=apple&from=2022-12-13&to=2022-12-13&sortBy=popularity&apiKey=${apiKey}`;

  const [newList, setNewsList] = useState([]);
  const [query, setQuery] = useState("apple");
  const newsInputRef = useRef(null);
  const queryRef = useRef(null);
  //   useEffect here will work at the time of mounting or intial rendering of the component
  // data will be fetched at time of loading the page
  // useEffect(() => {
  //   fetchData();
  // }, []);
  //   writing async so that await can vbe written inside  the function

  const urlApiKey = `https://newsapi.org/v2/everything?q=${query}&from=2022-12-01&to=2022-12-13&sortBy=popularity&apiKey=${apiKey}`;
  useEffect(() => {
    fetchData();
  }, [query]);
  async function fetchData() {
    try {
      // fetch(url) return a Promise, to wait on a promise await is written,the promise will
      // be resolve or reject , if it get resolved ,we get response and convert that response to Json
      const response = await fetch(urlApiKey);
      // response.json also returns a promise , so await is written to wait on that promise
      const jsonData = await response.json();
      setNewsList(jsonData.articles);
    } catch (err) {
      console.log(`error occured ${err}`);
    }
  }
  //   const arr = ["hello", "jay", "ram", "viru", "amit", "vishal", "others"];
  const newsStyle = {
    display: `grid`,
    gridTemplateColumns: `repeat(3,1fr)`,
    gap: `0.7rem`,
    justifyContent: `space-between`,
  };
  const formStyle = {
    marginBlock: `1rem`,
  };
  function handleSubmit(event) {
    event.preventDefault();

    const inputRef = newsInputRef.current.value;
    setQuery(inputRef);
    const qref = event.target.value;
    setQuery(event.target.value);
    console.log(qref);

    // setQuery(queryRef.current.value);
    // to remove the text written in the input box
    newsInputRef.current.value = "";
  }

  return (
    <>
      <div className="news-app">
        <form onSubmit={handleSubmit} style={formStyle}>
          <input type="text" ref={newsInputRef} />
          {/* <butt type="Submit" value="Submit" /> */}
          <button type="submit" onClick={handleSubmit}>
            submit
          </button>
        </form>
        <div style={{ marginBlock: `1rem` }}>
          <button
            style={{
              padding: `0.7rem`,
              marginInline: `1rem`,
              fontSize: `1rem`,
              backgroundColor: `grey`,
            }}
            // onClick={() => setQuery(`fifa`)}
            // or
            onClick={handleSubmit}
            value="fifa"
            type="button"
          >
            fifa
          </button>
          <button
            style={{
              padding: `0.7rem`,
              marginInline: `1rem`,
              fontSize: `1rem`,
              backgroundColor: `grey`,
            }}
            // onClick={() => setQuery(`tesla`)}
            type="button"
            onClick={handleSubmit}
            value="tesla"
          >
            tesla
          </button>
          <button
            style={{
              padding: `0.7rem`,
              marginInline: `1rem`,
              fontSize: `1rem`,
              backgroundColor: `grey`,
            }}
            // onClick={() => setQuery(`fifa`)}
            // or
            onClick={handleSubmit}
            value="nokia"
            type="button"
          >
            nokia
          </button>
          <button
            style={{
              padding: `0.7rem`,
              marginInline: `1rem`,
              fontSize: `1rem`,
              backgroundColor: `grey`,
            }}
            // onClick={() => setQuery(`android`)}
            // or
            onClick={handleSubmit}
            value="android"
            type="button"
          >
            android
          </button>
        </div>
        <div style={newsStyle}>
          {newList.map((news, id) => {
            return (
              // other than id , url can also be unique
              // key={id}
              <News key={news.url} news={news} />
            );
          })}
        </div>
      </div>

      {/* <select>
        {arr.map((element) => {
          return <option>{element}</option>;
        })}
      </select> */}
    </>
  );
}

export default NewsApp;
