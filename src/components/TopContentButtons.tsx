import { Box, Button, Container, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import DrawerMobile from "./DrawerMobile";
import { IListItem } from "./ListItem";

export default function TopContentButtons({
  storeItems,
  setStoreItems,
}: {
  storeItems: IListItem[];
  setStoreItems: React.Dispatch<React.SetStateAction<IListItem[]>>;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const theme = useTheme();
  let isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const handleAscending = () => {
    setStoreItems((items) => items.slice().sort((a, b) => a.price - b.price));
  };

  const handleDescending = () => {
    setStoreItems((items) => items.slice().sort((a, b) => b.price - a.price));
  };
  return (
    <Box sx={{ backgroundColor: "white", border: "1px solid #DEE2E7", borderRadius: "6px" }}>
      <Container>
        <Box
          py={1}
          sx={{
            display: "flex",
            [theme.breakpoints.down("sm")]: {
              justifyContent: "center",
            },
            justifyContent: "end",
            alignItems: "center",
            "& Button": {
              color: "info.dark",
              [theme.breakpoints.down("sm")]: {
                fontSize: "13px",
              },
              "&:focus": {
                border: "1px solid blue",
                borderColor: "primary.main",
              },
            },
          }}
        >
          <Button size="small" onClick={handleAscending}>
            Price: Low to High
            <Box component={"img"} ml={1} src="/imgs/icons/file-upload.svg" />
          </Button>
          <Button size="small" sx={{ marginLeft: 1 }} onClick={handleDescending}>
            Price: High to Low
            <Box component={"img"} ml={1} src="/imgs/icons/file-download.svg" />
          </Button>

          {isSm && (
            <Box ml={1} onClick={() => setIsOpen(true)} component={"img"} src="/imgs/icons/filter_alt.svg"></Box>
          )}

          <DrawerMobile isOpen={isOpen} setIsOpen={setIsOpen} storeItems={storeItems} setStoreItems={setStoreItems} />
        </Box>
      </Container>
    </Box>
  );
}
