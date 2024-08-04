import { Box, AlertIcon, Grid, Spinner, Alert } from "@chakra-ui/react";
import Card from "../components/Fragments/Card";
import { useEffect, useState } from "react";
import { getCards } from "../services/card.service";
import Search from "../components/Fragments/Search";
function Home() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCards();
        setList(data.data);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        {error}
      </Alert>
    );
  }

  console.log(list);

  return (
    <Box height={"100%"} bgColor={"black"} color={"white"} padding={"2rem"}>
      <Search />
      <Grid
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        gap={4}
        autoFlow="dense"
      >
        {list.map((item) => (
          <Card
            key={item.mal_id}
            src={item.images.jpg.image_url}
            title={item.title}
            mt="4rem"
          />
        ))}
      </Grid>
    </Box>
  );
}

export default Home;
