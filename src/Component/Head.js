import React from "react";
import "../Component/Style.css"
import Style from "../Component/Style.module.css";

function Head() {
    return <>
    <h1 style={{color:"red", backgroundColor:"lightgray"}}>This is heading Tag</h1>
    <h1>This is heading Tag</h1>
    <h1 className={Style.xyz}>This is heading Tag</h1>
    <h1>This is heading Tag</h1>
    <h1>This is heading Tag</h1>
    <h1>This is heading Tag</h1>
    </>
}
// function Head() {
//     return <h1>This is heading Tag....</h1>
// }

// function Head1() {
//     return <h1>This is heading Tag....</h1>
// }

export default Head;
// export {Head1};