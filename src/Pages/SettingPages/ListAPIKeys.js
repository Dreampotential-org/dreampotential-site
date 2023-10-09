
import React, {useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import ListAPIKeysAPI from '../../Components/Dashboard/ListAPIKeysAPI';

import "../ListProjectServices.css";


const ListAPIKeys = () => {

const navigate = useNavigate();

  const navigateToCreateAPIKey = () => {
    // 👇️ navigate to /
    navigate('/Settings/create-api-key');
  };


    return(
        <div >
        
        <div>
    <div class="top-div"></div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">pipelines</a>
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" href="#">Agents</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Test suites</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/Settings">Settings</a>
            </li>
        </ul>
    </nav>
    <div class="navDiv">
        <nav class="navbar mynav justify-content-between">
            <a class="navbar-brand">API Keys List</a>
            <form class="form-inline">
                <input class="form-control inpt" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="button" onClick={navigateToCreateAPIKey}>+</button>
            </form>
        </nav>
    </div>
</div>
        
          
        <ListAPIKeysAPI />
        
        
        
      
        </div>
        
        )
        
    };
    
    export default ListAPIKeys;