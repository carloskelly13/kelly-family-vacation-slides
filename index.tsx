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
  ListItem,
  UnorderedList,
} from "spectacle";

import introImg from "./assets/intro-img.png";
import coastImg from "./assets/main.webp";
import mapImg from "./assets/map.webp";
import golfCourseImg from "./assets/IMG_0418.webp";
import bikeImg from "./assets/IMG_0421.webp";
import cityImg from "./assets/IMG_0424.webp";
import kayakImg from "./assets/IMG_0427.webp";
import lighthouseImg from "./assets/IMG_0429.webp";
import shopsImg from "./assets/IMG_0438.webp";
import teaImg from "./assets/IMG_0441.webp";
import beachImg from "./assets/IMG_0447.webp";
import flowersImg from "./assets/IMG_0455.webp";

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
      <FlexBox height="100%" flexDirection="column">
        <Heading fontSize="h3">The High Points</Heading>
        <UnorderedList className="list-disc w-9/12">
          <ListItem>Unique, car-free island in Lake Huron, Michigan.</ListItem>
          <ListItem>Accessible by ferry, offering a scenic journey.</ListItem>
          <ListItem>
            Historic 19th-century architecture downtown, with quaint shops and
            restaurants.
          </ListItem>
          <ListItem>
            Enjoy the natural beauty with activities like hiking, biking, and
            horseback riding along scenic trails and stunning Lake Huron shores.
          </ListItem>
          <ListItem>
            Great Wi-Fi for playing games on your Nintendo Switch.
          </ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading fontSize="h3">Where is Mackinac Island?</Heading>
        <img src={mapImg} className="h-3/4 drop-shadow-2xl" />
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading fontSize="h3">Culinary Delights on Mackinac Island</Heading>
        <UnorderedList className="list-disc w-9/12">
          <ListItem>
            <span className="font-bold">Diverse Dining Options:</span> From
            upscale dining in historic hotels to casual lakeside eateries.
          </ListItem>
          <ListItem>
            <span className="font-bold">Local Specialties:</span> Emphasis on
            fresh, locally-sourced ingredients, including Great Lakes fish and
            Michigan-grown produce.
          </ListItem>
          <ListItem>
            <span className="font-bold">Mackinac Island Fudge:</span> A must-try
            delicacy, with numerous fudge shops offering a variety of flavors.
          </ListItem>
          <ListItem>
            <span className="font-bold">Ice Cream Parlors:</span> Hand-crafted
            ice cream, a favorite treat for families, especially during summer.
          </ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading fontSize="h3">Afternoon Tea Tradition</Heading>
        <UnorderedList className="list-disc w-9/12">
          <ListItem>
            <span className="font-bold">Elegant Experience:</span> Many historic
            hotels on the island offer a traditional afternoon tea service,
            complete with fine china and silverware.
          </ListItem>
          <ListItem>
            <span className="font-bold">Assortment of Teas:</span> A selection
            of high-quality teas accompanied by scones, clotted cream, jam, and
            delicate finger sandwiches.
          </ListItem>
          <ListItem>
            <span className="font-bold">Scenic Settings:</span> Enjoy tea with a
            view, overlooking manicured gardens or the sparkling waters of Lake
            Huron.
          </ListItem>
          <ListItem>
            <span className="font-bold">Family-Friendly:</span> A charming way
            to introduce children to a classic tradition, while they ignore the
            scenery and play games on their Nintendo.
          </ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading fontSize="h3">Golfing on Mackinac Island</Heading>
        <UnorderedList className="list-disc w-9/12">
          <ListItem>
            <span className="font-bold">Scenic Golf Courses:</span> The island
            boasts picturesque golf courses that blend naturally with the
            surrounding landscapes.
          </ListItem>
          <ListItem>
            <span className="font-bold">The Jewel:</span> A unique 18-hole
            course, with the front and back nine separated by a horse-drawn
            carriage ride through the island’s interior.
          </ListItem>
          <ListItem>
            <span className="font-bold">Wawashkamo Golf Club:</span> One of the
            oldest continuously played golf courses in Michigan, offering a
            historic and challenging round.
          </ListItem>
          <ListItem>
            <span className="font-bold">Family-Friendly:</span> Mini-golf and
            other fun recreational activities suitable for all ages.
          </ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading fontSize="h3">Activities, Nature, and Recreation</Heading>
        <UnorderedList className="list-disc w-9/12">
          <ListItem>
            <span className="font-bold">Mackinac Island State Park:</span> Over
            70 miles of hiking and biking trails.
          </ListItem>
          <ListItem>
            <span className="font-bold">Horse-Drawn Carriage Tours:</span>{" "}
            Special themed tours available, including ghost tours and historical
            routes.
          </ListItem>
          <ListItem>
            <span className="font-bold">Water-Based Activities:</span> Kayaking
            and paddleboarding along the shoreline. Guided boat tours offering
            views of the island and surrounding areas. Pristine beaches for
            swimming, sunbathing, and relaxation.
          </ListItem>
          <ListItem>
            <span className="font-bold">Nature and Wildlife Encounters:</span>{" "}
            Butterfly conservatories and nature centers perfect for younger
            children. Spotting wildlife, including birds and the famous Mackinac
            Island horses.
          </ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>
    <Slide>
      <div className="relative h-full w-full">
        <img
          src={golfCourseImg}
          className="h-1/2 w-auto rounded-3xl drop-shadow-2xl absolute top-5 left-14 transform -rotate-1 hover:rotate-1 transition-all duration-500"
        />
        <img
          src={bikeImg}
          className="h-1/2 rounded-3xl drop-shadow-2xl absolute bottom-16 right-14 transform rotate-1 hover:-rotate-1 transition-all duration-500"
        />
      </div>
    </Slide>
    <Slide>
      <div className="relative h-full w-full">
        <img
          src={cityImg}
          className="h-1/2 w-auto rounded-3xl drop-shadow-2xl absolute bottom-16 left-14 transform -rotate-1 hover:rotate-1 transition-all duration-500"
        />
        <img
          src={flowersImg}
          className="h-[60%] rounded-3xl drop-shadow-2xl absolute top-5 right-14 transform rotate-1 hover:-rotate-1 transition-all duration-500"
        />
      </div>
    </Slide>
    <Slide>
      <div className="relative h-full w-full">
        <img
          src={lighthouseImg}
          className="h-[60%] w-auto rounded-3xl drop-shadow-2xl absolute top-5 left-14 transform -rotate-1 hover:rotate-1 transition-all duration-500"
        />
        <img
          src={kayakImg}
          className="h-1/2 rounded-3xl drop-shadow-2xl absolute bottom-16 right-14 transform rotate-1 hover:-rotate-1 transition-all duration-500"
        />
      </div>
    </Slide>
    <Slide>
      <div className="relative h-full w-full">
        <img
          src={shopsImg}
          className="h-1/2 w-auto rounded-3xl drop-shadow-2xl absolute bottom-16 left-14 transform -rotate-1 hover:rotate-1 transition-all duration-500"
        />
        <img
          src={teaImg}
          className="h-1/2 rounded-3xl drop-shadow-2xl absolute top-5 right-14 transform rotate-1 hover:-rotate-1 transition-all duration-500"
        />
      </div>
    </Slide>
    <Slide>
      <div className="relative h-full w-full">
        <img
          src={beachImg}
          className="h-[60%] w-auto rounded-3xl drop-shadow-2xl absolute top-5 left-14 transform -rotate-1 hover:rotate-1 transition-all duration-500"
        />
        <img
          src={coastImg}
          className="h-[60%] rounded-3xl drop-shadow-2xl absolute bottom-16 right-14 transform rotate-1 hover:-rotate-1 transition-all duration-500"
        />
      </div>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading fontSize="h3">
          Presented by Carlos, Michael, &amp; Sonia.
        </Heading>
        <div className="h-1 border-b border-dashed border-b-teal-400 w-10/12 mb-4" />
        <FlexBox className="border-b-sky-100">
          <Heading fontSize="h3">Made with</Heading>
          <SpectacleLogo size={133} />
        </FlexBox>
      </FlexBox>
    </Slide>
  </Deck>
);

createRoot(document.getElementById("app")!).render(<Presentation />);
