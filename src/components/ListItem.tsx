import { Box, Button, Card, CardContent, CardMedia, Grid, Hidden, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../context/storeContext";
import { theme } from "../theme";

export interface IListItem {
  id: number;
  imgPath: string;
  category: string;
  itemType: string;
  material: string;
  design: string;
  brand: string;
  name: string;
  price: number;
  description: string;
}

export default function ListItem({ id, itemType, imgPath, name, price, brand, description }: IListItem) {
  const { category } = useStoreContext();
  let isSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      variant="outlined"
      sx={{
        border: "1px solid #DEE2E7",
        borderRadius: "6px",
        padding: 3,
        marginBottom: 1,
      }}
    >
      <Grid container wrap="nowrap" alignItems={"center"}>
        <Grid lg={3} md={3.5} sm={5} xs={4} item>
          <CardMedia component={"img"} sx={{ width: "100%", margin: 0 }} image={imgPath}></CardMedia>
        </Grid>
        <Grid lg={9} md={8.5} sm={7} xs={8} item>
          <CardContent sx={{ flex: "1 0 auto" }}>
            {isSm ? (
              <Link
                style={{ textDecoration: "none", fontWeight: 400, color: "#505050" }}
                to={`/${category}/${itemType}/${id}`}
              >
                <Typography fontWeight={400} fontSize={16} mb={2} variant={"h2"}></Typography>
                {name}
              </Link>
            ) : (
              <Typography fontWeight={500} mb={1} variant={"h5"}>
                ${name}
              </Typography>
            )}

            <Typography fontWeight={600} mb={1} variant={"h5"}>
              ${price}
            </Typography>
            <Typography
              sx={{ [theme.breakpoints.down("sm")]: { marginTop: 6 } }}
              color={"secondary.light"}
              mb={1}
              variant={"h5"}
            >
              {brand}
            </Typography>

            <Hidden smDown>
              <Typography color={"secondary.main"} fontWeight={400} mb={1} variant={"h6"}>
                {description}
              </Typography>

              <Link
                style={{ textDecoration: "none", fontWeight: 500, color: "#0D6EFD" }}
                to={`/${category}/${itemType}/${id}`}
              >
                View details
              </Link>
            </Hidden>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}
