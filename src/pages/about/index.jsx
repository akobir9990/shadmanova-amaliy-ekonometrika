import { Card } from "@mui/material";
import React from "react";
import logo from "../../assets/logo512.png";

function index() {
  return (
    <div className="h-[100vh]">
      <Card className=" w-[100%] flex justify-ceenter items-center flex-wrap px-[50px] py-[70px]">
        <div className="flex justify-center items-center flex-col text-3xl font-bold p-3 w-[150px] h-[150px] ">
          <img className="" src={logo} alt="???" />
          ATJMM
        </div>
        <p className="p-3 min-w-[200px] w-[700px]">
          Ushbu dastur axborot texnologiyalari va jarayonlarni matematik
          modellashtirish bo'yicha to'liq o'qitish uchun tayyorlangan bo'lib,
          ushbu mavzu bo'yicha o'quv qo'llanma, uslubiy qo'llanma, o'z-o'zini
          ko'rsatma, video dars, laboratoriya mashg'ulotlarini o'z ichiga oladi,
          amaliy mashg'ulot vazifalari va testlarga tayyorgarlik ko'radi.
        </p>
      </Card>
    </div>
  );
}

export default index;
