import { NavBar, Component1, StandardCard, StandardCardCollection, TableHeading, TableContent, TableHeading2,TableHeading2Body,
    TableHeading2BodyCollection,ProjectCollection, 
    HeroLayout3,
    } from '../ui-components'
  import {
    HeroLayout1 
  } from '../ui-components';
  
  const Project = () => {
    return (
      <div className="App">
  
        <NavBar width='100%' />
        <header className='App-header'>
        <div className='container'>
          <ProjectCollection />
          {/* <Component1/> */} 
  
  
          
  
        </div>
        <div className='table'>
          <TableHeading2 marginTop={"30px"} marginBottom="10px"/>
          
          
          <TableHeading2BodyCollection width = '100%' marginBottom = "30px"/>
         </div> 
        </header>
        
  
  
  
  
      </div>
    )
  }
  
  export default Project;
  