import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectOrder: (filter: string) => void;
  selectedOrder: string;
}

const OrderSelector = ({ onSelectOrder, selectedOrder }: Props) => {
  const data = ["Name", "Recent", "Date", "Favorite"];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedOrder || "Order by..."}
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
