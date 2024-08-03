import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStor from "../services/zustand/store";

const PlatformSelector = () => {
  const selectedPlatformId = useGameQueryStor((s) => s.gameQuery.platformId);
  const setSelectedPlatformId = useGameQueryStor((s) => s.setPlatformId);

  const { data: platforms, error } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);
  return (
    <>
      {error && null}
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {platforms?.results.map((platform) => (
            <MenuItem
              onClick={() => setSelectedPlatformId(platform.id)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformSelector;
