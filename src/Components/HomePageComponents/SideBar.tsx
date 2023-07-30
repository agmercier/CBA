import { Button, List, ListItem } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillHome, AiFillStar } from "react-icons/ai";
import { FaClockRotateLeft, FaTrash } from "react-icons/fa6";

/**
 * Bar on the left side of the HomePage, includes: 'New' button, a list of options to select
 */

interface Props {
  onSelectOption: (option: string) => void;
}

const SideBar = ({ onSelectOption }: Props) => {
  //The different options listed in the sidebar. Add an object to the list and it will be added to the sidebar
  const options = [
    { name: "Home", icon: AiFillHome },
    { name: "Recent", icon: FaClockRotateLeft },
    { name: "Favorite", icon: AiFillStar },
    { name: "Trash", icon: FaTrash },
  ];
  return (
    <>
      <Button //create a new project (TODO)
        leftIcon={<AiOutlinePlus />}
        size={"lg"}
        fontSize={"2xl"}
        marginBottom={3}
      >
        New
      </Button>
      <List>
        {options.map((op) => (
          <ListItem key={op.name} paddingY={2}>
            <Button
              leftIcon={<op.icon />}
              onClick={() => onSelectOption(op.name)}
              textAlign={"left"}
              whiteSpace={"normal"}
              fontSize={"xl"}
              variant={"link"}
            >
              {op.name}
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default SideBar;
