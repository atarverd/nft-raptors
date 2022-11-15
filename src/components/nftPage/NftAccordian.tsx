import React, { FC } from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
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
              <Box flex='1' textAlign='left'>
                {accordionName}
              </Box>
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
