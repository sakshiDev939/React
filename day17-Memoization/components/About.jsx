import React from 'react'


let a = 10;
const About = ({users}) => {
    console.log("about rendering...")
  return (
    <div>
      <h1>this is about</h1>
    </div>
  )
}

export default React.memo(About)
