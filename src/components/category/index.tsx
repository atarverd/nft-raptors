import { useParams } from "react-router";
import CollectionCard from "../cards/collectionCard";
import { SimpleGrid, Center, Box } from "@chakra-ui/react";
import useCollectionRequest from "../../hooks/useCollectionRequest";

const Category = () => {
  const { id } = useParams();

  const filteredCollection = useCollectionRequest("category", id);

  return (
    <Box minH='80vh'>
      <Center>
        <SimpleGrid columns={[1, 3]} spacing='80px' my='4%'>
          {filteredCollection.map((category) => {
            return <CollectionCard collection={category} key={category.id} />;
          })}
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default Category;
