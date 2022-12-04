import {
	Box,
	Flex,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
} from "@chakra-ui/react";
import {FaChartLine,FaHistory,FaTh} from "react-icons/fa";

type FCProps = {
  children: JSX.Element;
  accordionName: string;
};

const NftAccordion = ({ children, accordionName }: FCProps) => {
	return (
		<Box mt='20px'>
			<Accordion defaultIndex={[0]} allowMultiple>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Flex flex='1' textAlign='left'>
								<Box m='5px'>{accordionName==="History"?<FaHistory/> : accordionName.includes("More")?<FaTh/>:<FaChartLine/>}</Box>
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
