import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import img from "../Assets/BTC.png";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: "2",
          repeat:"infinity",
          repeatType:"reverse"
        }}
      >
        <Image
          src={img}
          w={"full"}
          h={"80vh"}
          objectFit={"contain"}
          filter={"grayscale(1)"}
        />
      </motion.div>
      <Text
        fontSize={["2xl","6xl"]}
        textAlign={"center"}
        fontWeight={"500"}
        color={"whiteAlpha.700"}
      >
        THE CRYPTO MANAGER
      </Text>
    </Box>
  );
}
