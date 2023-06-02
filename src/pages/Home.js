import { useEffect } from 'react';
import React from 'react';
import {
  NavBar, Component1, StandardCard, StandardCardCollection, TableHeading, TableContent, TableHeading2, TableHeading2Body,
  TableHeading2BodyCollection,
  HeroLayout3
} from '../ui-components'
import {
  HeroLayout1
} from '../ui-components';


import { Amplify } from 'aws-amplify';
import { API } from 'aws-amplify';

import { Paper } from '@material-ui/core'

import awsExports from '../aws-exports';
import BasicCarousel from '../ui-components/CardComponent';
import Item from './item';
Amplify.configure(awsExports);
API.configure(awsExports);



const myAPI = 'showcaseAPI'
const path = '/showcase'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const HomePage = () => {
  const [apidata, setApidata] = React.useState([]);
  // React.useEffect(() => {
  //   API.get('showcaseAPI','/showcase').then(response => {
  //     setItems([...response]);
  //   });
  // }, []);

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

  return (


    // useEffect(() => {
    //   const fetchData = async () => {
    //     const result = await fetch('https://yzrreazbe0.execute-api.us-west-2.amazonaws.com/staging/highlightedprojects')
    //     const jsonResult = await result.json()

    //     setAuthors(jsonResult)
    //   }

    //   fetchData()
    // }


    <div className="App">



{/* export default Card; */}
      <NavBar width='100%' />
      <HeroLayout3 width='100%' marginBottom={'20px'} />
      <header className='App-header'>
        <div className='container'>
          <StandardCardCollection />

        </div>
        {/* <TableHeading2BodyCollection width = '100%' marginBottom = "30px"/> */}

        <div className='table'>
          <TableHeading2 marginTop={"30px"} marginBottom="10px" />
          <div className='CICProjectData' style={{display: "flex"}}>
            <div className='CICProjectCat'>
              {apidata.map(apidata => <p>{ apidata.Category }</p>)}
            </div>
            <div className='CICProjectCust'>
              {apidata.map(apidata => <p>{ apidata.Customer }</p>)}
            </div>
            <div className='CICProjectTeam'>
              {apidata.map(apidata => <p>{ apidata.CIC_Team }</p>)}
            </div>
            <div className='CICProjectProject'>
              {apidata.map(apidata => <p>{ apidata.Project }</p>)}
            </div>
            <div className='CICProjectType'>
              {apidata.map(apidata => <p>{ apidata.Project_type }</p>)}
            </div>

          </div>


        </div>
      {/* <table>
        <tbody>
        <tr>
          <th>Project</th>
          <th>Category</th>
          <th>Customer</th>
          <th>CIC_Team</th>
          <th>Project_Type</th>
          <th>AWS_Services</th>
          <th>Project_Demo_Link</th>
          <th>Project_Details_Link</th>
        </tr>
        {apidata.map(({Project, Category, Customer,CIC_Team,Project_Type,AWS_Services,Project_Demo_Link,Project_Details_Link }) => {
          return (
            <tr key={Project}>
              <td>{Project}</td>
              <td>{Category}</td>
              <td>{Customer}</td>
              <td>{CIC_Team}</td>
              <td>{Project_Type}</td>
              <td>{AWS_Services}</td>
              <td><a href="https://www.instagram.com"></a>{Project_Demo_Link}</td>
              <td>{Project_Details_Link}</td>
            </tr>
          );
        })}
        </tbody>
      </table> */}



      </header>


    </div>

  )
}

export default HomePage;


// import axios from 'axios';

// function ImageGallery() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get(`/api/images?search=${searchQuery}`);
//       setImages(response.data);
//     };
//     fetchData();
//   }, [searchQuery]);

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   return (
//     <div>
//       <input type="text" value={searchQuery} onChange={handleSearch} />
//       {images.slice(0, 3).map((image) => (
//         <div key={image.id}>
//           <img src={image.url} alt={image.title} />
//           <h2>{image.title}</h2>
//           <a href={image.link}>{image.link}</a>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ImageGallery;

const rootElement = document.getElementById("root");
ReactDOM.render(<HomePage />, rootElement);