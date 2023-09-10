import Link from "next/link";
import Page404 from "@/app/components/ui/404page/page404";

export default function NotFound() {
    return (
        <div className="global">
            <Page404/>
            <Link href="/">Return Home</Link>
        </div>
    );
}
