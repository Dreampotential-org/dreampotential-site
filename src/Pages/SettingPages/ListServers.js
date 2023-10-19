
import React, {useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ListServersAPI from '../../Components/Dashboard/ListServersAPI';

import "../ListProjectServices.css"



const ListServers = () => {

const navigate = useNavigate();

  const navigateToCreateSSHKey = () => {
    // 👇️ navigate to /
    navigate('/Settings/create-sshkey');
  };


    return(
        <div>
  <div className='row'>
  <div className='col-3 firstdiv'>
  <div className='row top-row'>
    <input type='text' class="form-control search-inpt" placeholder='search or go to...' />
  
  </div>
  <div className='row bottom-row'>
   
   <div className='lists'>
   <h6>Your work </h6>
   <div className='project-list '>
   <div className='icon'>
   </div>
  <a href='/dashboard/Settings/project-services'>Projects Services </a>
   </div>
   <div className='project-list '>
   <div className='icon'>
   </div>
   <a href='/dashboard/Settings/sshkey-list'>SSH Key </a>
   </div>
   <div className='project-list'>
   <div className='icon'>
   </div>
  <a href='/dashboard/Settings/orgs-list'>Orgs List </a>
   </div>
   <div className='project-list'>
   <div className='icon'>
   </div>
   <a href='/dashboard/Settings/members-list'>Members List </a>
   </div>
   
   <div className='project-list'>
   <div className='icon'>
   </div>
  <a href='/dashboard/Settings/api-keys-list'>API Keys List </a>
   </div>
   <div className='project-list'>
   <div className='icon'>
   </div>
  <a href='/dashboard/Settings/project-commands-list'>Project Commands List </a>
   </div>
   <div className='project-list first'>
   <div className='icon'>
   </div>
  <a href='dashboard/Settings/servers-list'>Servers List </a>
   </div>
   <div className='project-list'>
   <div className='icon'>
   </div>
  <a href='/dashboard/Settings/server-groups-list'>Server Groups List </a>
   </div>
   </div>
   
   
  </div>

  
  </div>
  <div className='col-9 seconddiv'>
  <div className='row1'>
    <h1>Setting Page</h1>
  </div>
  <div className='row2'>
  <div>
  <div className='row bottom'>
    <div className="navDiv">
        <nav className="navbar mynav justify-content-between">
            <a className="navbar-brand">Servers List</a>
          <form className="d-flex">
                <input className="form-control  inpt" type="search" placeholder="Search" aria-label="Search" />
                
            </form>
            <button className="btn btn-outline-success" type="button" onClick={navigateToCreateSSHKey}>+</button>
        </nav>
    </div>
     </div>

        
          
        <ListServersAPI />
        
       
        
      
        </div>
  {/* <ListProjectServices /> */}
 </div>
  

  </div>
  </div>
 </div>
   
        
        
        )
        
    };
    
    export default ListServers;





// import React, {useEffect, useRef, useState } from 'react';
// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import ListServersAPI from '../../Components/Dashboard/ListServersAPI';

// import "../ListProjectServices.css"


// const ListServers = () => {

// const navigate = useNavigate();

//   const navigateToCreateServer = () => {
//     // 👇️ navigate to /
//     navigate('/Settings/create-server');
//   };


//     return(
//         <div >
         
//       <div className="row top-div ">
//         <nav className="navbar navbar-expand-lg navbar-light ">
//         <a className="navbar-brand" href="#">dreampotential</a>
//         <ul className="navbar-nav">
//             <li className="nav-item">
//                 <a className="nav-link" href="#">My Builds</a>
//             </li>
//             <li className="nav-item">
//                 <a className="nav-link" href="#">help</a>
//             </li>
            
//         </ul>
//     </nav>
//     </div>
//     <div className='row second-top-div'>
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
//         <ul className="navbar-nav mr-auto">
//             <li className="nav-item">
//                 <a className="nav-link" href="#">Agents</a>
//             </li>
//             <li className="nav-item">
//                 <a className="nav-link" href="#">Test suites</a>
//             </li>
//             <li className="nav-item">
//                 <a className="nav-link" href="/Settings">Settings</a>
//             </li>
//         </ul>
//     </nav>
//     </div>
//     <div className='row bottom'>
//     <div className="navDiv">
//         <nav className="navbar mynav justify-content-between">
//             <a className="navbar-brand">Projects</a>
//           <form className="d-flex">
//                 <input className="form-control  inpt" type="search" placeholder="Search" aria-label="Search" />
                
//             </form>
//             <button className="btn btn-outline-success" type="button" onClick={navigateToCreateServer}>+</button>
//         </nav>
//     </div>
//      </div>
          
//         <ListServersAPI />
        
        
        
      
//         </div>
        
//         )
        
//     };
    
//     export default ListServers;