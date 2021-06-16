import { React, useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function PostEditor() {
  const [state, setState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => setState(editorState);
  const postInput = draftToHtml(convertToRaw(state.getCurrentContent()));
  const postObject = { message: `${postInput}` };
  console.log(postObject);
  return (
    <>
      <section className="flex flex-col items-center">
        <div className="w-4/5 border-solid border-2 border-black pb-20">
          <Editor
            editorState={state}
            wrapperClassName="h-60"
            editorClassName=""
            onEditorStateChange={onEditorStateChange}
            toolbar={{
              options: ["link"],
              link: { inDropdown: true },
            }}
          />
        </div>
        <div className="flex">
          <button className="focus:outline-none mt-7 justify-self-start">Post</button>
        </div>
      </section>
    </>
  );
}

export default PostEditor;
