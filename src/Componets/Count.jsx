import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const get = () => {
    setCount(count + 1);
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
        HIT ME!!!
      </button>
    </div>
  );
};

export default Count;
