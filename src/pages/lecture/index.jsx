import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TelegramIcon, TelegramShareButton } from "react-share";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import lectureIcon from "../../assets/images/lecture-icon.png";

export default function Lecture() {
  const items = [
    {
      id: 1,
      path: "https://t.me/atjmmmm/2",
      url: "1",
      themeName:
        "Понятие информации. информационные технологии и системы. геоинформационные технологии",
    },
    {
      id: 2,
      path: "https://t.me/atjmmmm/4",
      url: "2",
      themeName:
        "Техническое и программное обеспечение информационных технологий",
    },
    {
      id: 3,
      path: "https://t.me/atjmmmm/5",
      url: "3",
      themeName: "Текстовый процессор ms word",
    },
    {
      id: 4,
      path: "https://t.me/atjmmmm/6",
      url: "4",
      themeName: "Табличный процессор ms excel",
    },
    {
      id: 5,
      path: "https://t.me/atjmmmm/7",
      url: "5",
      themeName: "База данных. системы управления базы данных (субд)",
    },
    {
      id: 6,
      path: "https://t.me/atjmmmm/8",
      url: "6",
      themeName: "Алгоритмы. свойства и виды алгоритмов",
    },
    {
      id: 7,
      path: "https://t.me/atjmmmm/9",
      url: "7",
      themeName:
        "Основы программирования на языке с++. программирование алгоритмов линейной структуры",
    },
    {
      id: 8,
      path: "https://t.me/atjmmmm/10",
      url: "8",
      themeName: "Программирование разветвляющихся и циклических алгоритмов",
    },
    {
      id: 9,
      path: "https://t.me/atjmmmm/11",
      url: "9",
      themeName: "Программирование циклических алгоритмов",
    },
    {
      id: 10,
      path: "https://t.me/atjmmmm/12",
      url: "10",
      themeName: "Массивы. программирование одномерных массивов",
    },
  ];
  return (
    <Box sx={{ minWidth: 275 }}>
      <h1 className="text-center text-[50px] font-bold">Лекции</h1>
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
              className="flex justify-between"
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              <img className="h-20" src={lectureIcon} alt="" />
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
              className="flex flex-col mb-5"
              sx={{
                display: "flex",
                fontSize: "22px",
              }}
            >
              <span className="font-bold text-xl my-3 text-black">
                Лекция - {item.id}
              </span>
              {item.themeName}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
