"use client";

import React from "react";
import styled from "styled-components";
import {
  MenuApp,
  FileEarmarkText,
  Trash,
  Save,
  MenuButtonWide,
} from "@styled-icons/bootstrap";
import ButtonRed from "../CustomButton/ButtonRed";
import { useOpenSidebar } from "@/app/zustand/store";

const Container = styled.nav`
  display: flex;
  width: 100vw;
  height: 7rem;

  background-color: rgb(43, 45, 49);
  color: var(--text1);
`;

const MenuContainer = styled.div`
  height: 100%;
  width: 7rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgb(53, 57, 63);
  cursor: pointer;

  transition: all 0.2s ease-in;

  &:hover {
    background-color: var(--red);
  }
`;

const IconMenuOpen = styled(MenuApp)`
  height: 3rem;
  width: 3rem;

  color: rgb(255, 229, 105);
`;

const IconMenuClose = styled(MenuButtonWide)`
  height: 3rem;
  width: 3rem;

  color: var(--red);
`;

const LogoContainer = styled.div`
  height: 100%;
  width: 20rem;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &::after {
    content: "";
    display: block;

    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);

    height: 60%;
    width: 1px;
    background-color: rgb(100, 101, 104);
  }
`;

const LogoText = styled.h4`
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 2px;
`;

const DocInfoContainer = styled.div`
  height: 100%;
  width: 20rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconDocument = styled(FileEarmarkText)`
  height: 2rem;
  width: 2rem;

  color: white;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 1rem;
`;

const SmallText = styled.h5`
  font-size: 1.5rem;
  font-weight: normal;
  color: var(--text2);
`;

const DocName = styled.h4`
  font-size: 1.6rem;
`;

const DeleteContainer = styled.div`
  margin-left: auto;
  height: 100%;

  display: flex;
  align-items: center;
`;

const IconTrash = styled(Trash)`
  height: 3rem;
  width: 3rem;

  color: var(--text2);
  cursor: pointer;

  transition: all 0.2s ease-in;

  &:hover {
    color: var(--red);
  }
`;

const IconSave = styled(Save)`
  height: 2rem;
  width: 2rem;

  color: var(--text);
`;

const ButtonContainer = styled.div`
  height: 100%;
  /* width: 20rem; */

  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const open = useOpenSidebar((state) => state.open);
  const setOpen = useOpenSidebar((state) => state.setOpen);

  return (
    <Container>
      {/* MENU BUTTON */}
      <MenuContainer onClick={setOpen}>
        {open === false ? <IconMenuOpen /> : <IconMenuClose />}
      </MenuContainer>

      {/* LOGO */}
      <LogoContainer>
        <LogoText>MARKDOWN</LogoText>
      </LogoContainer>

      {/* DOCUMENT INFO */}
      <DocInfoContainer>
        <IconDocument />
        <SubContainer>
          <SmallText>Document Name</SmallText>
          <DocName>test.md</DocName>
        </SubContainer>
      </DocInfoContainer>

      {/* DELETE BUTTON */}
      <DeleteContainer>
        <IconTrash />
      </DeleteContainer>

      {/* SAVE BUTTON */}
      <ButtonContainer>
        <ButtonRed text="Save Changes" icon={<IconSave />} />
      </ButtonContainer>
    </Container>
  );
};
export default Navbar;
