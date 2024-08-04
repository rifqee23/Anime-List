import { Box, AlertIcon, Grid, Spinner, Alert, Flex } from "@chakra-ui/react";
import Card from "../components/Fragments/Card";
import { useEffect, useState } from "react";
import { getCards } from "../services/card.service";
import Search from "../components/Fragments/Search";

import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productSlice";
function Home() {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCards();
        dispatch(setProducts(res.data));
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Flex height={"100vh"} alignItems={"center"} justifyContent={"center"}>
        <Spinner size={"xl"} />;
      </Flex>
    );
  }
  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        {error}
      </Alert>
    );
  }

  return (
    <Box minH={"100vh"} bgColor={"black"} color={"white"} padding={"2rem"}>
      <Search />
      <Grid
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        gap={4}
        autoFlow="dense"
        placeContent={{ sm: "center", md: "center", lg: "initial" }}
      >
        {filteredProducts.length === 0 ? (
          <Alert color={"red"}>No results found</Alert>
        ) : (
          filteredProducts.map((item) => (
            <Card
              key={item.mal_id}
              src={item.images.jpg.image_url}
              title={item.title}
              mt="4rem"
            />
          ))
        )}
      </Grid>
    </Box>
  );
}

export default Home;
