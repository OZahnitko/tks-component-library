import { useEffect, useState } from "react";

import { ChildContainer, Wrapper } from "./Styles";

const ANIMATION_LOOKUP = [
  [0, 1, 3, 4, 6, 7],
  [0, 1, 2, 3, 4, 6],
  [0, 1, 2, 3, 4, 5],
  [0, 1, 2, 4, 5, 8],
  [1, 2, 4, 5, 7, 8],
  [2, 4, 5, 6, 7, 8],
  [3, 4, 5, 6, 7, 8],
  [0, 3, 4, 6, 7, 8],
];
const ANIMATION_DURATION = 100;

const LoadingSquare = () => {
  const [animationCycle, setAnimationCycle] = useState<number>(0);
  const [activeElements, setActiveElements] = useState<number[]>(
    ANIMATION_LOOKUP[animationCycle]
  );

  useEffect(() => {
    const animationInterval = window.setInterval(() => {
      setAnimationCycle((animationCycle) =>
        animationCycle + 1 < ANIMATION_LOOKUP.length ? animationCycle + 1 : 0
      );
    }, ANIMATION_DURATION);

    return () => {
      window.clearInterval(animationInterval);
    };
  }, []);

  useEffect(() => {
    setActiveElements(() => ANIMATION_LOOKUP[animationCycle]);
  }, [animationCycle]);

  return (
    <Wrapper gapValue={5}>
      {Array.from({ length: 9 })
        .map((_, index) => index)
        .map((index) => (
          <AnimatedChild
            activeElements={activeElements}
            index={index}
            key={index}
          />
        ))}
    </Wrapper>
  );
};

export default LoadingSquare;

export const AnimatedChild = ({
  activeElements,
  index,
}: {
  activeElements: number[];
  index: number;
}) => {
  return <ChildContainer isActive={activeElements.includes(index)} />;
};
