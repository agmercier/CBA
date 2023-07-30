import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

/* Set size of card */

interface Props {
  children: ReactNode;
}

const ProjectCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={"10px"} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default ProjectCardContainer;
