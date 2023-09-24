import axios from "axios";

export default async function  uploadProfilePhoto(file : any, email: string){
     const response = axios({
        method: 'post',
        url: 'http://localhost:5000/api/fillDetails/individual',
        data: {profilePhoto : file},
        headers: {
            'email': "techdazex@gmail.com" ,
            contentType : 'application/json'
        }
    }).then(apiResponse=>{
         return apiResponse.data
     })
         .catch((err) => console.log(err));

}