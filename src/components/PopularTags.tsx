import Image from "@/components/Image";
import Link from "next/link";


function PopularTags() {
    return (
        <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
            <h1 className="text-xl font-bold text-textGrayLight">What&#39;s Up</h1>
            {/*trending*/}
            <div className="flex gap-4">
                <div className="relative w-20 h-20  rounded-xl overflow-hidden">
                    <Image path="/general/messi.jpeg" alt="event" width={120} height={120}  tr={true}/>
                </div>
                <div className="flex-1 ">
                    <h2 className="font-bold text-textGrayLight">Bla bla bla event</h2>
                    <span className="text-sm text-textGray">tomorrow</span>
                </div>
            </div>
            {/*topics*/}
            <div className="">
                <div className="flex items-center justify-between">
                    <span className="text-textGray text-sm font-semibold">Soccer - Trending</span>
                    <Image path="icons/infoMore.svg" alt="more info" width={16} height={16} className="cursor-pointer"/>
                </div>
                <h2 className="text-textGrayLight font-bold">Barcelona</h2>
                <span className="text-textGray text-sm">1k posts</span>
            </div>
            <div className="">
                <div className="flex items-center justify-between">
                    <span className="text-textGray text-sm font-semibold">Soccer - Trending</span>
                    <Image path="icons/infoMore.svg" alt="more info" width={16} height={16} className="cursor-pointer"/>
                </div>
                <h2 className="text-textGrayLight font-bold">Barcelona</h2>
                <span className="text-textGray text-sm">1k posts</span>
            </div>
            <div className="">
                <div className="flex items-center justify-between">
                    <span className="text-textGray text-sm font-semibold">Soccer - Trending</span>
                    <Image path="icons/infoMore.svg" alt="more info" width={16} height={16} className="cursor-pointer"/>
                </div>
                <h2 className="text-textGrayLight font-bold">Barcelona</h2>
                <span className="text-textGray text-sm">1k posts</span>
            </div>
            <div className="">
                <div className="flex items-center justify-between">
                    <span className="text-textGray text-sm font-semibold">Soccer - Trending</span>
                    <Image path="icons/infoMore.svg" alt="more info" width={16} height={16} className="cursor-pointer"/>
                </div>
                <h2 className="text-textGrayLight font-bold">Barcelona</h2>
                <span className="text-textGray text-sm">1k posts</span>
            </div>
            <Link href="/" className="text-iconBlue">
                show more
            </Link>
        </div>
    );
}

export default PopularTags;