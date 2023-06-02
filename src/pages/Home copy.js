import React from "react";
import createRoot from "react-dom/client";
import Carousel from "react-elastic-carousel";
import ReactDOM from 'react-dom/client'; 

import Item from './item'
// import item from "item";
// import "../styles.css";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];


function HC2() {
  return(
    <>
      <h1 style={{ textAlign: "center"}}>Example to setup your carousel in react</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item>One</Item>
          <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
        </Carousel>
      </div>
     </> 
  );
}
export default HC2;


const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<HC2 /> );

