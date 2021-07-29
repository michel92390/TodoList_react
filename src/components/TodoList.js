//jshint esversion:6
import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, setTodos, filteredTodos}) => {
    return (
        <div class="todo-container">
            <ul class="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo 
                        key={todo.id} 
                        text={todo.text} 
                        setTodos={setTodos}
                        todo={todo}
                        todos={todos}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;