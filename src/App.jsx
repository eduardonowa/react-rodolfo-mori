import React from "react";
import People from "./assets/people.svg";
import { useState } from "react";
import { Button, Container, List } from "./styles";

function App() {
  const [comment, setComment] = useState();
  const [allComments, setAllComments] = useState([]);
  const [spanMsg, setSpanMsg] = useState();

  function handleClick() {
    if (!comment) {
      setSpanMsg("Empty comments are not allowed");
      console.log(spanMsg);
    } else {
      setAllComments([...allComments, comment]);
      document.getElementById("comment-area").value = "";
      setComment("");
      setSpanMsg("");
    }
  }

  function handleChange(e) {
    setComment(e.target.value);
  }

  return (
    <Container>
      <img src={People} alt="people-image" />
      <textarea
        onChange={handleChange}
        name=""
        id="comment-area"
        cols="30"
        rows="10"
      ></textarea>
      <Button isOn={comment} onClick={handleClick}>Comentar</Button>
      <span>{spanMsg}</span>
      <List>
        {allComments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </List>
    </Container>
  );
}

export default App;
