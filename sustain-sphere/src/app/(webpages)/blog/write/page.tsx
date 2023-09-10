
import { Button } from "@/app/components/ui/button"
import dynamic from "next/dynamic"

const MyEditor = dynamic( () => import('./editor'), { ssr: false } )

export default function Editor() {

    return (
        <div className="text-black">
            <h1 className="text-3xl font-bold">Write</h1>
            <form action="">
            <input type="text" className="border" placeholder="Title" />
            <MyEditor />
            <Button type="submit" >Publish</Button>
            </form>
        </div>
    )
}