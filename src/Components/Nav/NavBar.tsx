import { Button, HStack, IconButton, Image } from "@chakra-ui/react";
import placeHolderImage from "../../assets/no-image-placeholder-6f3882e0.webp";
import SearchInput from "./SearchInput";
import { IoMdSettings } from "react-icons/io";
import { BiSolidHelpCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding={"10px"} justifyContent={"space-between"}>
      <Image src={placeHolderImage} boxSize={"60px"} />
      <SearchInput onSearch={onSearch} />
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
