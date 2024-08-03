import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStor from "../services/zustand/store";

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released date" },
    { value: "-added", label: "Date added" },
    { value: "-created", label: "Date created" },
    { value: "-updated", label: "Date updated" },
    { value: "-rating", label: "Average rating" },
    { value: "-metacritic", label: "Popularity" },
  ];

  const sortOrder = useGameQueryStor((s) => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStor((s) => s.setSortOrder);
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by:{currentSortOrder?.label || "Relevence"}
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem
              onClick={() => setSortOrder(order.value)}
              key={order.value}
              value={order.value}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
