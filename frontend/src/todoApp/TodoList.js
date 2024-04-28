import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'


function TodoList() {
  return (
    <div>
        <div className=" bg-white rounded-3xl p-4 m-2 drop-shadow-xl">
            <h1 className="text-3xl">Todo List</h1>
            <div className="flex justify-around items-center">
                <p className="text-gray-500">To Do description</p>
                <p className="text-gray-500">Date</p>
                <div class="flex items-center">
                    <input type="checkbox" id='checkbox-1' className=" mx-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="checkbox-1" className="">Completed</label>
                </div>
                <button className="mx-2 w-12 h-12 bg-blue-500 p-2 text-white rounded-full">
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                
            </div>
        </div>
    </div>
  )
}

export default TodoList