import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import LinksOrder from "./LinksOrder";
import { IListItem } from "./ListItem";
import storeItemsData from "../data/items.json";
import { Box, Button, Divider, Grid, Hidden, Typography, useTheme } from "@mui/material";

export default function ItemDetails({ id }: { id: string }) {
  const [item, setItem] = useState<IListItem>();

  const fakeFetchItem = (id: number) => {
    return storeItemsData.find((item) => item.id === id);
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await fakeFetchItem(+id);
        setItem(res);
      } catch (error) {}
    })();
  }, []);

  const theme = useTheme();
  return (
    <>
      {item && (
        <>
          {" "}
          <Grid
            container
            wrap="nowrap"
            p={3}
            pb={10}
            mb={5}
            sx={{
              [theme.breakpoints.down("sm")]: {
                flexWrap: "wrap",
              },
              gap: 2,
              backgroundColor: "white",
              borderRadius: "6px",
              border: "1px solid #DEE2E7",
            }}
          >
            <Grid
              item
              md={4}
              sm={5}
              xs={12}
              p={2}
              width={345}
              sx={{ borderRadius: "6px", border: "1px solid #DEE2E7" }}
            >
              <img src={item.imgPath} alt={item.itemType} width={"100%"}></img>
            </Grid>
            <Grid item md={5} sm={7} xs={12}>
              <Typography
                fontSize={20}
                fontWeight={600}
                mb={1}
                variant="h2"
                component={"h2"}
                sx={{
                  [theme.breakpoints.down("sm")]: {
                    fontSize: 16,
                  },
                }}
              >
                {item.name}
              </Typography>
              <Typography fontSize={24} fontWeight={600} mb={1} variant="h4" component={"h4"}>
                ${item.price}
              </Typography>

              <Button fullWidth size="small" variant="contained" sx={{ marginBottom: 4 }}>
                <Box component={"img"} mr={1} src="/imgs/icons/shopping_cart.svg" />
                Buy
              </Button>

              {item.category && (
                <Box
                  mb={1}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "60%",
                  }}
                >
                  <Typography color={"secondary.light"} variant="h4">
                    Category:
                  </Typography>
                  <Typography color={"secondary.main"} variant="h4">
                    {item.category}
                  </Typography>
                </Box>
              )}

              <Divider sx={{ bgcolor: "success.main" }} />

              {item.itemType && (
                <Box my={1} sx={{ display: "flex", justifyContent: "space-between", width: "60%" }}>
                  <Typography color={"secondary.light"} variant="h4">
                    Type:
                  </Typography>
                  <Typography color={"secondary.main"} variant="h4">
                    {item.itemType}
                  </Typography>
                </Box>
              )}

              {item.material && (
                <Box mb={1} sx={{ display: "flex", justifyContent: "space-between", width: "60%" }}>
                  <Typography color={"secondary.light"} variant="h4">
                    Material:
                  </Typography>
                  <Typography color={"secondary.main"} variant="h4">
                    {item.material}
                  </Typography>
                </Box>
              )}

              {item.design && (
                <Hidden mdDown>
                  <Box my={1} sx={{ display: "flex", justifyContent: "space-between", width: "60%" }}>
                    <Typography color={"secondary.light"} variant="h4">
                      Design:
                    </Typography>
                    <Typography color={"secondary.main"} variant="h4">
                      {item.design}
                    </Typography>
                  </Box>
                </Hidden>
              )}

              <Divider sx={{ bgcolor: "success.main" }} />
            </Grid>
          </Grid>
          <Box
            p={3}
            pb={10}
            mb={7}
            sx={{
              backgroundColor: "white",
              borderRadius: "6px",
              border: "1px solid #DEE2E7",
            }}
          >
            <Typography color={"secondary.main"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur.{" "}
            </Typography>
          </Box>
        </>
      )}
    </>
  );
}
