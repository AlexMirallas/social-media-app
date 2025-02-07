"use client"

import Image from "@/components/Image";
import NextImage from "next/image"
import React, {useState} from "react";
import {shareAction} from "@/actions";
import ImageEditor from "@/components/ImageEditor";

function Share() {
    const [media, setMedia] = useState<File | null>(null);
    const [isEditorOpen, setEditorOpen] = useState(false);
    const [settings, setSettings] = useState<{
        type: "original" | "wide" | "square";
        sensitive: boolean;
    }>({
        type: "original",
        sensitive: false,

    })

    console.log(media)


    const handleMediaChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        if (e.target.files && e.target.files[0]) {
            setMedia(e.target.files[0]);
        }
    }

    const previewURL = media?  URL.createObjectURL(media) : null;

    return (
        <form className="p-4 flex gap-4" action={formData => shareAction(formData,settings)}>
            {/*Avatar*/}
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image path="general/avatar.png" alt="Avatar" width={100} height={100} tr={true} />
            </div>
            {/*Others*/}
            <div className="flex flex-1 flex-col gap-4">
                <input
                    type="text"
                    name="desc"
                    placeholder="What is happening?"
                    className="bg-transparent outline-none placeholder:text-textGray text-xl"
                />
                {
                    media?.type.includes("image") &&  previewURL && (<div className="relative rounded-xl overflow-hidden">
                            <NextImage
                                src={previewURL}
                                alt="preview"
                                width={600}
                                height={600}
                                className={`w-full 
                                    ${settings.type==="original" ? "h-full object-contain" 
                                    : settings.type==="square" ? "aspect-square object-cover" 
                                        : "aspect-video object-cover"}`}
                            />
                            <div
                                className="absolute top-2 left-2 bg-black bg-opacity-50 text-white py-1 px-4 rounded-full font-bold text-sm cursor-pointer"
                                onClick={()=>setEditorOpen(true)}
                            >
                                Edit
                            </div>
                        <div
                            className="absolute top-2 right-2 bg-black bg-opacity-50 text-white h-8 w-8 flex items-center justify-center  rounded-full cursor-pointer font-bold text-sm"
                            onClick={()=>setMedia(null)}
                        >
                            X
                        </div>
                    </div>)
                }
                {
                   media?.type.includes("video") && previewURL && (
                       <div className="relative">
                           <video src={previewURL} controls />
                           <div
                                className="absolute top-2 right-2 bg-black bg-opacity-50 text-white h-8 w-8 flex items-center justify-center  rounded-full cursor-pointer font-bold text-sm"
                                onClick={()=>setMedia(null)}
                           >
                               X
                           </div>
                       </div>)
                }
                {isEditorOpen && previewURL &&
                    (<ImageEditor
                        onClose={()=>setEditorOpen(false)}
                        previewURL={previewURL}
                        settings={settings}
                        setSettings={setSettings}
                    />)}
                <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex gap-4 flex-wrap">
                        <input
                            type="file"
                            name="file"
                            onChange={handleMediaChange}
                            className="hidden"
                            id="file"
                            accept="image/*,video/*"
                        />
                        <label htmlFor="file">
                            <Image
                                path="icons/image.svg"
                                alt="image icon"
                                width={20}
                                height={20}
                                className="cursor-pointer"
                            />
                        </label>

                        <Image path="icons/gif.svg" alt="gif icon" width={20} height={20} className="cursor-pointer" />
                        <Image path="icons/poll.svg" alt="poll icon" width={20} height={20} className="cursor-pointer" />
                        <Image path="icons/emoji.svg" alt="emoji icon" width={20} height={20} className="cursor-pointer" />
                        <Image path="icons/schedule.svg" alt="schedule icon" width={20} height={20} className="cursor-pointer" />
                        <Image path="icons/location.svg" alt="location icon" width={20} height={20} className="cursor-pointer" />
                    </div>
                    <button className="bg-white text-black font-bold rounded-full py-2 px-4">Post</button>
                </div>
            </div>
        </form>
    );
}

export default Share;