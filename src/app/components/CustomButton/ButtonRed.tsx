import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 15rem;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 0.5rem;
  border: none;

  font-size: 1.4rem;
  font-family: inherit;

  background-color: var(--red);
  cursor: pointer;
  color: var(--text1);

  transition: all 0.2s ease-in;

  &:hover {
    background-color: rgb(228, 139, 67);
  }
`;

type ButtonRedProps = {
  text: string;
  icon: React.ReactNode;
};

const ButtonRed: React.FC<ButtonRedProps> = ({ text, icon }) => {
  return (
    <Button>
      {icon} {text}
    </Button>
  );
};
export default ButtonRed;
