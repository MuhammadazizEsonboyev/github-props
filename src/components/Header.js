import React from 'react'
import "./style.css"

export default function Header(props) {

    return (
        <>
            <div className="box">
                <h1>Hello Header Page</h1>
                <img src={props.image} style={{ width: "300px", padding: "10px" }} alt="" />
                <img src={props.image} style={{ width: "300px", padding: "10px" }} alt="" />
                <img src={props.image} style={{ width: "300px", padding: "10px" }} alt="" />
                <h1 style={{color: "gray", fontSize: "40px"}}>Date: {props.date}</h1>
                <button onClick={(e) =>  e.target.classList.add("btn")}>Button</button>
            </div>
        </>
    )
}
