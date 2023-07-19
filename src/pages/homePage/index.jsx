import React from "react";
import { Box, Container } from "@mui/material";
import "./style.css";
function HomePage() {
  return (
    <Container>
      <Box>
        <Box className="h-[90vh] flex justify-center items-center text-center">
          <p className="md:text-5xl text-[22px]">
            Информационные технологии и математическое моделирование процессов
            <br />
            <b>web учебник</b>
          </p>
        </Box>
      </Box>
    </Container>
  );
}

export default HomePage;
