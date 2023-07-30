import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

/**
 * Drop down menu to select different filters
 */

interface Props {
  onSelectFilter: (filter: string) => void;
  selectedFilter: string;
}

const FilterSelector = ({ onSelectFilter, selectedFilter }: Props) => {
  //Topics projects can be filtered by
  const data = ["Favorite", "Attacks", "Defences", "Finished"];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedFilter || "Filter by..." /* button lable*/}
      </MenuButton>
      <MenuList>
        {data.map((filter) => (
          <MenuItem onClick={() => onSelectFilter(filter)} key={filter}>
            {filter}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default FilterSelector;
