import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TelegramIcon, TelegramShareButton } from "react-share";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import presentation from "../../assets/images/presentation.svg";

export default function BasicCard() {
  const items = [
    {
      id: 1,
      path: "",
      url: "1",
      themeName: "Ekonometrik modellashtirish asoslari",
    },
    {
      id: 2,
      path: "",
      url: "2",
      themeName: "Matematik statistika elementlari",
    },
    {
      id: 3,
      path: "",
      url: "3",
      themeName:
        "Bir o'zgaruvchili chiziqli regressiya va korrelyatsiya modellari",
    },
    {
      id: 4,
      path: "",
      url: "4",
      themeName:
        "Bir o'zgaruvchili chiziqli regressiya va korrelyatsiya modellari",
    },
    {
      id: 5,
      path: "",
      url: "5",
      themeName: "Regressiya koeffitsientlarining aniqligi va siljimasligi",
    },
    {
      id: 6,
      path: "",
      url: "6",
      themeName: "Regressiya koeffitsientlarining aniqligi va siljimasligi",
    },
    {
      id: 7,
      path: "",
      url: "7",
      themeName: "Ko'p o'zgaruvchili regressiya tahlili",
    },
    {
      id: 8,
      path: "",
      url: "8",
      themeName:
        "Ko'p omilli regressiya koeffitsientlarining aniqligi va siljimasligi",
    },
    {
      id: 9,
      path: "",
      url: "9",
      themeName:
        "Kop omilli korrelyasiya - regressiya modeli uchun omillarni tanlash",
    },
    {
      id: 10,
      path: "",
      url: "10",
      themeName:
        "Ishlab chigarish funksiyalari orgali ekonometrik modellashtirish",
    },
    {
      id: 11,
      path: "",
      url: "11",
      themeName: `Chiziqli bolmagan modellarda ko'p o'zgaruvchili regressiya`,
    },
    {
      id: 12,
      path: "",
      url: "12",
      themeName: "Ekonometrik tenglamalar sistemasi unt echish usullari",
    },
    {
      id: 13,
      path: "",
      url: "13",
      themeName: "Vaqtli qatorlar va ularning tenglamalarini tuzish usullari",
    },
    {
      id: 14,
      path: "",
      url: "14",
      themeName: "Trend va uning asosiy turlari",
    },
    {
      id: 15,
      path: "",
      url: "15",
      themeName: "Chizigli ekonometrik model orgali prognoz gilish.",
    },
  ];
  return (
    <Box sx={{ minWidth: 275 }}>
      <h1 className="text-center text-[50px] font-bold">Taqdimotlar</h1>

      {items.map((item) => (
        <Card
          sx={{
            margin: "10px 0px",
          }}
          key={item.id}
          className="border-[1px] border-[solid] border-[grey] my-4 rounded-md shadow-inner"
        >
          <CardContent>
            <Typography
              sx={{
                fontSize: 14,
                display: "flex",
                justifyContent: "space-between",
              }}
              color="text.secondary"
              gutterBottom
            >
              <img className="h-20" src={presentation} alt="" />
              <CardActions>
                <Button variant="outlined" size="small">
                  <NavLink to={item.url} key={items.id}>
                    ochish
                  </NavLink>
                </Button>

                <TelegramShareButton url={item.path}>
                  <TelegramIcon className="rounded w-8"></TelegramIcon>
                </TelegramShareButton>
              </CardActions>
            </Typography>
            <Typography
              sx={{ display: "flex", flexDirection: "column" }}
              className="flex flex-col"
              variant="h5"
              component="div"
            >
              <span className="font-bold text-xl my-3 text-black">
                Taqdimot-{item.id}
              </span>
              {item.themeName}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
