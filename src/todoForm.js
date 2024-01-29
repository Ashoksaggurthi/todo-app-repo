import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() !== "") {
      onAdd({ id: Date.now(), text });
      setText("");
    }
  };

  return (
    <Form>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo"
        />
        <InputGroup.Append>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};

export default TodoForm;
