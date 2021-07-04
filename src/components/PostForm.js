import Avatar from "../assets/avatar.png";

function PostForm() {
    return (
      <div className="px-6 py-4 text-gray-400">
  
        <div className="border p-2 rounded-md flex">
          <div className="rounded-full bg-gray-600 overflow-hidden w-10 h-10">
            <img src={Avatar} alt="avatar" style={{filter:'invert(100%)'}} />
          </div>
          <form action="" className="flex-grow border ml-4 mr-2 rounded-md">
            <input type="text" className="p-2 px-3 text-sm block w-full rounded-md" placeholder="New post" />
          </form>
        </div>
  
      </div>
    );
  }

  export default PostForm;