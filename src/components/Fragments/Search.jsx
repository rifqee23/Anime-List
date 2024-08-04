import React from "react";
import { CiSearch } from "react-icons/ci";
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  InputLeftElement,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../redux/actions/productSlice";

function Search() {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.products.searchQuery);

  const handleSearchChange = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <InputGroup size="md">
      <InputLeftElement pointerEvents="none">
        <CiSearch />
      </InputLeftElement>
      <Input
        value={searchQuery}
        pr="4.5rem"
        type="text"
        placeholder="Search..."
        onChange={handleSearchChange}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm">
          Show
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default Search;
