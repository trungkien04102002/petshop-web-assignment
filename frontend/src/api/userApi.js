import axios from 'axios';

export const signIn = async(formValue) => {

    if( formValue.email==='' || formValue.password===''){
        return;
    }

    try {
      // make axios post request
      const res = await axios({
        method: "post",
        url: "http://localhost:8000/controllers/userController.php/login",
        data: formValue,
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } catch(error) {
        return error.response.data;
    }
    
   
  }

export const signUp = async(formValue) => {

    if(formValue.name==='' || formValue.phoneNumber==='' || formValue.password==='' || formValue.email===''){
        return;
    }

    try {
      // make axios post request
      const res = await axios({
        method: "post",
        url: "http://localhost:8000/controllers/userController.php/signup",
        data: formValue,
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } catch(error) {
        return error.response.data;
    }
     
  }

export const userInfo = async(token) => {

    if(token === undefined){
        return 
    }
    try {
      // make axios post request
      const res = await axios({
        method: "get",
        url: "http://localhost:8000/controllers/userController.php/profile/",
        headers: {Authorization: `Bearer ${token}` },
      });
      return res.data;
    } catch(error) {
        return error.response.data;
    }
    
   
  }

export const userAvatar = async(token) => {

    if(token === undefined){
        return 
    }
    try {
      // make axios post request
      const res = await axios({
        method: "get",
        url: "http://localhost:8000/controllers/userController.php/avatar",
        headers: {Authorization: `Bearer ${token}` },
      });
      
      return res.data;
    } catch(error) {
        return error.response.data;
    }
    
   
  }

export const changeAvatar = async(token,data) => {

    if(token === undefined){
        return 
    }
    try {
      // make axios post request
      const res = await axios({
        method: "get",
        url: "http://localhost:8000/controllers/userController.php/avatar",
        headers: {Authorization: `Bearer ${token}` },
      });
      
      return res.data;
    } catch(error) {
        return error.response.data;
    }
    
   
  }

export const changeUserInfo = async(token,data) => {

    if(token === undefined){
        return 
    }
    try {
      // make axios post request
      const res = await axios({
        method: "patch",
        url: "http://localhost:8000/controllers/userController.php/edit",
        data:data,
        headers: {Authorization: `Bearer ${token}`,
                  'content-type': 'application/x-www-form-urlencoded' },
      });
      
      return res.data;
    } catch(error) {
        return error.response.data;
    }
    
   
  }

export const userOrder = async(token) => {

    if(token === undefined){
        return 
    }
    try {
      // make axios post request
      const res = await axios({
        method: "get",
        url: "http://localhost:8000/controllers/orderController.php",
        headers: {Authorization: `Bearer ${token}` },
      });
      
      return res;
    } catch(error) {
        return error.response.data;
    }
    
   
  }

export const createOrder = async(token,order,payment) => {

  if( order===undefined || payment ===[]){
    return;
} 
    if(token === undefined){
        return 
    }
    try {
      // make axios post request
      const res = await axios({
        method: "post",
        url: "http://localhost:8000/controllers/orderController.php",
        data: {
          order:order,
          paymentMethod:payment
        },
        headers: {Authorization: `Bearer ${token}`,
                  "Content-Type": "multipart/form-data" }
      });
      
      return res;
    } catch(error) {
        return error.response;
    }  
  }

export const userFeedback= async() => {

    try {
      // make axios post request
      const res = await axios({
        method: "get",
        url: "http://localhost:8000//controllers/reviewController.php",
      });
      return res.data;
    } catch(error) {
        return error.response.data;
    }
    
   
  }

export const postFeedback= async(token,data) => {

    try {
      // make axios post request
      const res = await axios({
        method: "post",
        url: "http://localhost:8000//controllers/reviewController.php",
        data:{content:data},
        headers: {Authorization: `Bearer ${token}`,
        'content-type': 'application/x-www-form-urlencoded' }
      });
      return res.data;
    } catch(error) {
        return error.response.data;
    }
    
   
  }

export const changePassword= async(token,data) => {

    try {
      // make axios post request
      const res = await axios({
        method: "patch",
        url: "http://localhost:8000/controllers/userController.php/editpassword",
        data:{password:data},
        headers: {Authorization: `Bearer ${token}`,
        'content-type': 'application/x-www-form-urlencoded' }
      });
      return res.data;
    } catch(error) {
        return error.response.data;
    }
    
   
  }

  


// admin api

export const getUser = async(token) => {

    if(token === undefined){
        return 
    }
    try {
      // make axios post request
      const res = await axios({
        method: "get",
        url: "http://localhost:8000/controllers/adminController.php/users",
        headers: {Authorization: `Bearer ${token}` },
      });
      
      return res;
    } catch(error) {
        return error.response.data;
    }
    
   
  }

export const getAllOrder = async(token) => {

    if(token === undefined){
        return 
    }
    try {
      // make axios post request
      const res = await axios({
        method: "get",
        url: "http://localhost:8000/controllers/adminController.php/orders",
        headers: {Authorization: `Bearer ${token}` },
      });
      
      return res.data;
    } catch(error) {
        return error.response.data;
    }
    
   
  }

export const updateOrderStatus= async(token,data) => {

    try {
      // make axios post request
      const res = await axios({
        method: "patch",
        url: "http://localhost:8000/controllers/adminController.php/orderstate",
        data:{orderID:data},
        headers: {Authorization: `Bearer ${token}`,
        'content-type': 'application/x-www-form-urlencoded' }
      });
      return res.data;
    } catch(error) {
        return error.response.data;
    }
    
   
  }

export const editPet = async(token,data) => {

    if(token === undefined){
        return 
    }
    try {
      // make axios post request
      const res = await axios({
        method: "patch",
        url: "http://localhost:8000/controllers/adminController.php/editPet",
        data:data,
        headers: {Authorization: `Bearer ${token}`,
                  'content-type': 'application/x-www-form-urlencoded' },
      });
      
      return res;
    } catch(error) {
        return error.response.data;
    }
    
   
  }

export const editFood = async(token,data) => {

    if(token === undefined){
        return 
    }
    try {
      // make axios post request
      const res = await axios({
        method: "patch",
        url: "http://localhost:8000/controllers/adminController.php/editFood",
        data:data,
        headers: {Authorization: `Bearer ${token}`,
                  'content-type': 'application/x-www-form-urlencoded' },
      });
      
      return res;
    } catch(error) {
        return error.response.data;
    }
    
   
  }

export const editProduct = async(token,data) => {

    if(token === undefined){
        return 
    }
    try {
      // make axios post request
      const res = await axios({
        method: "patch",
        url: "http://localhost:8000/controllers/adminController.php/editPet",
        data:data,
        headers: {Authorization: `Bearer ${token}`,
                  'content-type': 'application/x-www-form-urlencoded' },
      });
      
      return res;
    } catch(error) {
        return error.response.data;
    }
    
   
  }

export const editService = async(token,data) => {

    if(token === undefined){
        return 
    }
    try {
      // make axios post request
      const res = await axios({
        method: "patch",
        url: "http://localhost:8000/controllers/adminController.php/editService",
        data:data,
        headers: {Authorization: `Bearer ${token}`,
                  'content-type': 'application/x-www-form-urlencoded' },
      });
      
      return res;
    } catch(error) {
        return error.response.data;
    }
    
   
  }  

