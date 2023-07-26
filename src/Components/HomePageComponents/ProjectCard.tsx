import { Project } from "../../hooks/useProjects";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import placeHolderImage from "../../assets/no-image-placeholder-6f3882e0.webp";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import FileOptions from "./FileOptions";

interface Props {
  project: Project;
  setCurrentProject: (project: Project) => void;
}

const ProjectCard = ({ project, setCurrentProject }: Props) => {
  return (
    <Card
      onDoubleClick={() => {
        setCurrentProject(project);
      }}
    >
      <Image src={placeHolderImage} />
      <CardBody>
        <HStack justify={"space-between"} marginBottom={3}>
          <p>{project.date.toDateString()}</p>
          {project.favorite ? <AiFillStar /> : <AiOutlineStar />}
        </HStack>
        <HStack justifyContent={"space-between"}>
          <Heading fontSize={"2xl"}>{project.name}</Heading>
          <FileOptions />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
