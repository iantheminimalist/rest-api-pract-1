import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'


function TodoList() {
  return (
    <div>
        <div className=" bg-white rounded-3xl p-4 m-2 drop-shadow-xl">
            <h1 className="text-3xl">Todo List</h1>
            <div className="flex justify-between items-center">
                <p className="text-gray-500 w-full">
                    lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis odit quis non unde eos tempore recusandae eum adipisci excepturi, quos voluptates, suscipit sint reprehenderit sapiente nulla mollitia eius totam qui?
                    Nobis vel veniam minus fuga, impedit corrupti vitae nulla velit inventore ad quam pariatur iure fugit repudiandae. Eius tempora, ullam omnis aperiam rerum facilis fugiat culpa id libero accusantium consequatur!
                </p>
                <p className="text-gray-500 w-1/5">Date</p>
                <div class="flex items-center">
                    <input type="checkbox" id='checkbox-1' className=" mx-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="checkbox-1" className="">Completed</label>
                    <button className="mx-2 w-12 h-12 bg-blue-500 p-2 text-white rounded-full">
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default TodoList