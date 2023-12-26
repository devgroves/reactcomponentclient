import logo from './logo.svg';
import './App.css';
import { LightBox } from "react-lightbox-pro";
import { AddToCartComponent }  from "addtocart-react-component";
import React, { useState, useRef } from "react";

function App() {
  const [toggler, setToggler] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(4);
  const [showval, setShowval] = useState("");
  const cartCountRef = useRef();
  const cartProps = {
    title: "AddToCart",
    maxVal: 10,
    minVal: 0,
    initialVal: 2,
    ref: cartCountRef,
  };
  const data = [
    {
      media: "https://picsum.photos/200/300",
      type: "IMAGE",
      caption: "React Image",
    },
    // without caption
    {
      media: "https://picsum.photos/200/300",
      type: "IMAGE",
    },
    {
      media: "https://picsum.photos/200/300",
      type: "IMAGE",
    },
    {
      media: "http://techslides.com/demos/sample-videos/small.mp4",
      type: "VIDEO",
      caption: "Sample Video with Caption",
    },
    {
      media: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      type: "AUDIO",
    },
  ];
  
  const checkVal = (e) => {
    e.preventDefault();
    console.log("check val", cartCountRef.current.outerText, cartCountRef);
    setShowval(cartCountRef.current.outerText);
  };
  
  return (
    <div className="App">
      <button
        onClick={() => {
          setToggler(true);
        }}
      >
        Click to Open LightBox
      </button>
      
      <br/>
      <br/>
      <br/>
      <br/>
      <h1>Add To Cart Component</h1>
      <AddToCartComponent cartBtnProps={cartProps}/>
      <h6>We can check Cart Value outside the component</h6>
      <button onClick={checkVal}>Check Value</button>
      <p>{showval}</p>
      <LightBox currentSlide={currentSlide} mediaItems={data} toggler={toggler} togglerFunc={setToggler} callback={() => {
              console.log("going to do a callback");
              setToggler(false);
            }}/>
    </div>
  );
}

export default App;
