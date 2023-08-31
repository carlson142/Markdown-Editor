import { useMarkdown } from "@/app/zustand/store";
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

const WritingContainer = styled.textarea`
  width: 100%;
  height: 100%;

  padding: 1rem 2rem;

  background-color: var(--bg3);
  color: var(--text2);
  font-size: 1.8rem;

  outline: none;
  border: none;
`;

type MarkdownProps = {};

const Markdown: React.FC<MarkdownProps> = () => {
  const text = useMarkdown((state) => state.text);
  const setText = useMarkdown((state) => state.setText);

  // console.log(text);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <Container>
      <HeadingContainer>
        <HeadingText>Markdown</HeadingText>
      </HeadingContainer>

      <WritingContainer value={text} onChange={handleChange} />
    </Container>
  );
};
export default Markdown;
