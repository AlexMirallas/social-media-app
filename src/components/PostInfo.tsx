import Image from "@/components/Image";

function PostInfo() {
    return (
        <div className="cursor-pointer w-4 h-4 relative">
            <Image path="icons/infoMore.svg" alt="info more icon" width={16} height={16}/>
        </div>
    );
}

export default PostInfo;