import Bunker from "./Bunker"
import { TwitterTweetEmbed } from 'react-twitter-embed';

const BunkerVisualizer = ({source}) => {
    console.log(source)
    if(source.includes("twitter.com")) {
        let parts = source.split("/");
        let tweetId = parts[parts.length - 1];
        console.log(tweetId)

        return <TwitterTweetEmbed
        tweetId={tweetId}
        placeholder={'loading'}
        />
    }
    else {
        return <h1>loading</h1>
    }
 }

    export default BunkerVisualizer