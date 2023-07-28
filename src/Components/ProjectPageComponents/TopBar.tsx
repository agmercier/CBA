import { Button, HStack, Heading, IconButton, Image } from "@chakra-ui/react";
import placeHolderImage from "../../assets/logo_place_holder_copped1.jpg";
import { BiSolidHelpCircle } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { BsChevronDown } from "react-icons/bs";
import DropdownMenu from "./DropdownMenu";

interface Props {
  projectName: string;
  goHomePage: () => void;
}

const TopBar = ({ projectName, goHomePage }: Props) => {
  const fileMenu = {
    lable: "File",
    options: [
      "Download",
      "Save",
      "Create a copy",
      "Add to Favorites",
      "Delete",
    ],
    icon: <BsChevronDown />,
  };
  const editMenu = {
    lable: "Edit",
    options: [
      "Download",
      "Save",
      "Create a copy",
      "Add to Favorites",
      "Delete",
    ],
    icon: <BsChevronDown />,
  };
  const viewMenu = {
    lable: "View",
    options: [
      "Download",
      "Save",
      "Create a copy",
      "Add to Favorites",
      "Delete",
    ],
    icon: <BsChevronDown />,
  };

  return (
    <HStack padding={"10px"} justifyContent={"space-between"}>
      <HStack spacing={1}>
        <Image
          src={placeHolderImage}
          boxSize={"60px"}
          onClick={() => goHomePage()}
        />
        <DropdownMenu
          lable={fileMenu.lable}
          options={fileMenu.options}
          icon={fileMenu.icon}
        />
        <DropdownMenu
          lable={editMenu.lable}
          options={editMenu.options}
          icon={editMenu.icon}
        />
        <DropdownMenu
          lable={viewMenu.lable}
          options={viewMenu.options}
          icon={viewMenu.icon}
        />
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
