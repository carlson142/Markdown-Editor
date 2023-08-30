import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 50vw;

  display: flex;
  flex-direction: column;

  border-right: 1px solid var(--text2);
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

const WritingContainer = styled.div`
  width: 100%;
  height: 100%;

  background-color: var(--bg3);
`;

type MarkdownProps = {};

const Markdown: React.FC<MarkdownProps> = () => {
  return (
    <Container>
      <HeadingContainer>
        <HeadingText>Markdown</HeadingText>
      </HeadingContainer>

      <WritingContainer></WritingContainer>
    </Container>
  );
};
export default Markdown;
