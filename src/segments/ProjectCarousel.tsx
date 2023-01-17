import React from "react";
import { Carousel } from "react-responsive-carousel";
import { PROJECT_DATA } from "../utils/variables";
import { Flex, ProjectCard } from "../components";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProjectCarousel = ({
  setCurrentProject,
}: {
  setCurrentProject: (item: any) => void;
}) => {
  const handleProjectChange = (i: number, item: any) => {
    setCurrentProject(item.props);
  };

  return (
    <Flex>
      <Carousel
        swipeable
        emulateTouch
        infiniteLoop
        // autoPlay
        // stopOnHover
        axis="vertical"
        showStatus={false}
        showThumbs={false}
        onChange={handleProjectChange}
      >
        {PROJECT_DATA.map((item) => (
          <ProjectCard key={item.id} {...item} />
        ))}
      </Carousel>
    </Flex>
  );
};

export { ProjectCarousel };
