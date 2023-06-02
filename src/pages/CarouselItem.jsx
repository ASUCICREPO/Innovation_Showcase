import React from "react";
import { API } from "aws-amplify";
import { useEffect } from "react";


export const CarouselItem = ( {item, apidata }) => {


    const matchingData = apidata.find((data) => data.Image_Link === item.icon);

    // const [apidata, setApidata] = React.useState([]);

    // useEffect(() => {
    //     apiGet();
    //   }, []);
    
    
      function apiGet() {
    
    
        API.get('showcaseAPI', '/showcase').then(response => {
          // setApidata([...response]);
          console.log(response);
        //   setApidata(response);
        });
      }

      
      return (
        <div className="carousel-item">
          <div>
            <img className="carousel-img" src={matchingData.Image_Link} />
            <div className="carousel-item-text">
              <a href={matchingData.Project_Details_Link}>{item.description}</a>
              <p></p>
            </div>
            <div className="carousel-item-text">
              <p>{item.title}</p>
            </div>
          </div>
        </div>
      );
    };
