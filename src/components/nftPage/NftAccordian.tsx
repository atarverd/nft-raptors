import React, { FC } from "react";
import {
  Box,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import {FaChartLine,FaHistory,FaTh} from "react-icons/fa"
import { type } from "@testing-library/user-event/dist/types/setup/directApi";

type FCProps = {
  children: JSX.Element;
  accordionName: string;
};

const NftAccordion = ({ children, accordionName }: FCProps) => {
  return (
    <Box w='500px'>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Flex flex='1' textAlign='left'>
                <Box m='5px'>{accordionName==='History'?<FaHistory/> : accordionName.includes('More')?<FaTh/>:<FaChartLine/>}</Box>
                <Box m='5px'>{accordionName}</Box>
              </Flex>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{children}</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default NftAccordion;
