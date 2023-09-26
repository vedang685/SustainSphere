
export default async function getAllBlogsResults(){
        const response = await fetch('http://localhost:8000/api/user/blog/getAll');
        return response.json()
}
