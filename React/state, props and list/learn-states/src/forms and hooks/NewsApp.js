import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import News from "./News";

function NewsApp() {
  const apiKey = `d0363ccd3d6e495abe35d73ac2e0bed9`;
  const url = `https://newsapi.org/v2/everything?q=apple&from=2022-12-13&to=2022-12-13&sortBy=popularity&apiKey=${apiKey}`;

  const [newList, setNewsList] = useState([]);
  //   useEffect here will work at the time of mounting or intial rendering of the component
  // data will be fetched at time of loading the page
  useEffect(() => {
    fetchData();
  }, []);
  //   writing async so that await can vbe written inside  the function
  async function fetchData() {
    try {
      // fetch(url) return a Promise, to wait on a promise await is written,the promise will
      // be resolve or reject , if it get resolved ,we get response and convert that response to Json
      const response = await fetch(url);
      // response.json also returns a promise , so await is written to wait on that promise
      const jsonData = await response.json();
      setNewsList(jsonData.articles);
    } catch (err) {
      console.log(`error occured ${err}`);
    }
  }
  //   const arr = ["hello", "jay", "ram", "viru", "amit", "vishal", "others"];
  return (
    <>
      <div>
        {newList.map((news, id) => {
          return (
            <p key={id}>
              <News news={news} />
            </p>
          );
        })}
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
