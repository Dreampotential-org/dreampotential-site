import axiosInstance from "../services/axios";
import axios from "axios";

export const leadCreateApi = async (payload) => {

    try {
    const res = await axiosInstance
      .post("/lead/", payload);
    console.log("res=>", res);
    return res;
  } catch (err) {
    if (err.res) {
    } else if (err.request) {
      // The request was made but no response was received   
      var resp = JSON.parse(err.request.response);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", err.message);
    }
  }
  };

  export const signUPApi = async (payload) => {
    try {
      
      // const res = await axiosInstance.post("http://app.realtorstat.com:8021/usersystem/user/register", payload);
      const res = await axiosInstance.post("https://api.dreampotential.org/usersystem/user/register", payload);
      // const res = await axiosInstance.post("/usersystem/user/register/", payload);
      localStorage.setItem('Token', JSON.stringify(res.token));
      return res;
    } catch (error) {
        throw error.response.data;
    }
  };

//create project service API

export const createProjectServiceAPI = async (payload) => {
  const tokenWithQuotes = localStorage.getItem('Token');
  const token = tokenWithQuotes.replace(/^"(.*)"$/, '$1');
  console.log(token);
  
  try {
   
   const res = await axios.post("https://api.dreampotential.org/api/project-service", payload, {
  headers: {
            // "Authorization": "Token d86c1dced838c8cd3ce5cd902ba9ad4af397d4b9cf8c443beb316e35b2cce5d8"
     'Authorization': `Token ${token}`,
   
  }
})
    
    return res;
  } catch (error) {
    if (error.response) {  
      throw error.response.data;
    } else if (error.request) {
    } else {
    }
  }

} 






export const list_project_services = async(payload) => {
  try {
    const res = await axiosInstance.get("https://api.dreampotential.org/api/list-project-services", payload);
    return res;
  } catch (error) {
    if (error.response) {  
      throw error.response.data;
    } else if (error.request) {
    } else {
    }
  }

} 

//API for create_sshkey

export const CreateSSHKey = async (payload) => {
  const tokenWithQuotes = localStorage.getItem('Token');
  const token = tokenWithQuotes.replace(/^"(.*)"$/, '$1');
  console.log(token);
  
  try {
   
   const res = await axios.post("https://api.dreampotential.org/api/create-keypair", payload, {
  headers: {
            // "Authorization": " Token 7f579f80d9efc1f1f5b19763cc88ad4773f87fad9f3e3589e881739d0f843e5e",
     'Authorization': `Token ${token}`,
   
  }
})
    
    return res;
  } catch (error) {
    if (error.response) {  
      throw error.response.data;
    } else if (error.request) {
    } else {
    }
  }

} 



//API for add-member

export const AddMemberAPI = async (payload) => {
  const tokenWithQuotes = localStorage.getItem('Token');
  const token = tokenWithQuotes.replace(/^"(.*)"$/, '$1');
  console.log(token);
  
  try {
   
   const res = await axios.post("https://api.dreampotential.org/api/add_member/", payload, {
  headers: {
            // "Authorization": " Token 7f579f80d9efc1f1f5b19763cc88ad4773f87fad9f3e3589e881739d0f843e5e",
     'Authorization': `Token ${token}`,
   
  }
})
    
    return res;
  } catch (error) {
    if (error.response) {  
      throw error.response.data;
    } else if (error.request) {
    } else {
    }
  }

} 


//Create project API

export const CreateProjectAPI = async (payload) => {
  const tokenWithQuotes = localStorage.getItem('Token');
  const token = tokenWithQuotes.replace(/^"(.*)"$/, '$1');
  console.log(token);
  
  try {
   
   const res = await axios.post("https://api.dreampotential.org/api/project", payload, {
  headers: {
            // "Authorization": " Token 7f579f80d9efc1f1f5b19763cc88ad4773f87fad9f3e3589e881739d0f843e5e",
     'Authorization': `Token ${token}`,
   
  }
})
    
    return res;
  } catch (error) {
    if (error.response) {  
      throw error.response.data;
    } else if (error.request) {
    } else {
    }
  }

} 


//Create APIKey API


