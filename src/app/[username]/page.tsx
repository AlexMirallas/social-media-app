import Link from "next/link";
import Image from "@/components/Image";
import Feed from "@/components/Feed";


function Page() {
    return (
        <div>
            <div className="items-center flex gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#22222287]">
                <Link href="/">
                    <Image path="icons/back.svg" alt="back" width={24} height={24} />
                </Link>
                <h1 className="font-bold text-lg">Qlex Dev</h1>
            </div>

            {/*info*/}
            <div>
                {/*cover/avatar*/}
                <div className="relative w-full ">
                    {/*cover*/}
                    <div className="w-full aspect-[3/1] relative">
                        <Image path="general/cover.jpg" alt="cover" width={600} height={200} />
                    </div>
                    {/*avatar*/}
                    <div className="w-1/6 aspect-square absolute rounded-full overflow-hidden border-4 border-black bg-gray-300 left-4 -translate-y-1/2">
                        <Image path="general/avatar.png" alt="avatar" width={100} height={100} tr={true} />
                    </div>
                </div>
                <div className="flex w-full items-center justify-end gap-2 p-2">
                    <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
                        <Image path="icons/more.svg" alt="more" width={20} height={20} />
                    </div>
                    <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
                        <Image path="icons/explore.svg" alt="explore" width={20} height={20} />
                    </div>
                    <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
                        <Image path="icons/message.svg" alt="message icon" width={20} height={20} />
                    </div>
                    <button className="py-2 px-4 bg-white text-black font-bold rounded-full">Follow</button>
                </div>
                {/*user info*/}
                <div className="p-4 flex flex-col gap-2">
                    <div className="">
                        <h1 className="text-2xl font-bold" >Qlex Dev</h1>
                        <span className="text-textGray text-sm">@qlexwebdev</span>
                    </div>
                    <p>Qlex dev Insta page</p>
                    {/*location*/}
                    <div className="flex gap-4 text-textGray text-[15px] ">
                        <div className="flex items-center gap-2">
                            <Image path="icons/userLocation.svg" alt="location" width={20} height={20} />
                            <span>France </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image path="icons/date.svg" alt="date" width={20} height={20} />
                            <span>Joined Never </span>
                        </div>
                    </div>
                    {/*followers*/}
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                            <span className="font-bold">1000</span>
                            <span className="text-textGray text-[15px]">followers</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold">0</span>
                            <span className="text-textGray text-[15px]">following</span>
                        </div>
                    </div>
                </div>

            </div>
            <Feed />
        </div>
    );
}

export default Page;