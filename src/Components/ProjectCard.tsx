import { Project } from "../hooks/useProjects";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import placeHolderImage from "../assets/no-image-placeholder-6f3882e0.webp";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <Card>
      <Image src={placeHolderImage} />
      <CardBody>
        <HStack justify={"space-between"} marginBottom={3}>
          <p>{project.date.toDateString()}</p>
          {project.favorite ? <AiFillStar /> : <AiOutlineStar />}
        </HStack>
        <Heading fontSize={"2xl"}>{project.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
