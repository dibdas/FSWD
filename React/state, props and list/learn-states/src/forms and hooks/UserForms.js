import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

function UserForms() {
    const[name,setName] = useState()
	const[fruit,setFruit] = useState()
	// useRef does not re-render like useState, useRef is used to access a particular DOM element 
	const nameInputRef = useRef(null)
	const fruitInputRef =  useRef(null)
	function handleSubmit(event){
		// when you submit inside the forms ,the default behaviour of forms is 
		// submit the form and  reload the page  automatically , and prevent that
		//  default behaviour we use preventDefault
		event.preventDefault()
		console.log(`checking submit `);
		console.log(nameInputRef.current);
		const  nameInputValue = nameInputRef.current.value
		console.log( nameInputValue );
		const fruitSelectValue  = fruitInputRef.current.value
		console.log(fruitSelectValue );

		alert(`${nameInputValue} ${fruitSelectValue}`)

	}
	function handleChange(event){
		console.log(event.target.value);
		setFruit(event.target.value)
		

	}


  return (
	// onSubmit inside forms works when you press enter after enetering the data 
    <form onSubmit={handleSubmit}>
        <label>Name:</label>
        {/* <input type="text" placeholder="" onChange={(event)=>setName(event.target.value)}/> */}
		{/* the reference of the input can be access through nameInputRef , the value of the input
		can be accessed through nameInputRef */}
		<input type="text" ref={nameInputRef}/>
		<select onChange={handleChange} ref={fruitInputRef}>
			<option value="grapefruit">Grapefruit</option>
			<option value="lime">Lime</option>
			<option value="coconut">Coconut</option>
			<option value="mango">Mango</option>
		</select>
		<button onClick={handleSubmit}>submit</button>
    </form>
  )
}

export default UserForms