import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const ViewMenu = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} borderRadius="2px">
        View
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Add to Favorites</MenuItem>
        <MenuItem>Delete</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ViewMenu;
