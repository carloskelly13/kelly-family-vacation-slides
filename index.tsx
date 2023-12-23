import { createRoot } from "react-dom/client";
import {
  Deck,
  DefaultTemplate,
  Slide,
  FlexBox,
  Heading,
  SpectacleLogo,
  type DeckProps,
} from "spectacle";

import introImg from "./assets/intro-img.png";

const theme: DeckProps["theme"] = {
  colors: {
    primary: "#22d3ee",
    secondary: "#a5f3fc",
    tertiary: "#155e75",
  },
  fonts: {
    header: "'Rethink Sans', sans-serif;",
    text: "'Rethink Sans', sans-serif;",
  },
};

const Presentation = () => (
  <Deck
    theme={theme}
    template={() => <DefaultTemplate color={theme.colors?.primary} />}
  >
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <img src={introImg} className="w-80 rounded-full shadow-2xl" />
        <Heading>Kelly Family Vacation 2024</Heading>
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
