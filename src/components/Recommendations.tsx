import Link from "next/link";
import Image from "@/components/Image"

function Recommendations() {
    return (
        <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
            {/*user card*/}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {/*avatar*/}
                    <div className="relative rounded-full overflow-hidden w-10 h-10">
                        <Image path="general/avatar.png" alt="Van" width={100} height={100} tr={true}></Image>
                    </div>
                    {/*userinfo*/}
                    <div className="">
                        <h1 className="text-md font-bold">Van Nistel Roy</h1>
                        <span className="text-textGray text-sm">@VanNistelRoy</span>
                    </div>
                </div>
                <button className="bg-white py-2 px-4 rounded-2xl text-black font-semibold">Follow</button>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {/*avatar*/}
                    <div className="relative rounded-full overflow-hidden w-10 h-10">
                        <Image path="general/avatar.png" alt="Van" width={100} height={100} tr={true}></Image>
                    </div>
                    {/*userinfo*/}
                    <div className="">
                        <h1 className="text-md font-bold">Van Nistel Roy</h1>
                        <span className="text-textGray text-sm">@VanNistelRoy</span>
                    </div>
                </div>
                <button className="bg-white py-2 px-4 rounded-2xl text-black font-semibold">Follow</button>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {/*avatar*/}
                    <div className="relative rounded-full overflow-hidden w-10 h-10">
                        <Image path="general/avatar.png" alt="Van" width={100} height={100} tr={true}></Image>
                    </div>
                    {/*userinfo*/}
                    <div className="">
                        <h1 className="text-md font-bold">Van Nistel Roy</h1>
                        <span className="text-textGray text-sm">@VanNistelRoy</span>
                    </div>
                </div>
                <button className="bg-white py-2 px-4 rounded-2xl text-black font-semibold">Follow</button>
            </div>
            <Link href="/" className="text-iconBlue">
                show more
            </Link>
        </div>
    );
}

export default Recommendations;