import Image from "@/components/Image";
import PostInfo from "@/components/PostInfo";
import PostInteractions from "@/components/PostInteractions";
import {imagekit} from "@/utils";
import Video from "./Video";

interface FileDetailsResponse{
    width:number;
    height:number;
    filePath:string;
    url:string;
    fileType:string;
    customMetadata?:{sensitive:boolean};
}

async function Post() {
    const getFileDetails = async (fileId:string): Promise<FileDetailsResponse> => {
        return new Promise((resolve, reject) => {
            imagekit.getFileDetails(fileId, function(error, result) {
                if(error) reject(error);
                else resolve(result as FileDetailsResponse);
            });
        })
    };

    const fileDetails = await getFileDetails("67a3e064432c47641675d462")


    return (
        <div className="border-y-[1px] p-4 border-borderGray">
            {/* Post type*/}
            <div className="flex items-center gap-2 text-sk text-textGray mb-2 font-bold">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24">
                    <path
                        fill="#71767b"
                        d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
                    />
                </svg>
                <span className="font-bold text-textGray">qlex reposted</span>
            </div>
            {/*post content*/}
            <div className="flex gap-4 " >
                {/*Image*/}
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image path="general/avatar.png" alt="user avatar" width={100} height={100} tr={true} />
                </div>
                {/*content*/}
                <div className="flex-1 flex flex-col gap-2">
                    {/*top section*/}
                    <div className="flex items-center justify-between gap-2 ">
                        <div className="flex items-center gap-2 flex-wrap">
                            <h1 className="text-md font-bold">Qlex</h1>
                            <span className="text-textGray">@qlexwebdev</span>
                            <span className="text-textGray">1 hour ago</span>
                        </div>
                        <PostInfo />
                    </div>
                    {/*Text & media*/}
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in the
                        1960s with the release of sheets containing Lorem Ipsum passages, and more
                        recently with desktop publishing software like Aldus PageMaker including versions
                        of Lorem Ipsum.
                    </p>
                    {/*<Image path="general/post.jpeg" alt="text post" width={600} height={600}  />*/}
                    {fileDetails && fileDetails.fileType ==="image"? (
                        <Image
                            path={fileDetails.filePath}
                            alt="my image"
                            width={fileDetails.width}
                            height={fileDetails.height}
                            // className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}
                        />
                    ) : <Video
                        path={fileDetails.filePath}
                        className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}
                        />}
                    <PostInteractions />
                </div>
            </div>
        </div>
    );
}

export default Post;