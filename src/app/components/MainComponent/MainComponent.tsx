"use client";

import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

type MainComponentProps = {};

const MainComponent: React.FC<MainComponentProps> = () => {
  return (
    <Container>
      <Navbar />
    </Container>
  );
};
export default MainComponent;
