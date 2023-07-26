import { Button, HStack, Heading, IconButton, Image } from "@chakra-ui/react";
import placeHolderImage from "../../assets/logo_place_holder_copped1.jpg";
import FileMenu from "./Menu's/FileMenu";
import EditMenu from "./Menu's/EditMenu";
import ViewMenu from "./Menu's/ViewMenu";
import { BiSolidHelpCircle } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

interface Props {
  projectName: string;
  goHomePage: () => void;
}

const TopBar = ({ projectName, goHomePage }: Props) => {
  return (
    <HStack padding={"10px"} justifyContent={"space-between"}>
      <HStack spacing={1}>
        <Image
          src={placeHolderImage}
          boxSize={"60px"}
          onClick={() => goHomePage()}
        />
        <FileMenu />
        <EditMenu />
        <ViewMenu />
        <Button borderRadius="2px">Run</Button>
        <Heading padding={3}>{projectName}</Heading>
      </HStack>
      <HStack>
        <IconButton
          icon={<BiSolidHelpCircle />}
          aria-label={"settings"}
        ></IconButton>
        <IconButton icon={<IoMdSettings />} aria-label={"help"}></IconButton>
        <IconButton icon={<CgProfile />} aria-label={"profile"}></IconButton>
      </HStack>
    </HStack>
  );
};

export default TopBar;
