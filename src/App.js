import React, { useState } from "react";

import { useStore } from "./store";

export default function App() {
  const { books, newBook, deleteBook, updateBook } = useStore();
  const [input, setInput] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [update, setUpdate] = useState({
    id: null,
    name: ""
  });
  const newBookHandler = (e) => {
    e.preventDefault();
    newBook(input);
    setInput("");
  };
  const updateClickHandler = (book) => {
    setIsEdit(true);
    setUpdate({
      id: book.id,
      name: book.name
    });
  };
  const updateBookHandler = (e) => {
    e.preventDefault();
    updateBook(update);
    setUpdate({
      id: null,
      name: ""
    });
    setIsEdit(false);
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add New Book"
        />
        <button onClick={newBookHandler}>Add</button>
      </div>
      <br />
      {books.map((el) => (
        <div key={el.id}>
          <h1>{el.name}</h1>
          <button onClick={() => deleteBook(el.id)}>
            <i className="ti ti-trash"></i>
          </button>{" "}
          <button onClick={() => updateClickHandler(el)}>
            <i className="ti ti-edit-circle"></i>
          </button>
        </div>
      ))}
      <br />
      {isEdit && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Update Book</label>
          <div style={{ display: "flex" }}>
            <input
              value={update.name}
              onChange={(e) => setUpdate({ ...update, name: e.target.value })}
            />
            <button onClick={updateBookHandler}>Update</button>
          </div>
        </div>
      )}
    </div>
  );
}
