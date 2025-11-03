import { Icon, Input, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup
      startElement={<Icon as={BsSearch} color="gray.400" boxSize={5} />}
    >
      <Input
        borderRadius={20}
        placeholder="Search games..."
        variant="outline"
      />
    </InputGroup>
  );
};

export default SearchInput;
