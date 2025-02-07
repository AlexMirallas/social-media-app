import Image from "@/components/Image"

function Search() {
    return (
        <div className="bg-inputGray py-2 px-4 flex items-center gap-4 rounded-full">
            <Image path="icons/explore.svg" alt="Search" width={16} height={16} />
            <input type="text" placeholder="Search" className="bg-transparent outline-none placeholder:text-textGray"/>
        </div>
    );
}

export default Search;