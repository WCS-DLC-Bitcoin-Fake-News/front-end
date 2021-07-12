import VoteButtons from '../../voteButton';


const BunkerFooter = ({ bunkerMetrics }) => {
    return(
        <div className="flex flex-row items-end h-full w-full px-4 mt-4">
            <div className="flex border-t border-gray-700 w-full py-4">
                {
                bunkerMetrics.map((detail, index)=> (
                    <div className="flex items-center flex-shrink-0 px-2">
                        <div className="flex items-center space-x-1 text-gray-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                            </svg>
                            <p className="font-medium">{detail.count}</p>
                        </div>
                    </div>
                    ))
                }
            <VoteButtons />    
        </div>
    </div>
    )
}

export default BunkerFooter;