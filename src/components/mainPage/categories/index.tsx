import React from "react";
import { Box, Grid, Heading } from "@chakra-ui/react";
import { categoryData } from "../../../categoriesData";
import Card from "../../card";

const Categories = () => {
  return (
    <Box mt='3rem'>
      <Heading>Browse by category</Heading>
      <Grid templateColumns='repeat(3,1fr)' gap={6} m='2rem'>
        {categoryData.map((category) => {
          return <Card data={category} />;
        })}
      </Grid>
    </Box>
  );

  //   <Card />;
};

export default Categories;
