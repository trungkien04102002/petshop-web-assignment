import axios from 'axios';

export const getPets = async(page) => {

    if(page) page=1;
    try {
      // make axios post request
      const res = await axios({
        method: "get",
        url: `http://localhost:8000/controllers/productController.php/pets?page=${page}`,
      });
      return res.data;
    } catch(error) {
        return error.response.data;
    }
    
   
  }

export const getFoods = async(page) => {

    if(page) page=1;
    try {
      // make axios post request
      const res = await axios({
        method: "get",
        url: `http://localhost:8000/controllers/productController.php/foods?page=${page}`,
      });
      return res.data;
    } catch(error) {
        return error.response.data;
    }
    
   
  }

export const getServices = async(page) => {

    if(page) page=1;
    try {
      // make axios post request
      const res = await axios({
        method: "get",
        url: `http://localhost:8000/controllers/productController.php/services?page=${page}`,
      });
      return res.data;
    } catch(error) {
        return error.response.data;
    }
    
   
  }

export const getProducts = async(page) => {

    if(page) page=1;
    try {
      // make axios post request
      const res = await axios({
        method: "get",
        url: `http://localhost:8000/controllers/productController.php/products?page=${page}`,
      });
      return res.data;
    } catch(error) {
        return error.response.data;
    }
    
   
  }

export const getAllPets = async(page) => {

    if(page) page=1;
    try {
      // make axios post request
      const res = await axios({
        method: "get",
        url: "http://localhost:8000/controllers/productController.php/pets",
      });
      return res.data;
    } catch(error) {
        return error.response.data;
    }
    
   
  }

export const getAllPetFoods = async(page) => {

    if(page) page=1;
    try {
      // make axios post request
      const res = await axios({
        method: "get",
        url: "http://localhost:8000/controllers/productController.php/foods",
      });
      return res.data;
    } catch(error) {
        return error.response.data;
    }
    
   
  }

export const getAllServices = async(page) => {

    if(page) page=1;
    try {
      // make axios post request
      const res = await axios({
        method: "get",
        url: "http://localhost:8000/controllers/productController.php/services",
      });
      return res.data;
    } catch(error) {
        return error.response.data;
    }
    
   
  }

export const getAllProducts = async(page) => {

    if(page) page=1;
    try {
      // make axios post request
      const res = await axios({
        method: "get",
        url: "http://localhost:8000/controllers/productController.php/products",
      });
      return res.data;
    } catch(error) {
        return error.response.data;
    }
    
   
  }


export const search = async(keySearch) => {

    if(keySearch===undefined ||keySearch==='')
      return; 
    try {
      // make axios post request
      const res = await axios({
        method: "get",
        url: `http://localhost:8000/controllers/productController.php/searchItem?keySearch=${keySearch}`,
      }).then(res=>{return res.data})
      return res
    } catch(error) {
        return error.response.data;
    }
    
   
  }
