import { ImArrowUp, ImArrowDown } from 'react-icons/im';

function Post() {
    return (
     <div className="border flex space-y-0 w-full h-52 px-6 py-4">
         <div className="border w-8 h-full flex flex-col float-left">
            <div className="border">
             <div className="border flex justify-center"><ImArrowUp/></div>
             <div className="border flex justify-center">10</div>
             <div className="border flex justify-center"><ImArrowDown/></div>
            </div>
         </div>
         <div className="border w-full flex felx-col float-right w-auto">
            <div className="border w-full">
              <div className="border flex justify-start w-full">
                <div className="border">*</div>
                <div className="border">*</div>
                <div className="border">*</div>
                <div className="border">*</div>
                <div className="border">*</div>
             </div>
             <div className="border w-full">Title</div>
             <div className="border w-full">Body</div>
             <div className="border flex justify-start w-full">
                <div className="border">0 comments</div>
                <div className="border">Hide</div>
                <div className="border">Report</div>
                <div className="border">0% Upvoted</div>
             </div>
            </div>
         </div>
     </div>
    )
}

export default Post;