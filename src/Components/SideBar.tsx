import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillHome, AiFillStar } from "react-icons/ai";
import { FaClockRotateLeft, FaTrash } from "react-icons/fa6";

interface Props {
  onSelectOption: (option: string) => void;
}

const SideBar = ({ onSelectOption }: Props) => {
  const options = [
    { name: "Home", icon: AiFillHome },
    { name: "Recent", icon: FaClockRotateLeft },
    { name: "Favorite", icon: AiFillStar },
    { name: "Trash", icon: FaTrash },
  ];
  return (
    <>
      <Button
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
