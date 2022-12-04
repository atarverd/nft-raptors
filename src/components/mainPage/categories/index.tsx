import { Box, Grid, Heading } from "@chakra-ui/react";
import { categoryData } from "../../../categoriesData";
import Card from "../../cards/card";

const Categories = () => {

	return (
		<Box mt='3rem'>
			<Heading ml='2rem'>Browse by category</Heading>
			<Grid templateColumns={["repeat(1,1fr)", "repeat(2,1fr)", "repeat(3,1fr)"]} gap={6} p='2rem'>
				{categoryData.map((category,i) => {
					return <Card data={category} key={i}/>;
				})}
			</Grid>
		</Box>
	);

};

export default Categories;
