import './App.css';
import {NavBar, StandardCardCollection, TableHeading2, TableHeading2BodyCollection, HeroLayout3 , StandardCard}  from './ui-components'

import {Amplify} from 'aws-amplify';
import { API } from 'aws-amplify';

import awsExports from './aws-exports';
import React, {useEffect } from 'react';

//import { response } from '../amplify/backend/function/showcaseInnovationLambda/src/app';
Amplify.configure(awsExports);
API.configure(awsExports);


function App() {
  const [apiData,setData] = React.useState([]) ;

  useEffect(() => {
    API.get('showcaseAPI','/showcase').then(response => {
      setData([...response]);
    });
  },[])

  return (



    const Card = ({ imageSrc, title }) => {
      return (
        <div className="card">
          <img src={imageSrc} alt={title} />
          <h2>{title}</h2>
        </div>
      );
    };
    
    export default Card;


    
    // <div className="App">
    //   <h1>hello</h1>
    //   <StandardCardCollection></StandardCardCollection>
    //   {/* <table>
    //     <tbody>
    //     <tr>
    //       <th>Project</th>
    //       <th>Category</th>
    //       <th>Customer</th>
    //       <th>CIC_Team</th>
    //       <th>Project_Type</th>
    //       <th>AWS_Services</th>
    //       <th>Project_Demo_Link</th>
    //       <th>Project_Details_Link</th>
    //     </tr>
    //     {apiData.map(({Project, Category, Customer,CIC_Team,Project_Type,AWS_Services,Project_Demo_Link,Project_Details_Link }) => {
    //       return (
    //         <tr key={Project}>
    //           <td>{Project}</td>
    //           <td>{Category}</td>
    //           <td>{Customer}</td>
    //           <td>{CIC_Team}</td>
    //           <td>{Project_Type}</td>
    //           <td>{AWS_Services}</td>
    //           <td><a href="https://www.instagram.com"></a>{Project_Demo_Link}</td>
    //           <td>{Project_Details_Link}</td>
    //         </tr>
    //       );
    //     })}
    //     </tbody>
    //   </table> */}
    // </div>

    <div className="App">

    <NavBar width='100%' />
    <HeroLayout3 width='100%' marginBottom={'20px'} />
    <header className='App-header'>
    <div className='container'>
      <StandardCard />
      {/* <Component1/> */} 
    </div>
    <div className='table'>
      <TableHeading2 marginTop={"30px"} marginBottom="10px"/>    
      <TableHeading2BodyCollection width = '100%' marginBottom = "30px"/>
     </div> 
    </header>
  </div>
  );
}

export default App;
