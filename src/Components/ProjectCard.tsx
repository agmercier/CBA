import { Project } from "../hooks/useProjects";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import placeHolderImage from "../assets/no-image-placeholder-6f3882e0.webp";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <Card>
      <Image src={placeHolderImage} />
      <CardBody>
        <Heading fontSize={"2xl"}>{project.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
