import React from 'react'

export  const Practice = (prop) => {
  return (
    <div>

        <h1 onClick={prop.click}>
            my name is {prop.name} and i am {prop.age} years old
        </h1>
        <input onChange= {prop.change} type="text" />
    </div>
  );
}
