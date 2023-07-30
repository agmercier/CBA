import { Button, HStack, IconButton, Image } from "@chakra-ui/react";
import placeHolderImage from "../../../assets/logo_place_holder_copped1.jpg";
import SearchInput from "./SearchInput";
import { IoMdSettings } from "react-icons/io";
import { BiSolidHelpCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

/**
 * The top section of HomePage, includes: logo, searchBar, help, settings, profile
 */

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding={"10px"} justifyContent={"space-between"}>
      <Image src={placeHolderImage} boxSize={"60px"} />
      <SearchInput
        onSearch={
          onSearch
        } /*calls onSearch when search is entered in searchbar*/
      />
      <IconButton
        icon={<BiSolidHelpCircle />}
        aria-label={"settings"}
      ></IconButton>
      <IconButton icon={<IoMdSettings />} aria-label={"help"}></IconButton>
      <IconButton icon={<CgProfile />} aria-label={"profile"}></IconButton>
    </HStack>
  );
};

export default NavBar;
