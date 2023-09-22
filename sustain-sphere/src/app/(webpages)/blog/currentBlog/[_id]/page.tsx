"use client"
import getBlogResults from "@/lib/blog/getBlogResults";
import SingleBlog from "@/app/(webpages)/blog/currentBlog/[_id]/components/SingleBlog";
import {BlogResult} from "../../../../../../types/types";

type Props = {
    params: {
        _id: string
    }
}
//TODO: make a not found div
export default async function BlogResults({ params: { _id } }: Props) {
    const blogData : Promise<SingleBlogResult>  = getBlogResults(_id)
    const data = await blogData
     const results: Blog | undefined = data?.blog

        return (
            <div>
                {results? <>
                    <SingleBlog  blg={results}/></> : <>Not Found</>}
                            </div>
        )
}
