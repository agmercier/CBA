import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ReactElement } from "react";

/**
 * Template for drop down menu
 */

interface Props {
  lable: string;
  options: string[];
  icon: ReactElement;
}

const DropdownMenu = ({ lable, options, icon }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={icon} borderRadius="2px">
        {lable}
      </MenuButton>
      <MenuList>
        {options.map((opt) => (
          <MenuItem>{opt}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default DropdownMenu;
