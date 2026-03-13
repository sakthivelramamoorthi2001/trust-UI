import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";

function TextEditor({ value, onChange }) {
  const [load, setLoad] = useState(true);

  // if (load) {
  //   return <></>
  // }
  return (
    <Editor
      apiKey="z0c34w5gzvdbsiwqt27vvvok7rydkmbrggovacxyjt6d49j3"
      value={value}
      onEditorChange={(content) => onChange(content)}
      onLoadContent={() => {
        setLoad(false)
      }}

      onInit={() =>{
        setLoad(false)
      }}
      
      init={{
        height: 500,
        menubar: true,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "table",
          "help",
          "wordcount"
        ],
        toolbar:
          "undo redo | blocks | bold italic underline strikethrough | " +
          "alignleft aligncenter alignright alignjustify | " +
          "bullist numlist outdent indent | link table | " +
          "removeformat | code fullscreen preview",

        paste_data_images: false,

        paste_preprocess: (plugin, args) => {
          args.content = args.content.replace(/<img[^>]*>/gi, "");
        }
      }}
    />
  );
}

export default TextEditor;