import Link from 'next/link'
import AppRender from "@/app/components/BlogEditor/AppRender";
import {useState} from "react";
import {Blogs} from "../../../../../../types/types";

type Props = {
    result: Blogs
}

export default function Item({ result }: Props) {
    function extractTextFromJSON(jsonObj : any) {
        const data: any = JSON.parse(jsonObj);
        const text: string = data.root.children[0].children[0].text;

        return text;
    }

    return  (
                <Link className="group rounded-xl overflow-hidden" href={`/blog/currentBlog/${result._id}`}>
                    <div className="sm:flex">
                        <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                            <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description"/>
                        </div>

                        <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                                {result.title}
                            </h3>
                            <p className="mt-3 text-gray-600 dark:text-gray-400">
                                {extractTextFromJSON(result.content)}
                                {/*<AppRender dataToRender={result.content}/>*/}
                            </p>
                            <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                                Read more
                                <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                            </p>
                        </div>
                    </div>
                </Link>
                )
}
