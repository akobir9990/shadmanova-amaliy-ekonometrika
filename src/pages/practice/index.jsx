import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TelegramIcon, TelegramShareButton } from "react-share";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import PracticeIcon from "../../assets/images/practice-work-icon.png";

export default function Lecture() {
  const items = [
    {
      id: 1,
      path: "",
      url: "1",
      themeName: "1-практическая работа ",
    },
    {
      id: 2,
      path: "",
      url: "2",
      themeName: "2-практическая работа",
    },
    {
      id: 3,
      path: "",
      url: "3",
      themeName: "3-практическая работа",
    },
    {
      id: 4,
      path: "",
      url: "4",
      themeName: "4-практическая работа",
    },
    {
      id: 5,
      path: "",
      url: "5",
      themeName: "5-практическая работа",
    },
    {
      id: 6,
      path: "",
      url: "6",
      themeName: "6-практическая работа",
    },
    {
      id: 7,
      path: "",
      url: "7",
      themeName: "7-практическая работа",
    },
    {
      id: 8,
      path: "",
      url: "8",
      themeName: "8-практическая работа",
    },
    {
      id: 9,
      path: "",
      url: "9",
      themeName: "9-практическая работа",
    },
    {
      id: 10,
      path: "",
      url: "10",
      themeName: "10-практическая работа",
    },
  ];
  return (
    <Box sx={{ minWidth: 275 }}>
      <h1 className="text-center text-[50px] font-bold">Практическая работа</h1>
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
              <img className="h-20" src={PracticeIcon} alt="" />
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
            <Typography variant="h6" color="text.secondary">
              <span className="font-bold text-xl my-3 text-black">
                {item.themeName}
              </span>
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
