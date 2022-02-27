import React from 'react'
import { useNavigate } from 'react-router';
import { makeStyles } from "@material-ui/core";
import './Home.css';



const Home = () => {  
  return (
    <body>
      <div>
        <div style={{ padding: "40px" }}>
          <h1>This is a main page</h1>
        </div>

        <div style={{ padding: "40px" }}>
          <p>Here would be some info on how important teh AED's are</p>
          </div>
      </div> 
    </body>
  ) 

}

export default Home; 