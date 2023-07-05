import React from 'react';
import '../css/FindID.css'
import { TextField } from '@mui/material';
import { Button } from '@mui/base';
// import FormControlLabel from '@mui/material/FormControlLabel';
import {Routes, Route, Link} from "react-router-dom";
import Mission from "./Mission"

function FindID() {
  
  return (
    <div>
      <Routes>     
        <Route path="/Mission" element={<Mission />} />
      </Routes>
      
      <div className="loginForm"> 
        <div className="loginID">
          <p className="loginTitle">Find ID</p>  
          <TextField className="FindIDBox"
            label="Email" name="Email"
            autoComplete="Email"
            autoFocus/> <br/>
        </div> 
        
        <Link to="/Mission">
          <Button type="submit" className="btnFindID">
            Login
          </Button> <br/><br/>
        </Link>

        <Link to="/">
          <Button type="submit" className="btnFindID">
            Find PW
          </Button> <br/><br/>
        </Link>

        </div>
      </div>
  );
}

export default FindID;