export const CreateAPIKeyAPI = async (payload) => {
  const tokenWithQuotes = localStorage.getItem('Token');
  const token = tokenWithQuotes.replace(/^"(.*)"$/, '$1');
  console.log(token);
  
  try {
   
   const res = await axios.post("https://api.dreampotential.org/api/create-api-key", payload, {
  headers: {
            // "Authorization": " Token 7f579f80d9efc1f1f5b19763cc88ad4773f87fad9f3e3589e881739d0f843e5e",
     'Authorization': `Token ${token}`,
   
  }
})
    
    return res;
  } catch (error) {
    if (error.response) {  
      throw error.response.data;
    } else if (error.request) {
    } else {
    }
  }

} 


// Create Project Command API


export const CreateProjectCommandAPI = async (payload) => {
  const tokenWithQuotes = localStorage.getItem('Token');
  const token = tokenWithQuotes.replace(/^"(.*)"$/, '$1');
  console.log(token);
  
  try {
   
   const res = await axios.post("https://api.dreampotential.org/api/project-command", payload, {
  headers: {
            // "Authorization": " Token 7f579f80d9efc1f1f5b19763cc88ad4773f87fad9f3e3589e881739d0f843e5e",
     'Authorization': `Token ${token}`,
   
  }
})
    
    return res;
  } catch (error) {
    if (error.response) {  
      throw error.response.data;
    } else if (error.request) {
    } else {
    }
  }

} 


//create server API


export const CreateServerAPI = async (payload) => {
  const tokenWithQuotes = localStorage.getItem('Token');
  const token = tokenWithQuotes.replace(/^"(.*)"$/, '$1');
  console.log(token);
  
  try {
   
   const res = await axios.post("https://api.dreampotential.org/api/server", payload, {
  headers: {
            // "Authorization": " Token 7f579f80d9efc1f1f5b19763cc88ad4773f87fad9f3e3589e881739d0f843e5e",
     'Authorization': `Token ${token}`,
   
  }
})
    
    return res;
  } catch (error) {
    if (error.response) {  
      throw error.response.data;
    } else if (error.request) {
    } else {
    }
  }

} 


//create server group API

export const CreateServerGroupAPI = async (payload) => {
  const tokenWithQuotes = localStorage.getItem('Token');
  const token = tokenWithQuotes.replace(/^"(.*)"$/, '$1');
  console.log(token);
  
  try {
   
   const res = await axios.post("https://api.dreampotential.org/api/server-group", payload, {
  headers: {
            // "Authorization": " Token 7f579f80d9efc1f1f5b19763cc88ad4773f87fad9f3e3589e881739d0f843e5e",
     'Authorization': `Token ${token}`,
   
  }
})
    
    return res;
  } catch (error) {
    if (error.response) {  
      throw error.response.data;
    } else if (error.request) {
    } else {
    }
  }

} 


//create org API


export const CreateOrgAPI = async (payload) => {
  const tokenWithQuotes = localStorage.getItem('Token');
  const token = tokenWithQuotes.replace(/^"(.*)"$/, '$1');
  console.log(token);
  
  try {
   
   const res = await axios.post("https://api.dreampotential.org/api/create-org", payload, {
  headers: {
            // "Authorization": " Token 7f579f80d9efc1f1f5b19763cc88ad4773f87fad9f3e3589e881739d0f843e5e",
     'Authorization': `Token ${token}`,
   
  }
})
    
    return res;
  } catch (error) {
    if (error.response) {  
      throw error.response.data;
    } else if (error.request) {
    } else {
    }
  }

} 

//create project service API

export const CreateProjectServiceAPI = async (payload) => {
  const tokenWithQuotes = localStorage.getItem('Token');
  const token = tokenWithQuotes.replace(/^"(.*)"$/, '$1');
  console.log(token);
  
  try {
   
   const res = await axios.post("https://api.dreampotential.org/api/project-service", payload, {
  headers: {
            // "Authorization": " Token 7f579f80d9efc1f1f5b19763cc88ad4773f87fad9f3e3589e881739d0f843e5e",
     'Authorization': `Token ${token}`,
   
  }
})
    
    return res;
  } catch (error) {
    if (error.response) {  
      throw error.response.data;
    } else if (error.request) {
    } else {
    }
  }

} 


  export const logInApi= async (payload) => {
    try {
      // const res = await axiosInstance.post("http://app.realtorstat.com:8021/usersystem/user/login", payload);
      const res = await axiosInstance.post("https://api.dreampotential.org/usersystem/user/login", payload);
     localStorage.setItem('Token', JSON.stringify(res.data.token));
     console.log(JSON.stringify(res.data.token));
      return res;
      
    } catch (error) {
      if (error.response) {  
        throw error.response.data;
      } else if (error.request) {
      } else {
      }
    }
  };


