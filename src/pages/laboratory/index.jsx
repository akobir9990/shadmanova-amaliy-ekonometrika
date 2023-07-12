import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TelegramIcon, TelegramShareButton } from "react-share";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import laboratory from "../../assets/images/laboratory-icon.png";

export default function Lecture() {
  const items = [
    {
      id: 1,
      path: "https://t.me/atjmmmm/2",
      url: "1",
      themeName:
        "Работа в среде dev c++. представление стандартных функций в c++",
    },
    {
      id: 2,
      path: "https://t.me/atjmmmm/4",
      url: "2",
      themeName: "Программирование алгоритмов линейной структуры",
    },
    {
      id: 3,
      path: "https://t.me/atjmmmm/5",
      url: "3",
      themeName: "Программирование алгоритмов разветвленной структуры",
    },
    {
      id: 4,
      path: "https://t.me/atjmmmm/6",
      url: "4",
      themeName: "Программирование алгоритмов циклической структур",
    },
    {
      id: 5,
      path: "https://t.me/atjmmmm/7",
      url: "5",
      themeName:
        "Программирование специализированных задач, относящихся к алгоритму циклической структуры с оператором for, while",
    },
    {
      id: 6,
      path: "https://t.me/atjmmmm/8",
      url: "6",
      themeName: "Работа с одномерными массивами",
    },
  ];
  return (
    <Box sx={{ minWidth: 275 }}>
      <h1 className="text-center text-[50px] font-bold">Лаборатория</h1>
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
              <img className="h-20" src={laboratory} alt="" />
              {/* Laboratoriya - {item.id} */}
              <CardActions className="">
                <Button variant="outlined" size="small">
                  <NavLink to={item.url} key={items.id}>
                    открыть
                  </NavLink>
                </Button>

                <TelegramShareButton url={item.path}>
                  <TelegramIcon className="rounded w-8"></TelegramIcon>
                </TelegramShareButton>
              </CardActions>
            </Typography>
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                fontWeight: "700px",
                fontSize: "22px",
              }}
            >
              <span className="font-bold text-xl my-3 text-black">
                Лаборатория - {item.id}
              </span>
              {item.themeName}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
