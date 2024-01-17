import React from "react";

function Tags(props) {

  let tags = props.tags.map(function(tag, i){
    return <li>- {tag}</li>

  })
  return (
    <div className="w-1/2 px-2 rounded overflow-hidden shadow-lg mr-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 p-4">Tags</div>
        <ul className="text-gray-700">
          {tags}
        </ul>

      </div>
    </div>
  );
}

export default Tags