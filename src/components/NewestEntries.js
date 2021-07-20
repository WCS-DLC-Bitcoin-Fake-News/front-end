import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Row = ({ author, title, body, handleClick, createdAt, _id }) => {
  console.log(author);
  return (
    <tr
      onClick={(e) => {
        handleClick(_id);
      }}
      class="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400"
    >
      <td class="px-4 py-3">
        <div>
          <p class="font-semibold">{title}</p>
          <p class="text-xs text-gray-600 dark:text-gray-400">{body}</p>
        </div>
      </td>
      <td class="px-4 py-3 text-sm">{author.name}</td>
      <td class="px-4 py-3 text-xs">
        <td class="px-2 py-1 text-xs">
          <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
            50⬆
          </span>
        </td>
        <td class="px-2 py-1 text-xs">
          <span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700">
            40⬇
          </span>
        </td>
      </td>
    </tr>
  );
};

const NewestEntries = () => {
  let history = useHistory();
  const [bunkers, setBunkers] = useState([]);
  let [skipNumber, setSkipNumber] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const fetchMoreData = () => {
    setSkipNumber((skipNumber += 8));
    setTimeout(async () => {
      const { data } = await axios.get(`/bunkers?skip=${skipNumber}`);
      if (data.length === 0) {
        setHasMore(false);
      }
      setBunkers([...bunkers, ...data]);
    }, 1500);
  };

  const handleClick = (bunkerId) => {
    history.push(`/bunkers/${bunkerId}`);
  };
  const loadBunkers = async () => {
    try {
      const { data } = await axios.get("/bunkers");
      setBunkers([...data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadBunkers();
  }, []);
  return (
    <div className="flex-col h-110 ">
      <div>
        <div className="ml-20 my-5  font-black text-2xl">This is our Feed</div>
      </div>
      <div className="md:mr-10 ">
        <div className="ml-14 my-5 md:max-w-full rounded-lg bg-gray-50 font-semibold text-lg">
          Newest Entries
        </div>
      </div>

      <InfiniteScroll
        dataLength={bunkers.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="mt-2 md:mx-10">
          <table className="w-full">
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              {bunkers &&
                bunkers.map((bunker, idx) => (
                  <Row key={idx} handleClick={handleClick} {...bunker} />
                ))}
            </tbody>
          </table>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default NewestEntries;
