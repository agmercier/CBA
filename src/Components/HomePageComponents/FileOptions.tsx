import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { BiDuplicate } from "react-icons/bi";
import { BsFillPencilFill, BsThreeDotsVertical } from "react-icons/bs";
import { FaTrash } from "react-icons/fa6";

const FileOptions = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<BsThreeDotsVertical />}
        variant="outline"
      />
      <MenuList>
        <MenuItem icon={<BsFillPencilFill />}>Rename</MenuItem>
        <MenuItem icon={<BiDuplicate />}>Duplicate</MenuItem>
        <MenuItem icon={<AiFillStar />}>Add to Favorite</MenuItem>
        <MenuItem icon={<FaTrash />}>Move to Trash</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default FileOptions;
