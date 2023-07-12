import { Card } from "@mui/material";
import React from "react";
import logo from "../../assets/logo512.png";

function index() {
  return (
    <div className="h-[100vh]">
      <Card className=" w-[100%] flex justify-ceenter items-center flex-wrap px-[50px] py-[70px]">
        <div className="flex justify-center items-center flex-col text-3xl font-bold p-3 w-[150px] h-[150px] ">
          <img className="" src={logo} alt="???" />
          ИТММП
        </div>
        <p className="p-3 min-w-[200px] w-[700px]">
          Данная программа подготовлена ​​для полноценного обучения
          информационным технологиям и математическому моделированию процессов и
          включает в себя учебное пособие, методическое пособие, самоучитель,
          видеоурок, лабораторные занятия по данной тематике, включает в себя
          практические учебные задания и тестовую подготовку.
        </p>
      </Card>
    </div>
  );
}

export default index;
