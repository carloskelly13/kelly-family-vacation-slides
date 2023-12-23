import { createRoot } from "react-dom/client";
import {
  Deck,
  DefaultTemplate,
  Slide,
  FlexBox,
  Heading,
  SpectacleLogo,
  Text,
  type DeckProps,
} from "spectacle";

import introImg from "./assets/intro-img.png";
import coastImg from "./assets/main.webp";

const theme: DeckProps["theme"] = {
  colors: {
    secondary: "#a5f3fc",
    tertiary: "#155e75",
  },
  fonts: {
    header: "'Rethink Sans', sans-serif;",
    text: "'Rethink Sans', sans-serif;",
  },
  fontSizes: {
    text: "1.75rem",
  },
};

const transition = {
  from: {
    opacity: 0,
    transform: "scale(0.95) translate3d(0, 2%, 0)",
  },
  enter: {
    opacity: 1,
    transform: "scale(1.0) translate3d(0, 0, 0)",
  },
  leave: {
    opacity: 0,
    transform: "scale(1.05) translate3d(0, -2%, 0)",
  },
};

const Presentation = () => (
  <Deck
    theme={theme}
    transition={transition}
    template={() => <DefaultTemplate color={theme.colors?.primary} />}
  >
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <img src={introImg} className="w-80 rounded-full drop-shadow-2xl" />
        <Heading>Kelly Family Vacation 2024</Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <img src={coastImg} className="h-1/2 rounded-3xl drop-shadow-2xl" />
        <Text className="w-11/12">
          <span className="font-bold">Mackinac Island</span> is a timeless
          retreat nestled in the sparkling waters of Lake Huron, stands as a
          unique jewel of the Great Lakes region. Renowned for its rich history,
          breathtaking natural beauty, and the charming absence of motor
          vehicles, this picturesque island offers a serene escape from the
          hustle and bustle of modern life.
        </Text>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%">
        <Heading fontSize="h2">Made with</Heading>
        <SpectacleLogo size={300} />
      </FlexBox>
    </Slide>
  </Deck>
);

createRoot(document.getElementById("app")!).render(<Presentation />);
