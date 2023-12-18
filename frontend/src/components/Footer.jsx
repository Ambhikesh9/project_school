export default function Footer(){

    return (
        <>
        <div className="pt-6 bottom-0 w-screen h-64 relative bg-background text-text px-6 font-poppins flex flex-col">
            <div className="row1 h-2/3 w-3/4 mx-auto  border-b  border-gray-600  flex justify-between gap-4 flex-row items-center">
                <div className="row1col1  mr-2 flex flex-col text-left">
                    <a className="pb-3 text-xl" href="#">XYO Socials</a>
                    <a className="pt-2 text-sm" href="#">Lorem ipsum dolor </a>
                    <a className="text-sm" hrefm="#">sit amet consectetur</a>
                    
                </div>
                
                <div className="row1col2 border-x h-full justify-center border-gray-600 px-16  flex flex-col text-left">
                <a className="py-2 " href="#">Overview </a>
                <a className="py-2 " href="#">Bound Witness</a>
                <a className="py-2" href="#">Proof Of Origin </a>
                </div>
                <div className="row1col3  mx-1 pr-28 border-r h-full  justify-center border-gray-600 flex flex-col text-left">
                <a className="py-2" href="#">White Paper</a>
                <a className="py-2" href="#">XYO Tokens</a>
                <a className="py-2" href="#">Exchanges </a>
                </div>
                <div className="row1col4 pr-12 mr-6 flex flex-col text-left">
                <a className="py-2" href="#">Open Source Github </a>
                <a className="py-2" href="#">Documentation</a>
                <a className="py-2" href="#">Help Center </a>
                </div>
            </div>
        </div>
        </>
    )
}