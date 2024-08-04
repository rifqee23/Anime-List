import React from "react";
import { CiSearch } from "react-icons/ci";
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  InputLeftElement,
} from "@chakra-ui/react";

function Search() {
  return (
    <InputGroup size="md">
      <InputLeftElement pointerEvents="none">
        <CiSearch />
      </InputLeftElement>
      <Input pr="4.5rem" type="text" placeholder="Search..." />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm">
          Show
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default Search;
