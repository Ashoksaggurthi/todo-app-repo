import React from "react";
import { Button, Card } from "react-bootstrap";

const Todo = ({ todo, onDelete }) => {
  return (
    <Card.Body className="d-flex justify-content-between align-items-center">
      <Card.Text>{todo.text}</Card.Text>
      <Button variant="danger" onClick={() => onDelete(todo.id)}>
        Delete
      </Button>
    </Card.Body>
  );
};

export default Todo;
