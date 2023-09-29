import { Box, Grid, GridItem, Icon } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { FaLightbulb } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
import { AiOutlineLogin } from "react-icons/ai";
import { Login } from "./Login";
import Signup from "./Signup";


export const Main = () => {
  
  return (
    <>
      <Box margin={"auto"} width={"60vw"} mt="10px">
        <Tabs isFitted>
          <TabList mb="1em">
            <Tab>
              <Icon as={AiOutlineLogin} h={4} w={6} pr={"5px"} /> Login
            </Tab>
            <Tab>
              <Icon as={SiGnuprivacyguard} h={4} w={6} pr={"5px"} /> Signup
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

