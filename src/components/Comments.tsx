import Post from "@/components/Post";
import Image from "@/components/Image";

function Comments() {
    return (
        <div className="">
            <form className="flex items-center justify-between gap-4 p-4" >
                <div className="relative rounded-full overflow-hidden w-10 h-10">
                    <Image path="general/avatar.png" alt="qlex" width={100} height={100} tr={true}/>
                </div>
                <input type="text" className="flex-1 bg-transparent outline-none p-2 text-xl" placeholder="Post your reply"/>
                <button className="py-2 px-4 font bold rounded-full bg-black text-white">reply</button>
            </form>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Comments;