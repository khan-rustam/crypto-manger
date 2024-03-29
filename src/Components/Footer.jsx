import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"white"}
      minH={"48"}
      px={"16"}
      py={["16", "12"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best Crypto Currency Team in INDIA, we provied our
            guidance to our every customer at very reasonable price.
          </Text>
        </VStack>
        <VStack>
          <Avatar boxSize={"28"} mt={("4", "0")} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
}
