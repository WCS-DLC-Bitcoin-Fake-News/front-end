import { useState, useEffect } from "react"
import axios from "axios";
import { useHistory } from "react-router-dom";
const Row = ({author, title, body, handleClick, createdAt, _id}) => {
console.log(author)
  return(
      <tr onClick= { (e) => { handleClick(_id) } } class="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
      <td class="px-4 py-3">
        <div>
          <p class="font-semibold">{title}</p>
          <p class="text-xs text-gray-600 dark:text-gray-400">
            <div dangerouslySetInnerHTML={{ __html: body }} />
          </p>
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
  )
}

const NewestEntries = () => {
  let history = useHistory();
  const [bunkers, setBunkers] = useState([])

  const handleClick = (bunkerId) => {
     console.log("i'm clicked")
     history.push(`/bunkers/${bunkerId}`);
  } 
  const loadBunkers = async () => {
    try {
      const { data } = await axios.get("/bunkers")
      setBunkers([...data])    
    }
    catch(error){
      console.log(error)
    }
  }
  
  useEffect(() => {
    loadBunkers()
  }, [])

  return (
    <div className="flex-col h-110 ">
      <div>
        <div className="ml-20 my-5  font-black text-2xl">
          This is our Feed
        </div>
      </div>
      <div className="md:mr-10 ">
        <div className="ml-14 my-5 md:max-w-full rounded-lg bg-gray-50 font-semibold text-lg">
          Newest Entries
        </div>
      </div>
      <div class="mt-2 md:mx-10">
        <div class="w-full overflow-hidden rounded-lg shadow-xs">
          <div class="md:w-full overflow-x-auto">
            <table class="w-full">
              {/* <tr class="w-full text-l font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                Newest Entries
              </tr> */}
              <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                {bunkers && bunkers.map((bunker) => <Row  handleClick={handleClick} {...bunker}/> )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewestEntries;
