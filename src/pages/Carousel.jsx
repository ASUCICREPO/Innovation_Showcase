import React from "react";
import { CarouselItem } from "./CarouselItem"
import { useState } from "react";
import { API } from 'aws-amplify';
import { useEffect } from 'react';
import { TableHeading2 } from "../ui-components";



export const Carousel = () => {
    

    const [apidata, setApidata] = React.useState([]);

    useEffect(() => {
        apiGet();
      }, []);
    
    
      function apiGet() {
    
    
        API.get('showcaseAPI', '/showcase').then(response => {
          // setApidata([...response]);
          console.log(response);
          setApidata(response);
        });
      }
    

    const [activeIndex, setActiveIndex] = useState(0);
    // const items = apidata.map((item, index, self) => (
    //     {
    //         title: item.Category,
    //         description: item.Project,
    //         icon: item.Image_Link
    //     }
    // ));

    const visibleItems = apidata.slice(activeIndex, activeIndex + 4);
    const items = visibleItems.map((item, index) => ({
    title: item.Category,
    description: item.Project,
    icon: item.Image_Link,
    dataIndex: apidata.indexOf(item) // add index of item in apidata
    }));

    

    const updateIndex = (newIndex) => {
        console.log('updateIndex called with newIndex', newIndex);

        if (newIndex < 0 ){
            newIndex = 0;
        }else if (newIndex >= items.length) {
            newIndex= items.length-1;
        }

        setActiveIndex(newIndex);
    };
    return (
    <div className="carousel">
        <div className="inner"
             style={{ transform: `translateX(-${activeIndex * 20}%)` }}

        >
              {items.map((item, index) => (
                <CarouselItem
                key={index}
                item={item}
                apidata={apidata}
                index={index}
            />
))}
        </div>

        <div className="carousel-buttons">
            <button onClick={()=>{
                updateIndex(activeIndex - 1);
            }} className="button-arrow">
                <span class="material-symbols-outlined">arrow_back_ios</span>
            </button>
            <div className="indicators">
                {items.map((item,index)=>{
                    return( 
                        <button onClick={() => {
                            updateIndex(index);
                        }} 
                     className= "indicator-buttons">
                    <span 
                        className={`material-symbols-outlined ${ index === activeIndex ? "indicator-symbol" : "indicator-symbol-active" }`}
                    >
                        radio_button_checked
                    </span>
                    </button>    

                    );
                })}
           
            </div>
        <button 
            onClick={() => {
                updateIndex(activeIndex + 1);
            }}
            className="button-arrow">
            <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
        </div>

        
    
    </div>




    );
    
};