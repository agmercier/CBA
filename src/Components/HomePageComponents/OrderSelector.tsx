import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

/**
 * Drop down menu with differnt ways to order the projects
 */

interface Props {
  onSelectOrder: (filter: string) => void;
  selectedOrder: string;
}

const OrderSelector = ({ onSelectOrder, selectedOrder }: Props) => {
  //List of different orders
  const data = ["Name", "Recent", "Date", "Favorite"];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedOrder || "Order by..." /*Button lable */}
      </MenuButton>
      <MenuList>
        {data.map((order) => (
          <MenuItem onClick={() => onSelectOrder(order)} key={order}>
            {order}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default OrderSelector;
