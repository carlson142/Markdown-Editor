import { useMarkdown } from "@/app/zustand/store";
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

// const PreviewContainer = styled.div`
//   width: 100%;
//   height: 100%;

//   padding: 1rem 2rem;

//   background-color: var(--bg3);
//   color: var(--text2);

//   font-size: 1.8rem;
// `;

const PreviewContainer = styled.textarea`
  width: 100%;
  height: 100%;

  padding: 1rem 2rem;

  background-color: var(--bg3);
  color: var(--text2);

  font-size: 1.8rem;

  outline: none;
  border: none;
`;

type PrewiewProps = {};

const Prewiew: React.FC<PrewiewProps> = () => {
  const text = useMarkdown((state) => state.text);

  //TODO: Working on text transformation
  const arrayFromTextarea = text.split("\n");
  console.log(arrayFromTextarea);

  const transformationToPreview = (text: string[]) => {
    const a = text.map((el, i) => el.slice(0, 3));

    return a;
  };

  let test = transformationToPreview(arrayFromTextarea);
  console.log(test);

  return (
    <Container>
      <HeadingContainer>
        <HeadingText>Preview</HeadingText>
      </HeadingContainer>

      {/* <PreviewContainer>{text}</PreviewContainer> */}
      <PreviewContainer value={text} readOnly />
    </Container>
  );
};
export default Prewiew;
