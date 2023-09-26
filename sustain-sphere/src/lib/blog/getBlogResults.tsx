import axios from "axios";

export default async function getBlogResults(_id : string){
    // TODO: remove hardcoded url
  const response = await axios.post('http://localhost:8000/api/user/blog/currentBlog',{
        '_id' : _id,
    })
    return response.data
 }
