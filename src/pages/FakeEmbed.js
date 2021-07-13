import { useParams } from 'react-router';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { useEffect, useState } from "react";

function FakeEmbed() {
    const [fakeSelector, setFakeSelector] = useState("not-loaded")
    let {id} = useParams();
    console.log(id)
    //const [tweetId, setTweetId] = useState(false)

    useEffect(() => {
      
    }, [])
    
    return (
        <div className={fakeSelector}>
            <TwitterTweetEmbed
                tweetId={id}
                placeholder={'loading'}
                onLoad={() => {
                    setFakeSelector("is-loaded")
                }}
            /> 
        </div>

    )
}

export default FakeEmbed
