import React from "react";
import { useContext } from "react";
import { nameContext, themeContext } from "./App";
import Consumer2 from "./Consumer2";

function Consumer() {
  const name = useContext(nameContext);
  const { theme, setTheme } = useContext(themeContext);

  let handleColorChange=()=>{
    if(theme==="white"){
      
        setTheme("black")
    }else{
        setTheme("white")
    }
  }
  return (
    <div style={{ backgroundColor: theme }}>
      consumer
      <br />
      Name : {name}
      <br />
      theme : {theme}
      <button onClick={handleColorChange}>
        {theme === "white" ? "Dark" : "White"}
      </button>
      {/* <Consumer2 /> */}
    </div>
  );
}

export default Consumer;