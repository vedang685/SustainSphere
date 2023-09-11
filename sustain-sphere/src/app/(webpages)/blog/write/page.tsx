"use client"
import { Button } from "@/app/components/ui/button"
import dynamic from "next/dynamic"
import MyEditor from "@/app/(webpages)/blog/write/editor";

export default function Editor() {

    return (
        <div className="text-black">

            <MyEditor />
        </div>
    )
}
