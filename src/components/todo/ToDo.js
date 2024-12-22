import React, { useRef, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo, removeTodo } from '../../redux/state/todo/todoSlice';
import { toast } from 'react-toastify';

const ToDo = () => {

    const taskValues = useRef();
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo.value);

    const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

    const handleAddTodo = () => {
        const task = taskValues.current.value;
        if (task) {
          dispatch(addTodo(task));
          toast.success('Task added successfully!');
          taskValues.current.value = '';
        } else {
            toast.error('Task cannot be empty!');
        }
      };
    
    const handleRemoveTodo = (index) => {
        dispatch(removeTodo(index));
        toast.success('Task removed successfully!');
    };


    const handleEditTodo = (index) => {
        setIsEditing(true);
        setCurrentTaskIndex(index);
        taskValues.current.value = todos[index];
      };

    const handleUpdateTodo = () => {
        const updatedTask = taskValues.current.value;
        if (updatedTask) {
          dispatch(editTodo({ index: currentTaskIndex, task: updatedTask }));
          toast.success('Task updated successfully!');
          taskValues.current.value = '';
          setIsEditing(false);
          setCurrentTaskIndex(null);
        } else {
          toast.error('Task cannot be empty!');
        }
      };

      
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg border-animation">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-6">ToDo App!</h1>
        <div className="mb-4">
          <input ref={taskValues}
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Add a new task"
          />
          <button onClick={isEditing ? handleUpdateTodo : handleAddTodo}
            className="w-full mt-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            {isEditing ? 'Update Task' : 'Add Task'}
          </button>
        </div>
        <ul className="space-y-2">
        {
            todos.length === 0 ? (
                <p className="text-center text-gray-500">No tasks available. Add a new task!</p>
            ) : (
                <ul className="space-y-2">
                    {
                        todos.map((todo, index) => (
                        <li key={index} className="flex justify-between items-center p-2 bg-gray-100 rounded-lg">
                                <span>{todo}</span>
                            <div className="flex space-x-2">
                                <button onClick={() => handleEditTodo(index)} className="px-2 py-1 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition">
                                    <FaEdit />
                                </button>
                                <button
                                    onClick={() => handleRemoveTodo(index)}
                                    className="px-2 py-1 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        </li>
                        ))
                    }
                </ul>
            )
        }
        </ul>
      </div>
    </div>
  );
};

export default ToDo;