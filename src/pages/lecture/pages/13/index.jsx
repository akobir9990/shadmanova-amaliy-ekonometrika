import React, { useState } from "react";

import one from "./img/1.jpeg";
import two from "./img/2.jpeg";
import three from "./img/3.jpeg";
import four from "./img/4.jpeg";
import five from "./img/5.jpeg";
import six from "./img/6.jpeg";
import seven from "./img/7.jpeg";
import eight from "./img/8.jpeg";
import nine from "./img/9.jpeg";
import ten from "./img/10.jpeg";
import eleven from "./img/11.jpeg";
import twelve from "./img/12.jpeg";
import threeTeen from "./img/13.jpeg";
import fourTeen from "./img/14.jpeg";
import fifTeen from "./img/15.jpeg";
import sixteen from "./img/16.jpeg";
import seventeen from "./img/17.jpeg";
import eightteen from "./img/18.jpeg";
import nineteen from "./img/19.jpeg";
import twenty from "./img/20.jpeg";
import twentyOne from "./img/21.jpeg";
import twentyTwo from "./img/22.jpeg";
import twentyThree from "./img/23.jpeg";
import twentyFour from "./img/24.jpeg";
import twentyFive from "./img/25.jpeg";
import twentySix from "./img/26.jpeg";
import twentySeven from "./img/27.jpeg";
import twentyEight from "./img/28.jpeg";
import twentyNine from "./img/29.jpeg";
import thirty from "./img/30.jpeg";
import thirtyOne from "./img/31.jpeg";
import thirtyTwo from "./img/32.jpeg";
import thirtyThree from "./img/33.jpeg";

import "./style.css";

import { Button, Container, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { TelegramIcon, TelegramShareButton } from "react-share";

function One() {
  const [goBack, setGoBack] = useState(false);
  const path = "";

  const items = [
    { id: 1, name: one },
    { id: 2, name: two },
    { id: 3, name: three },
    { id: 4, name: four },
    { id: 5, name: five },
    { id: 6, name: six },
    { id: 7, name: seven },
    { id: 8, name: eight },
    { id: 9, name: nine },
    { id: 10, name: ten },
    { id: 11, name: eleven },
    { id: 12, name: twelve },
    { id: 13, name: threeTeen },
    { id: 14, name: fourTeen },
    { id: 15, name: fifTeen },
    { id: 16, name: sixteen },
    { id: 17, name: seventeen },
    { id: 18, name: eightteen },
    { id: 19, name: nineteen },
    { id: 20, name: twenty },
    { id: 21, name: twentyOne },
    { id: 22, name: twentyTwo },
    { id: 23, name: twentyThree },
    { id: 24, name: twentyFour },
    { id: 25, name: twentyFive },
    { id: 26, name: twentySix },
    { id: 27, name: twentySeven },
    { id: 28, name: twentyEight },
    { id: 29, name: twentyNine },
    { id: 30, name: thirty },
    { id: 31, name: thirtyOne },
    { id: 32, name: thirtyTwo },
    { id: 33, name: thirtyThree },
  ];
  return (
    <Container sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "20px 0px",
        }}
      >
        {goBack ? (
          <NavLink to={path}>
            <Button
              sx={{ bgcolor: "red", color: "white" }}
              onMouseEnter={() => setGoBack(!goBack)}
              variant="outlined"
            >
              X
            </Button>
          </NavLink>
        ) : (
          <NavLink to="/lecture">
            <Button onMouseLeave={() => setGoBack(!goBack)} variant="contained">
              ortga
            </Button>
          </NavLink>
        )}
        <TelegramShareButton sx={{ borderraius: "10px" }} url={path}>
          <TelegramIcon
            sx={{ borderraius: "10px" }}
            className="rounded w-8"
          ></TelegramIcon>
        </TelegramShareButton>
      </Box>
      {items.map((item) => (
        <img className="img" key={item.id} src={item.name} alt="???" />
      ))}
    </Container>
  );
}

export default One;
