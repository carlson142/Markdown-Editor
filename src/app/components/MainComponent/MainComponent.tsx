"use client";

import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import { useOpenSidebar } from "@/app/zustand/store";
import Sidebar from "../Sidebar/Sidebar";
import Markdown from "../Markdown/Markdown";
import Prewiew from "../Preview/Prewiew";

const Full = styled.div`
  display: flex;
  /* height: 100%; */
`;

type CProps = {
  open: boolean;
};

const Container = styled.div<CProps>`
  display: flex;
  flex-direction: column;

  transition: all 0.5s ease-in;

  ${(props) =>
    props.open === true
      ? "transform: translateX(25rem)"
      : "transform: translateX(0rem)"}
`;

const BigContainer = styled.div`
  // NOTE: Висота навігації мінус висота області видимості
  height: calc(100vh - 7rem);
  display: flex;
`;

type MainComponentProps = {};

const MainComponent: React.FC<MainComponentProps> = () => {
  const open = useOpenSidebar((state) => state.open);

  return (
    <Full>
      <Sidebar />
      <Container open={open}>
        <Navbar />
        <BigContainer>
          <Markdown />
          <Prewiew />
        </BigContainer>
      </Container>
    </Full>
  );
};
export default MainComponent;
