import { Box, Container, Hidden } from "@mui/material";
import React, { useState } from "react";

import List from "./List";
import SideBar from "./SideBar";
import TopContentButtons from "./TopContentButtons";
import storeItemsData from "../data/items.json";
import { IListItem } from "./ListItem";

export default function MainContent() {
  const [storeItems, setStoreItems] = useState<IListItem[]>(storeItemsData);

  return (
    <Container>
      <TopContentButtons storeItems={storeItems} setStoreItems={setStoreItems} />
      <Box sx={{ display: "flex" }} my={3} gap={5}>
        <Hidden smDown>
          <SideBar storeItems={storeItems} setStoreItems={setStoreItems} />
        </Hidden>

        <List storeItems={storeItems} setStoreItems={setStoreItems} />
      </Box>
    </Container>
  );
}
