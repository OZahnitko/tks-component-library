import styled from "styled-components";

interface ChildContainerProps {
  isActive: boolean;
}

export const ChildContainer = styled.div<ChildContainerProps>`
  background: ${(props) => (props.isActive ? "black" : "white")};

  color: white;

  transition: height 0.25s ease-in-out;
`;

export const Wrapper = styled.div<{ gapValue: number }>`
  display: grid;

  gap: ${(props) => props.gapValue}px;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);

  height: 100px;

  width: 100px;
`;
