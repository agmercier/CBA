import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectFilter: (filter: string) => void;
  selectedFilter: string;
}

const FilterSelector = ({ onSelectFilter, selectedFilter }: Props) => {
  const data = ["Favorite", "Attacks", "Defences", "Finished"];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedFilter || "Filter by..."}
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
