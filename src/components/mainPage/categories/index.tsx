import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import { categoryData } from "../../../categoriesData";
import Card from "../../Card";

const Categories = () => {
  return (
    <Grid templateColumns='repeat(3,1fr)' gap={6} m='2rem'>
      {categoryData.map((category) => {
        return <Card data={category} />;
      })}
    </Grid>
  );

  //   <Card />;
};

export default Categories;
