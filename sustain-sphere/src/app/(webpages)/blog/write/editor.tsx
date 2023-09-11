import { OutputData } from "@editorjs/editorjs";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";
import {Button} from "@/app/components/ui/button";

// important that we use dynamic loading here
// editorjs should only be rendered on the client side.
const EditorBlock = dynamic(() => import("../../../components/CustomEditor/Editor"), {
    ssr: false,
});

const Home: NextPage = () => {
    //state to hold output data. we'll use this for rendering later
    const [data, setData] = useState<OutputData>();
    return (
        <>
            <div className="container mx-auto px-4 space-y-4 w-full sm:w-[850px] my-14">
                Draft
                <div className="flex items-center justify-between mb-1.5">
                    <h1 className="text-3xl font-bold">Write</h1>
                    <Button size="small">Publish</Button>
                </div>
                <div className="grid w-full items-center gap-1.5">
                    <input
                        id="email"
                        required={true}
                        type="text"
                        className="py-3 px-5 block w-full text-gray-600 rounded-md text-4xl"
                        placeholder="Title"
                    />
                </div>
                <div className="grid w-full items-center gap-1.5 border rounded-md">
                    <div    className="py-3 px-5 block w-full text-gray-600 rounded-md">
                        <EditorBlock
                            data={data}
                            onChange={()=>{
                                setData
                                console.log(data)

                            }}
                            holder="editorjs-container"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
