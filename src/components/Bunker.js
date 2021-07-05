import { useState, useEffect } from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import VoteButtons from './voteButton';
import { useParams } from 'react-router';
import axios from "axios";
const BunkerHeader = ({author, date}) => {
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
                    <a href="/:id">This is the bunker's title</a>
                </h1>
            </div>
        </div>
    )
}

const BunkerVisualizer = ({type}) => {
// Bunkers will have three types (twitter, article, speculation)
    if(type === "twitter") return <TwitterTweetEmbed
    tweetId={'1401287393228038149'}
    placeholder={'loading'}
    />
}
const ReadingTime = () => (
    <span
        className="flex h-min space-x-1 items-center rounded-full text-gray-400 bg-gray-800 py-1 px-2 text-xs font-medium"
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
        <p className="text-blue-500 font-semibold text-xs">
            6 Mins
        </p>
    </span>
)

const BunkerContent = ({ tags }) => {
    return(
        <>
            {/* Custom visualizer */}
            <BunkerVisualizer type="twitter" />

            {/* Bunker tags */}
            <div className="flex flex-start mt-4 px-4">
                {/* Tags */}
                {tags.map(tag => (
                        <span
                            className="inline-block ring-4 bg-red-500 ring-gray-800 rounded-full text-sm font-medium tracking-wide text-gray-100 px-3 pt-0.5"
                            >{tag}
                        </span>
                ))}

            </div>
                
            {/* Bunker argument */}
            <div className="px-4 space-y-2">
                <p className="text-gray-400 font-normal leading-5 tracking-wide">
                    In this area the author explains his argument to debunk the media set in the bunker...
                </p>
                <div
                    to="blog/detail"
                    className="font-bold hover:text-blue-400 text-gray-100"
                    >read more...</div
                    >
            </div>
        </>
    )
}

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

const Bunker = (props) => {
        const [author, setAuthor] = useState("Carlos")
        const [tags, setTags] = useState(["Speculation", "FUD", "Manipulation" ])
        const [bunkerMetrics, setBunkerMetrics] = useState([
            {
                name: "assets",
                count: 4
            }, 
            {
                name: "contributors",
                count: 2
            }, 
            {
                name: "stake",
                count: 1500
            }, 
            {
                name: "days",
                count: 3
            }
        ])
       
        const [date, setDate] = useState(3)
    // have access to ID in the url 
    let {id} = useParams();
    console.log(id)

    // wait for the component to be mounted
    useEffect(() => {
       console.log("I am mounted") 
         //make an axios call
         
        axios.get(`/bunkers/${id}`)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    
        
        // set the value back in the local state



    }, [])
   
    


    console.log("I am rendering")

    return (
        <div className="flex justify-between m-6">
            <div className="flex flex-col h-full max-w-lg mx-auto px-4 bg-gray-800 rounded-lg">
                <BunkerHeader author= {author} date={date} />
                <BunkerContent tags= {tags} />
                <BunkerFooter bunkerMetrics= {bunkerMetrics} />
            </div>
        </div>
    )
}
export default Bunker;