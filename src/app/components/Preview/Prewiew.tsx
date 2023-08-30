import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 50vw;

  display: flex;
  flex-direction: column;
`;

const HeadingContainer = styled.div`
  width: 100%;
  padding: 1rem;

  background-color: var(--bg2);
  color: var(--text2);
`;

const HeadingText = styled.h3`
  font-size: 2rem;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const PreviewContainer = styled.div`
  width: 100%;
  height: 100%;

  background-color: var(--bg3);
`;

type PrewiewProps = {};

const Prewiew: React.FC<PrewiewProps> = () => {
  return (
    <Container>
      <HeadingContainer>
        <HeadingText>Preview</HeadingText>
      </HeadingContainer>

      <PreviewContainer></PreviewContainer>
    </Container>
  );
};
export default Prewiew;
