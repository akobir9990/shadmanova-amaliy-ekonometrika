import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TelegramIcon, TelegramShareButton } from "react-share";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import laboratory from "../../assets/images/laboratory-icon 23.45.24.png";

export default function Lecture() {
  const items = [
    {
      id: 1,
      path: "",
      url: "1",
      themeName: "Algoritmlash asoslari. Algoritmlarni grafik tasvirlash.",
    },
    {
      id: 2,
      path: "",
      url: "2",
      themeName:
        "Chizigli algoritmlarga dastur tuzish. Muhandislik va suv xo jaligi mexanizatsiyasi masalalarida ma lumotlarni kiritish-chiqarish operatorlaridan foydalanib dastur tuzish.",
    },
    {
      id: 3,
      path: "",
      url: "3",
      themeName:
        "Tarmoqlanuvchi algoritmlarga dastur tuzish. Shartli, shartsiz o tish va tanlash operatorlaridan foydalanib dastur tuzish.",
    },
    {
      id: 4,
      path: "",
      url: "4",
      themeName:
        "Takrorlanuvchi algoritmlarga dastur tuzish. for, while, do while operatorlaridan foydalanib dastur tuzish.",
    },
    {
      id: 5,
      path: "",
      url: "5",
      themeName:
        "Bir o`Ichovli massivlar uchun massiv operatorlaridan foydalanib dastur tuzish.",
    },
  ];
  return (
    <Box sx={{ minWidth: 275 }}>
      <h1 className="text-center text-[50px] font-bold">
        Laboratoriya mashg'ulotlari
      </h1>
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
                    ochish
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
                Laboratoriya - {item.id}
              </span>
              {item.themeName}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
