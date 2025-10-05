import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image boxSize="60px" src={logo}></Image>
      <text>Navbar</text>
    </HStack>
  );
};

export default NavBar;
