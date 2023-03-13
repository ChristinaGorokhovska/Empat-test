import { Box } from "@mui/material";
import React from "react";
import ListItem, { IListItem } from "./ListItem";

export default function List({
  storeItems,
  setStoreItems,
}: {
  storeItems: IListItem[];
  setStoreItems: React.Dispatch<React.SetStateAction<IListItem[]>>;
}) {
  return (
    <>
      {storeItems && (
        <Box>
          {storeItems.map((item: IListItem) => {
            return <ListItem key={item.id} {...item}></ListItem>;
          })}
        </Box>
      )}
    </>
  );
}
