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
      path: "https://t.me/atjmmmm/2",
      url: "1",
      themeName: "Понятия информации",
    },
    {
      id: 2,
      path: "https://t.me/atjmmmm/4",
      url: "2",
      themeName: "Техн. и прогр.обесп",
    },
    {
      id: 3,
      path: "https://t.me/atjmmmm/5",
      url: "3",
      themeName: "MS Word",
    },
    {
      id: 4,
      path: "https://t.me/atjmmmm/6",
      url: "4",
      themeName: "Табличный_процессор_MS_Excel",
    },
    {
      id: 5,
      path: "https://t.me/atjmmmm/7",
      url: "5",
      themeName: "Базы данных",
    },
    {
      id: 6,
      path: "https://t.me/atjmmmm/8",
      url: "6",
      themeName: "Алгоритмы рус",
    },
    {
      id: 7,
      path: "https://t.me/atjmmmm/9",
      url: "7",
      themeName: "Основы  С++",
    },
    {
      id: 8,
      path: "https://t.me/atjmmmm/10",
      url: "8",
      themeName: "Программир. разветвленного алг",
    },
    {
      id: 9,
      path: "https://t.me/atjmmmm/11",
      url: "9",
      themeName: "Прогр. циклических алг",
    },
    {
      id: 10,
      path: "https://t.me/atjmmmm/12",
      url: "10",
      themeName: "Массивы",
    },
  ];
  return (
    <Box sx={{ minWidth: 275 }}>
      <h1 className="text-center text-[50px] font-bold">Презентации</h1>

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
                    открыть
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
                {item.id}-презентация
              </span>
              {item.themeName}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
