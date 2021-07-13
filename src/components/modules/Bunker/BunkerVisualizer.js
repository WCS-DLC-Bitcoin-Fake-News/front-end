import Bunker from "./Bunker"
import { TwitterTweetEmbed } from 'react-twitter-embed';
import PdfViewer from "../../PdfViewer";

const BunkerVisualizer = ({source, printedSource}) => {
    console.log(source, printedSource)
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
        return printedSource.length && <PdfViewer fileName={printedSource} />
    }
 }

    export default BunkerVisualizer