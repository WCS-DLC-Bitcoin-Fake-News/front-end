import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import BunkerHeader from "./BunkerHeader";
import BunkerContent from "./BunkerContent";
import BunkerFooter from "./BunkerFooter";
import BunkerVisualizer from "./BunkerVisualizer";

const Bunker = (props) => {
  const [title, setTitle] = useState("");
  const [argument, setArgument] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState([]);
  const [bunkerMetrics, setBunkerMetrics] = useState([]);
  const [source, setSource] = useState("");
  const [date, setDate] = useState(0);

  // have access to ID in the url
  let { id } = props;

  const fetchBunker = async () => {
    try {
      let { data } = await axios.get(`/bunkers/${id}`);
      setSource(data.source);
      setTitle(data.title);
      setAuthor(data.author);
      setArgument(data.body);
    } catch (error) {
      console.log(error);
    }
  };
  // wait for the component to be mounted
  useEffect(() => {
    //make an axios call
    fetchBunker();
  }, []);

  return (
    <div className="flex justify-between m-6">
      <div className="flex flex-col h-full max-w-lg mx-auto px-4 bg-gray-800 rounded-lg">
        <BunkerHeader author={author} date={date} title={title} />
        <BunkerContent tags={tags} argument={argument} source={source} />
        <BunkerFooter bunkerMetrics={bunkerMetrics} />
      </div>
    </div>
  );
};
export default Bunker;
