import Link from "next/link";
import Search from "@/components/Search";
import PopularTags from "@/components/PopularTags";
import Recommendations from "@/components/Recommendations";

function RightBar() {
    return (
        <div className="pt-4 flex flex-col gap-4 sticky top-0 h-max ">
            <Search />
            <PopularTags />
            <Recommendations />
            <div className="text-textGray text-sm flex gap-x-4 flex-wrap">
                <Link href="/">Terms of service</Link>
                <Link href="/">Privacy Policy</Link>
                <Link href="/">Cookie Policy</Link>
                <Link href="/">Accessability</Link>
                <Link href="/">Ads Info</Link>
                <span>{new Date().getFullYear()} Jédy Inc. </span>
            </div>
        </div>
    );
}

export default RightBar;