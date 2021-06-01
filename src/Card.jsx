import React from 'react';

const Card = (props) => {
    // console.log(props)
    return (
        <>
    {/* <div className="container"> */}
      <div className="card">
        <div className="imgBx">
          <img src={props.image}></img>
        </div>
        <div className="content">
          <h2 className="title">{props.title}</h2>
          <p>{props.desc}</p>
          <button className="btn" onClick={() => {
              console.log("hii")
              window.open(props.link,"_blank")
          }}> Watch Now </button>
        </div>
      </div>
    {/* </div> */}
  </>
)}

export default Card;