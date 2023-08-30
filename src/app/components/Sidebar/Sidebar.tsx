import { useOpenSidebar } from "@/app/zustand/store";
import React from "react";
import styled from "styled-components";
import ButtonRed from "../CustomButton/ButtonRed";

import { Plus, Moon, Sun } from "@styled-icons/bootstrap";
import SwitchButton from "../CustomButton/SwitchButton";

type CProps = {
  open: boolean;
};

const Container = styled.div<CProps>`
  width: 25rem;
  height: 100%;

  position: absolute;
  top: 0;
  left: -25rem;

  transition: all 0.5s ease-in;

  display: flex;
  flex-direction: column;

  padding: 2rem;

  background-color: rgb(29, 31, 34);

  ${(props) =>
    props.open === true
      ? "transform: translateX(25rem)"
      : "transform: translateX(0rem)"}
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h2`
  text-transform: uppercase;
  color: var(--text2);
  font-weight: normal;
  letter-spacing: 1px;
`;

const BtnContainer = styled.div`
  margin-top: 1rem;
`;

const IconPlus = styled(Plus)`
  height: 2rem;
  width: 2rem;

  color: var(--text);
`;

const Mid = styled.div`
  display: flex;
  flex-direction: column;

  color: var(--text1);
`;

const IconMoon = styled(Moon)`
  height: 2rem;
  width: 2rem;

  color: var(--text2);

  margin-right: 1rem;
`;

const IconSun = styled(Sun)`
  height: 2rem;
  width: 2rem;

  color: var(--text2);
  margin-left: 1rem;
`;

const Bot = styled.div`
  margin-top: auto;
  align-self: center;
`;

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
`;

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  const open = useOpenSidebar((state) => state.open);

  return (
    <Container open={open}>
      <Top>
        <Heading>My Documents</Heading>
        <BtnContainer>
          <ButtonRed text="New Document" icon={<IconPlus />} />
        </BtnContainer>
      </Top>

      <Mid>LIST OF DOCUMENTS FROM DB</Mid>

      <Bot>
        <SwitchContainer>
          <IconMoon />
          <SwitchButton />
          <IconSun />
        </SwitchContainer>
      </Bot>
    </Container>
  );
};
export default Sidebar;
