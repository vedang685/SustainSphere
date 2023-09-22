import axios from "axios";

export default async function getBlogResults(_id : string){
    // TODO: remove the extra code
    // const options = {
    //     method: 'GET',
    //     url: 'http://localhost:5000/api/user/blog/currentBlog',
    //     params: {'_id' : _id},
    //     headers: {
    //         'content-type': 'application/json',
    //     },
    // };
    //
    // axios
    //     .request(options)
    //     .then(function (response) {
    //         return response
    //     })
    //     .catch(function (error) {
    //         console.error(error);
    //     });

  const response = await axios.post('http://localhost:5000/api/user/blog/currentBlog',{
        '_id' : _id,
    })
    return response.data
 }
