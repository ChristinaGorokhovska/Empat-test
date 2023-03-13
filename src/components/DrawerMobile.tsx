import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Checkbox, FormControlLabel, FormGroup, makeStyles, Typography } from "@mui/material";
import { IListItem } from "./ListItem";
import storeData from "../data/items.json";
import { useState } from "react";
import { Container } from "@mui/system";
import RangeSlider from "./RangeSlider";
const brandsData = ["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"];

type Anchor = "top";

export default function DrawerMobile({
  storeItems,
  setStoreItems,
  isOpen,
  setIsOpen,
}: {
  storeItems: IListItem[];
  setStoreItems: React.Dispatch<React.SetStateAction<IListItem[]>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [state, setState] = React.useState({
    top: false,
  });

  const maxRange = Math.max(...storeData.map((item) => item.price));
  const minRange = Math.min(...storeData.map((item) => item.price));
  const [price, setPrice] = useState<number[]>([minRange, maxRange]);
  const [brands, setBrands] = useState<string[]>([]);

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setBrands([...brands, e.target.value]);
    } else {
      setBrands(brands.filter((brand) => brand !== e.target.value));
    }
  };

  const handleApply = () => {
    const filtered = storeData.filter((item) => {
      if (!brands.length && item.price <= price[1] && item.price >= price[0]) return item;
      else if (brands.includes(item.brand) && item.price <= price[1] && item.price >= price[0]) return item;
    });

    setStoreItems(filtered);
    setIsOpen(false);
  };

  const handleReset = () => {
    setPrice([minRange, maxRange]);
    setBrands([]);
    setStoreItems(storeData);
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      p={2}
    >
      <Container>
        <Button
          sx={{
            minHeight: 0,
            minWidth: 0,
            padding: 0,
            color: "primary.main",
            marginRight: "auto",
            fontWeight: 400,

            marginY: 2,
          }}
          onClick={handleReset}
        >
          Reset filter
        </Button>

        <Box display={"flex"} justifyContent="space-between" alignContent={"center"}>
          <Typography fontWeight={600}>Price range, $</Typography>{" "}
          <Button
            sx={{
              color: "primary.main",
              fontWeight: 500,
              background: "white",
              border: "1px solid #DEE2E7",
            }}
            variant="outlined"
            onClick={handleApply}
          >
            Apply
          </Button>
        </Box>

        <RangeSlider price={price} setPrice={setPrice} maxRange={maxRange} minRange={minRange} />
        <Divider sx={{ bgcolor: "success.light" }} />

        <Box mt={2} display={"flex"} justifyContent="space-between">
          <Typography fontWeight={600}>Brands</Typography>{" "}
          <Button
            sx={{
              color: "primary.main",
              fontWeight: 500,
              background: "white",
              border: "1px solid #DEE2E7",
            }}
            variant="outlined"
            onClick={handleApply}
          >
            Apply
          </Button>
        </Box>
        <Box mt={1}>
          <FormGroup>
            {brandsData &&
              brandsData.map((brand: string, i: number) => {
                return (
                  <FormControlLabel
                    key={i}
                    control={
                      <Checkbox
                        sx={{ marginLeft: "auto" }}
                        value={brand}
                        checked={brands.includes(brand)}
                        onChange={handleChange}
                      />
                    }
                    label={<Typography fontSize={16}>{brand}</Typography>}
                    labelPlacement="start"
                    sx={{ margin: 0 }}
                  />
                );
              })}
          </FormGroup>
        </Box>

        <List></List>
      </Container>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"top"}>
        <Drawer
          sx={{
            "& .MuiDrawer-root": {
              position: "absolute",
              top: 20,
            },
            "& .MuiPaper-root": {
              position: "absolute",
            },
          }}
          anchor={"top"}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          {list("top")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
