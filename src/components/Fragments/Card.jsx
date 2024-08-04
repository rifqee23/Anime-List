import {
  Stack,
  Heading,
  Text,
  Image,
  Flex,
  Card,
  CardBody,
} from "@chakra-ui/react";

function CardFrag({ title, desc, src, mt }) {
  return (
    <Card maxW="sm" mt={mt}>
      <CardBody>
        <Flex justifyContent="center">
          <Image
            src={src}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            width={"200px"}
            height={"300px"}
          />
        </Flex>

        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{desc}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default CardFrag;
