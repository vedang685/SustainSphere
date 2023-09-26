
export default async function getAllBlogsResults(){
        const response = await fetch(`${process.env.BLOG_POST_URL}/getAll`);
        return response.json()
}
