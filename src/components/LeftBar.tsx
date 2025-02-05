import Link from "next/link";
import Image from "@/components/Image";


const menu = [
    {
        id:1,
        name: "Home",
        link: "/",
        icon: "home.svg",
    },
    {
        id:2,
        name: "Explore",
        link: "/",
        icon: "explore.svg",
    },
    {
        id:3,
        name: "Notifications",
        link: "/",
        icon: "notification.svg",
    },
    {
        id:4,
        name: "Messages",
        link: "/",
        icon: "message.svg",
    },
    {
        id:5,
        name: "Bookmarks",
        link: "/",
        icon: "bookmark.svg",
    },
    {
        id:6,
        name: "Jobs",
        link: "/",
        icon: "job.svg",
    },
    {
        id:7,
        name: "Communities",
        link: "/",
        icon: "community.svg",
    },
    {
        id:8,
        name: "Premium",
        link: "/",
        icon: "logo.svg",
    },
    {
        id:9,
        name: "Profile",
        link: "/",
        icon: "profile.svg",
    },
    {
        id:10,
        name: "More",
        link: "/",
        icon: "more.svg",
    }
]

function LeftBar() {
    return (
        <div className="sticky h-screen top-0 flex flex-col justify-between pt-2 pb-8">
            {/* Logo / menu / button */}
            <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">

                {/* Logo */}
                <Link href="/" className="p-2 rounded-full hover:bg-cyan-950">
                    <Image path="icons/logo.svg" alt="logo" width={24} height={24} />
                </Link>
                {/* Menu */}
                <div className="flex flex-col gap-4 ">
                    {menu.map((item) => (
                        <Link
                            href={item.link}
                            key={item.id}
                            className="flex p-2 rounded-full hover:bg-cyan-950 items-center gap-4">
                            <Image
                                path={`icons/${item.icon}`}
                                alt={item.name}
                                width={24}
                                height={24} />
                            <span className="hidden xxl:inline">{item.name}</span>
                        </Link>
                    ))}
                </div>
                {/* button*/}
                <Link
                    href="/"
                    className="bg-white text-black rounded-full font-bold w-12 h-12 flex items-center justify-center hover:scale-125 transition ease-in-out duration-600 xxl:hidden">
                    <Image  path="icons/post.svg" alt="new post" width={24} height={24} />
                </Link>
                <Link href="/" className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20">
                    Post
                </Link>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 relative rounded-full overflow-hidden">
                            <Image path="/general/avatar.png" alt="avatar" tr={true} />s
                    </div>
                    <div className="hidden xxl:flex flex-col ">
                        <span className="font-bold">Qlex</span>
                        <span className="text-sm text-textGray">@qlexwebdev</span>
                    </div>
                </div>
                <div className="hidden xxl:block cursor-pointer font bold">...</div>
            </div>
        </div>
    );
}

export default LeftBar;