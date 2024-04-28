import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function Todo() {
  return (
    <div className=" bg-white rounded-3xl p-4 m-2 drop-shadow-xl">
      <div className="flex justify-center m-3">
        <h1 className=" text-3xl">Add A Todo Item</h1>
      </div>
      <hr />
      <div className="flex justify-between p-4 w-full">
        <div className=" w-3/4">
          <input
            className=" w-full p-2 rounded-full"
            type="text"
            placeholder="Add Todo"
          />
        </div>
        <div>
          <button className=" w-12 h-12 bg-blue-500 p-2 text-white rounded-full">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
