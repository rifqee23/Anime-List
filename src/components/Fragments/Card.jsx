import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import {
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";

import MyButton from "../Elements/MyButton";

function CardFrag({ title, desc }) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{desc}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <MyButton colorScheme="blue">Buy Now</MyButton>
          <MyButton
            variant="outline"
            colorScheme="white"
            color="blue.600"
            border="2px"
          />
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default CardFrag;
