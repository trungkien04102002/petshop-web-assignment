import React from 'react';
import {useEffect,useState} from 'react'
import axios from 'axios';

import ChangeButton from '../Button/changeButton';

const AvatarInput = ({title, des, value}) => {
    // const [state,setState]= useState({
    //     file: null,
    //     base64URL: ""
    // });

    // const [imageBase, setImageBase] =useState('');

    // // const state = {
    // //     file: null,
    // //     base64URL: ""
    // // };
    // const getBase64 = file => {
    //     return new Promise(resolve => {
    //       let fileInfo;
    //       let baseURL = "";
    //       // Make new FileReader
    //       let reader = new FileReader();
    
    //       // Convert the file to base64 text
    //       reader.readAsDataURL(file);
    
    //       // on reader load somthing...
    //       reader.onload = () => {
    //         // Make a fileInfo Object
    //         // console.log("Called", reader);
    //         baseURL = reader.result;
    //         // console.log(baseURL);
    //         setImageBase(baseURL)
            
    //         resolve(baseURL);
    //       };
    //       console.log(fileInfo);
    //     });
    //   };
    
    // const handleFileInputChange = e => {
    //     console.log(e.target.files[0]);
    //     let { file } = state;
    
    //     file = e.target.files[0];
    
    //     getBase64(file)
    //       .then(result => {
    //         file["base64"] = result;
    //         // console.log("File Is", file);
    //         this.setState({
    //           base64URL: result,
    //           file
    //         });
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       });
    
    //     setState({
    //       file: e.target.files[0]
    //     });
    //   };

    const [selectedFile, setSelectedFile] = React.useState(null);

    const handleSubmit = async(event) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append("selectedFile", selectedFile);
        try {
        const response = await axios({
            method: "post",
            url: "http://localhost:8000/controllers/userController.php/avatar",
            data: {avatar: selectedFile},
            headers: { Authorization: `Bearer ${localStorage.getItem('user')}`,
                "Content-Type": "multipart/form-data" },
        });
        } catch(error) {
        console.log(error)
        }
    }

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0])
      }

    return (
    <>
        <div className="flex flex-col lg:flex-row justify-between gap-4 pt-8 pr-8 ">

            <div className="flex flex-col gap-y-4 w-full">
                <p className="font-medium text-lg">{title}</p>
                
            <form onSubmit={handleSubmit}>
                <label className="block mb-2 text-sm font-medium text-gray-900" for="file_input">Upload file</label>
                <input  onChange={handleFileSelect}
                        className="block max-w-xl text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50" 
                        id="file_input" 
                        type="file"/>
                <input className="mt-2 px-4 rounded-2xl border-gray-400 border hover:border-gray-500" type="submit" value="Lưu" />
               
            </form>

            <p className="text-gray-400 lg:w-3/5">{des}</p>
           
            </div>
            
            
            <div  className="flex flex-row w-full h-fit">
                <img className="w-32 h-32" src={value} alt="" ></img>
                {/* <button onClick={()=>{}} className="w-[100px] rounded-2xl border px-4 py-1 boder-1 border-gray-300 text-gray-500 hover:border-gray-800">Lưu</button> */}
            </div>
            
            
        </div>
    </>
    );
}

export default AvatarInput;
