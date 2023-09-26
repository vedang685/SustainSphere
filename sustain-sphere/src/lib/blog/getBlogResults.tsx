import axios from "axios";

export default async function getBlogResults(_id : string){
    // TODO: remove hardcoded url
  const response = await axios.post(`${process.env.BLOG_POST_URL}/currentBlog`,{
        '_id' : _id,
    })
    return response.data
 }
