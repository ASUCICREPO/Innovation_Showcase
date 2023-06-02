import React from "react";
import createRoot from "react-dom/client";
import {Carousel} from "./pages/Carousel";
import ReactDOM from 'react-dom/client'; 
import { API } from "aws-amplify";
import { useEffect } from "react";
import Item from './pages/item';
import { HeroLayout3, NavBar } from "./ui-components";
import ciclogo from "./Media/ciclogo.png" ;

// import item from "item";
// import "../styles.css";


// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 },
// ];


function App() {
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
      const headerStyle = {
        fontSize: '40px',
        textAlign: 'center',
        fontWeight: 'bold',
        position: 'relative',

        };
  return(

    
    <>
    <NavBar width = "100%"/>


    <div className = "header" style = {headerStyle}>
      Search & Explore Cloud Innovation Center Demos
    </div>
    

    {/* <HeroLayout3 width= "100%"/> */}
    


      <div className="App" >
        <Carousel />
      </div>

      <div className='project-table' >
      <table align="center">
        <tbody>
        <tr>
          <th>Project Name</th>
          <th>Category</th>
          <th>Customer</th>
          {/* <th>CIC_Team</th> */}
          <th>Project Type</th>
          <th>AWS_Services</th>
          {/* <th>Project_Demo_Link</th>
          <th>Project_Details_Link</th> */}
        </tr>
        {apidata.map(({Project, Category, Customer,CIC_Team,Project_type,AWS_Services,Project_Demo_Link,Project_Details_Link }) => {
          return (
            <tr key={Project}>
              <td>{Project}</td>
              <td>{Category}</td>
              <td>{Customer}</td>
              {/* <td>{CIC_Team}</td> */}
              <td>{Project_type}</td>
              <td>{AWS_Services}</td>

              {/* <td>{AWS_Services}</td> */}
              {/* <td><a href="https://www.instagram.com"></a>{Project_Demo_Link}</td> */}
              {/* <td>{Project_Details_Link}</td> */}
            </tr>
          );
        })}
        </tbody>
      </table>
      </div>

    </> 
  );
}

export default App;