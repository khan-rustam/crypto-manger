import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HStack p={"4"} bgColor={"blackAlpha.900"} shadow={"base"} >
      <Button variant={"unstyled"} color={"white"} textTransform={'uppercase'} mx={4}>
        <Link to={"/"}>Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} textTransform={'uppercase'} mx={4}>
        <Link to={"/exchanges"}>Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} textTransform={'uppercase'} mx={4}>
        <Link to={"/coins"}>Coins</Link>
      </Button>
    </HStack>
  );
}
