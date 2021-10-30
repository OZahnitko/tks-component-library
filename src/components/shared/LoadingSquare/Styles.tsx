import styled from "styled-components";

interface ChildContainerWrapperProps {
  isActive: boolean;
}

export const ChildContainer = {
  Child: styled.div<ChildContainerWrapperProps>`
    background: ${(props) => (props.isActive ? "black" : "white")};

    height: ${(props) => (props.isActive ? 100 : 25)}%;

    transition: height 0.5s ease, width 0.5s ease;

    width: ${(props) => (props.isActive ? 100 : 25)}%;
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
