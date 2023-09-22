"use client"
import getAllBlogsResults from "@/lib/blog/getAllBlogsResult";
import Item from "@/app/(webpages)/blog/all/components/Item";
import {BlogResult, Blogs} from "../../../../../types/types";

export default async function BlogResults() {
    const blogData: Promise<BlogResult>  = getAllBlogsResults()
    const data = await blogData
    const results: Blogs[] | undefined = data?.blogs
    const content = (
        <>
            {results
                ? Object.values(results).map(result => {
                    return (
                        <Item key={result._id} result={result} />)
                })
                : <h2 className="p-2 text-xl">{` Not Found`}</h2>
            }
       </>
    )

    return (
    <>
        <div className="max-w-[85rem] px-4 py-6 sm:px-6 lg:px-8 lg:py-10 mx-auto">
            <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
                {content}
            </div>
        </div>)
    </>)
}
