import styled from "styled-components";

interface ChildContainerWrapperProps {
  childSize: number;
  isActive: boolean;
}

export const ChildContainer = {
  Child: styled.div<ChildContainerWrapperProps>`
    background: ${(props) => (props.isActive ? "black" : "white")};

    height: ${(props) => props.childSize}%;

    transition: height 0.25s ease, width 0.25s ease;

    width: ${(props) => props.childSize}%;
  `,
  Wrapper: styled.div`
    align-items: center;

    display: flex;

    justify-content: center;
  `,
};

export const Wrapper = styled.div`
  display: grid;

  gap: 5px;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);

  height: 100px;

  width: 100px;
`;
