import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import profileImg from "./img/profile.jpg";
import post4Img from "./img/post4.jpg";

function Post(props) {
  return (
    
    <div className="post">
      <div className="postHead">
      <img src={props.profileImg} width={65} height={65} alt="" />
       
        <div>
          <h1> {props.name} </h1>
          <div className="date"> {props.date}</div>
        </div>
        </div>
        
        <p> {props.text}</p>

<img className="postImg" src={props.img} widh={65} height={600} alt="" />




      </div>
   );
}

ReactDOM.render(<div> <Post  profileImg={profileImg}
      name="Mohammad Asif"
      date="26-aug-2023 4:30 pm"
      text="What’s going on here? Well, at first, it just renders “Hello “ because we’re not passing a name yet. But aside from that…
        When React renders a component, it passes the component’s props (short for “properties”) as the first argument, as an object. The props object is just a plain JS object, where the keys are prop names and the values are, well, the values of those props.
        You might then wonder, where do props come from? How do we pass them in? Good question."
        img={post4Img} />
        </div>,
        
         document.querySelector('#root'));