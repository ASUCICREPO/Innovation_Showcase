import React from "react";
import createRoot from "react-dom/client";
import {Carousel} from "./pages/Carousel";
import ReactDOM from 'react-dom/client'; 
import { API } from "aws-amplify";
import { useEffect } from "react";
import Item from './pages/item';
import { HeroLayout3, NavBar } from "./ui-components";
import ciclogo from "./Media/ciclogo.png" ;

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
    

    <div className = "header" style = {headerStyle} height="80px">
      <img className="cic-logo" src= {ciclogo} height={"100px"} align="left" backgroundcolor/>
      Search & Explore Cloud Innovation Center Demos
    </div>

      <div className="App">
        <Carousel />
      </div>

      <div className='project-table'>
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



// import { NavBar, Component1, StandardCard, StandardCardCollection, TableHeading, TableContent, TableHeading2,TableHeading2Body,
//   TableHeading2BodyCollection, 
//   HeroLayout3} from './ui-components'
// import {
//   HeroLayout1 
// } from './ui-components';
// import React from 'react';


// import ReactDOM from "react-dom";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage2 from "./pages/Home copy";
// import Project from "./pages/Projects";
// import Demo from "./pages/Demos";
// import Layout from "./pages/Layout";
// import Gunshot from "./pages/gunshot_city";
// import { useEffect } from 'react';


// export default function App() {
//   // const [projName, setProjName] = React.useState('')
//   // const [projType, setProjType] = React.useState('')
//   // const [proj, setProj] = React.useState([])
  
  
//   // useEffect(() => {
//   //   API.get('showcaseAPI','/showcase')
//   //   .then(showcase => console.log(showcase));
//   //   }, []);

//   //   return(
//   //     <div className='App'>
//   //       <header className='App-header'>
//   //         hello
//   //         <form>
//   //           <input value={projName} placeholder ="Gunshot Detection" onChange={(e) => setPetName(e.target.value)}
//   //         </form>
//   //       </header>
//   //     </div>
//   //   )




// //   useEffect(() => {
// //     const fetchData = async () => {
// //       const result = await fetch('https://yzrreazbe0.execute-api.us-west-2.amazonaws.com/staging/highlightedprojects')
// //       const jsonResult = await result.json()

// //     }

// //     fetchData()
// //   })
//   return (
    
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<HomePage2 />} />
//           <Route path="home" element={<HomePage2 />} />
//           <Route path="projects" element={<Project />} />
//           <Route path="demos" element={<Demo />} />
//           <Route path="gunshot" element={<Gunshot />} />

//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));
