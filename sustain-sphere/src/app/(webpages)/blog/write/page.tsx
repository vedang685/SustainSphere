"use client"

import {useSession} from "next-auth/react";
import {redirect, useRouter} from "next/navigation";
import AppTest from "@/app/components/BlogEditor/App";
import React, {useState, useEffect} from "react";
import {Button} from "@/app/components/ui/button";



export default function Editor() {
    const router = useRouter()
            const {data: session} = useSession({
            required: true,
            onUnauthenticated() {
            redirect('/signin?callbackUrl=/blog/write')
        }
        })
        const [title, setTitle] = useState("");
        const [editorState, setEditorState] = useState();
        const [isButtonEnabled, setIsButtonEnabled] = useState(false);
        const [isContentEntered, setIsContentEntered] = useState(false)


     function handleEditorStateChange(newState: any) {
    setEditorState(newState);
    setIsContentEntered(Boolean(newState)); // Set isContentEntered to true if newState is not undefined
  }
  useEffect(() => {
    setIsButtonEnabled(title.trim() !== "" && isContentEntered);
  }, [title, isContentEntered])

  const email = session?.user?.email ?? "";

    async function publishBlog() {
        const res = await fetch("http://localhost:5000/api/user/blog", {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                content: JSON.stringify(editorState),
                date : new Date(),
                tags :" test"
            }),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                email: email,
            }
        })
        if(res.ok) {
            router.push("/blog")
        }
        console.error(res)
    }
    return(
        <>
    {(session && session.user) ? (
            <div className="text-black">
                <div className="container mx-auto px-4 space-y-4 w-full sm:w-[850px] my-6 flex flex-col items-center">
                    <h2 className="text-2xl font-bold md:text-3xl dark:text-white">Blogosphere: Share Your Ideas and
                    Insights
                    </h2>
                </div>
                <div className="container mx-auto px-4 space-y-4 w-full sm:w-[850px] my-6 flex flex-col items-center">
                    <p className="text-xl text-center">Start writing your eco-story with SustainSphere.</p>
                    <Button
              className="flex justify-center"
              size="small"
              disabled={!isButtonEnabled} // Disable the button when it's not enabled
              onClick={publishBlog}>Publish</Button>
                </div>

                <div className="px-48">
                    <div className="container">
                        <input
                            id="title"
                            required={true}
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="py-3 px-5 block w-full text-gray-600 border border-gray-400
                            rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Title"
                        />
                    </div>

                    <div className="container mb-10">
                        <AppTest onEditorStateChange={handleEditorStateChange}/>
                    </div>

                </div>
            </div>
    ) : (
        <div className="max-w-[85rem] h-screen px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div
                className="min-h-[15rem] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
                    <div className="flex justify-center">
                        <div
                            className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
                            role="status" aria-label="loading">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}
        </>
        );
}
