import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { authors } from "./authors";

export default function MediaCard() {
  return (
    <div className="h-[100vh]">
      {authors.map((item) => (
        <Card className="flex flex-col p-7 items-center sm:flex-row my-7">
          <div>
            <img
              className=" max-w-[300px] rounded-md"
              src={item.imgUrl}
              alt={item.name}
            />
          </div>

          <CardContent className="sm:text-4xl">
            <h1 className="text-[30px] font-bold">{item.name} </h1>
            <h2 className="text-[20px] leading-[25px]">{item.status} </h2>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
