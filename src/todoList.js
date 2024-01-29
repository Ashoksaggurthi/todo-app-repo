import React from "react";
import Todo from "./todo";
import { Card } from "react-bootstrap";

const TodoList = ({ todos, onDelete }) => {
  return (
    <Card>
      <Card.Body>
        {todos.length === 0 ? (
          <p className="text-muted text-center">No todos available.</p>
        ) : (
          todos.map((todo) => <Todo key={todo.id} todo={todo} onDelete={onDelete} />)
        )}
      </Card.Body>
    </Card>
  );
};

export default TodoList;
