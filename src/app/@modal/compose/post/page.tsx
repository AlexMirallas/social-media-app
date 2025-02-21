"use client"

import Image from "@/components/Image";
import {useRouter} from "next/navigation";
import React from "react";




const PostModal =()=>{

    const router = useRouter();

    const closeModal = ()=>{
        router.back()
    }


    return (
        <div className="absolute w-screen h-screen top-0 left-0 z-20 bg-[#70707075] flex justify-center">
            <div className="py-4 px-8 rounded-xl bg-black w-[600px] h-max mt-16">
                {/*top*/}
                <div className="flex items-center justify-between">
                    <div className="cursor-pointer" onClick={closeModal}>X</div>
                    <div className="text-iconBlue font-bold">Drafts</div>
                </div>
                {/*main*/}
                <div className="py-8 flex gap-4">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <Image path="general/avatar.png" alt="avatar" width={100} height={100} tr={true} />
                    </div>
                    <input className="flex-1 bg-transparent outline-none text-lg" type="text" placeholder="Wazzzzz up" />
                </div>
                {/*icons*/}
                <div className="flex items-center justify-between gap-4 flex-wrap border-t border-borderGray pt-4">
                    <div className="flex gap-4 flex-wrap">
                        <Image path="icons/image.svg" alt="image icon" width={20} height={20} className="cursor-pointer" />
                        <Image path="icons/gif.svg" alt="gif icon" width={20} height={20} className="cursor-pointer" />
                        <Image path="icons/poll.svg" alt="poll icon" width={20} height={20} className="cursor-pointer" />
                        <Image path="icons/emoji.svg" alt="emoji icon" width={20} height={20} className="cursor-pointer" />
                        <Image path="icons/schedule.svg" alt="schedule icon" width={20} height={20} className="cursor-pointer" />
                        <Image path="icons/location.svg" alt="location icon" width={20} height={20} className="cursor-pointer" />
                    </div>
                    <button className="py-2 px-5 text-black bg-white rounded-full font-bold">Post</button>
                </div>
            </div>
        </div>
    )
}

export default PostModal;