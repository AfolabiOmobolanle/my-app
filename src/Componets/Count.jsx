import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const get = () => {
    setCount(count + 1);
  };
const dec= () =>{
  setCount(count -1);

};
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "cursive",
        fontSize: "2rem",
        backgroundColor: "cornflowerblue",
      }}
    >
      <div>You don hit me {count} times</div>
<span>
      <button
        onClick={get}
        style={{
          width: "15rem",
          marginTop: "2rem",
          backgroundColor: "chartreuse",
          fontFamily: "cursive",
          fontSize: "2rem",
          padding: "1rem",
          border:"none"
        }}
      >
        increase
      </button>
      <button
        onClick={dec}
        style={{
          width: "15rem",
          marginTop: "2rem",
          backgroundColor: "chartreuse",
          fontFamily: "cursive",
          fontSize: "2rem",
          padding: "1rem",
          border:"none"
        }}
      >
        decrease
      </button>
      </span>
    </div>
  );
};

export default Count;
