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
      url: "mmtx",
      themeName: "MMTX",
    },
    {
      id: 2,
      path: "",
      url: "qsxts",
      themeName: "QSXTS",
    },
    {
      id: 3,
      path: "",
      url: "qxittq",
      themeName: "QXITTQ",
    },
    {
      id: 4,
      path: "",
      url: "qxmpt",
      themeName: "QXM_PT",
    },
    {
      id: 5,
      path: "",
      url: "qxm",
      themeName: "QXM",
    },
    {
      id: 6,
      path: "",
      url: "sxmim",
      themeName: "SXMIM",
    },
  ];
  return (
    <Box sx={{ minWidth: 275 }}>
      <h1 className="text-center text-[50px] font-bold">Sillabuslar</h1>
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
