import React from "react";
import { Container } from "@mui/system";
// import { items } from "./tutorialData";

function index() {
  return (
    <Container>
      <h1 className="text-center text-[50px] font-bold">Tutorial</h1>
      {/* {items.map((item) => (
        <img
          className="w-[100%] bg-[white]"
          loading="lazy"
          key={item.id}
          src={item.name}
          alt="??"
        />
      ))} */}
    </Container>
  );
}

export default index;
