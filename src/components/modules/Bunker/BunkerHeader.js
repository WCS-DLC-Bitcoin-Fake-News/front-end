const BunkerHeader = ({author, date, title}) => {
    return(
        <div className="header" >
            <div
                className="PUBLISHERCOMPONENT flex items-center space-x-3 border-r border-gray-700 w-full"
                >
                <img
                    className="object-cover w-8 h-8 mt-3 border-2 border-white rounded-full"
                    src="https://pbs.twimg.com/profile_images/1135611339366457344/iovIhH1V_400x400.jpg"
                    alt="profile users"
                    loading="lazy"
                    />
                <div className="">
                    <p className="text-sm font-semibold tracking-wide text-gray-200">
                        {author}
                    </p>
                    <p className="text-xs font-light tracking-wider text-gray-300">
                        {date} Hours ago
                    </p>
                </div>
            </div>
            <div className="py-2 px-4">
                <h1
                    className="text-xl font-medium leading-6 tracking-wide text-gray-300 hover:text-blue-500 cursor-pointer"
                    >
                    <a href="/:id">{title}</a>
                </h1>
            </div>
        </div>
    )
}

export default BunkerHeader;