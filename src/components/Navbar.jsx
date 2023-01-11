import React from 'react'
import "./style.css"


const list = {
    display: "flex",
}
const list_item = {
    padding: "10px",
    listStyle: " none"
}

export default function Navbar() {
    return (
        <>
            <nav>
                <h1>Logo</h1>
                <ul style={list}>
                    <li style={list_item}>Home</li>
                    <li style={list_item}>About</li>
                    <li style={list_item}>Contac</li>
                    <li style={list_item}>Block</li>
                </ul>
            </nav>
        </>
    )
}
