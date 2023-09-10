import BlogCard from "@/app/components/ui/blog/BlogCard";

export default function Blogs(){
    return<>
        <div className="max-w-2xl mx-auto my-10 text-center mb-10 lg:mb-14">
            <h2 className="text-1xl text-gray-800 font-bold md:text-6xl md:leading-tight ">Blogs</h2>
            <p className="mt-1 text-gray-600 text-2xl">Stay in the know with insights from industry experts.</p>
        </div>
        <BlogCard/>
    </>
}
