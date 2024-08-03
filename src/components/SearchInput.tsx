import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStor from "../services/zustand/store";

const SearchInput = () => {
  const setSearchText = useGameQueryStor((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />

        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant={"filled"}
        />
      </InputGroup>{" "}
    </form>
  );
};

export default SearchInput;
