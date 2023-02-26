import React from "react";
import { Container } from "@mui/system";
import { items } from "./tutorialData";

function index() {
  return (
    <Container>
      {items.map((item) => (
        <img
          className="w-[100%] bg-[white]"
          loading="lazy"
          key={item.id}
          src={item.name}
          alt="??"
        />
      ))}
    </Container>
  );
}

export default index;
