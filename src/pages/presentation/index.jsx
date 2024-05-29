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
      themeName:
        '"Axborot texnologiyalari va jarayonlarni matematik modellashtirish" fanning asosiy tushunchalari. Ma`lumotlarni kodlash. Axborot jarayonlarining texnik va dasturiy ta`minoti.',
    },
    {
      id: 2,
      path: "",
      url: "2",
      themeName:
        "Mutaxassislik masalalarini yech-ishda axborot tenologiyalarini qo'llash. MS Office dasturlari.",
    },
    {
      id: 3,
      path: "",
      url: "3",
      themeName: "Kompyuter tarmoglari va tarmoq texnologiyalari.",
    },
    {
      id: 4,
      path: "",
      url: "4",
      themeName: "Algoritmning xossalari.Algoritmni tasvirlash usullari.",
    },
    {
      id: 5,
      path: "",
      url: "5",
      themeName:
        "Dasturlash tili elementlari. Masalalarini chiziqli algoritmlar yordamida dasturlash.",
    },
    {
      id: 6,
      path: "",
      url: "6",
      themeName:
        "Masalalarni tarmoqlanuvchi al-goritmlar yordamida dasturlash.",
    },
    {
      id: 7,
      path: "",
      url: "7",
      themeName:
        "Masalalarni tarmoqlanuvchi al-goritmlar yordamida dasturlash.",
    },
    {
      id: 8,
      path: "",
      url: "8",
      themeName: "Masalalarini dasturlashda massivlardan foydalanish",
    },
    {
      id: 9,
      path: "",
      url: "9",
      themeName: "Masalalarni dasturlashda funktsiyalardan foydalanish.",
    },
    {
      id: 10,
      path: "",
      url: "10",
      themeName: "MathCAD dasturining interfeysi. Funktsiyalar. Grafika.",
    },
    {
      id: 11,
      path: "",
      url: "11",
      themeName: "MathCad dasturida algoritmlash va dasturlash.",
    },
    {
      id: 12,
      path: "",
      url: "12",
      themeName: "Matematik model va modelashtirish.",
    },
    {
      id: 13,
      path: "",
      url: "13",
      themeName: "Chizigli modellar va ularni yechish.",
    },
    {
      id: 14,
      path: "",
      url: "14",
      themeName: "Chizigsiz modellar va ularni yechish.",
    },
    {
      id: 15,
      path: "",
      url: "15",
      themeName: "Chizigli dasturlash masalasini grafik lusulida yechish",
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
