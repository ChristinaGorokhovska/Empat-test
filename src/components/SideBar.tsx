import { Box, Button, Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { IListItem } from "./ListItem";
import RangeSlider from "./RangeSlider";
import storeData from "../data/items.json";
const brandsData = ["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"];

export default function SideBar({
  storeItems,
  setStoreItems,
}: {
  storeItems: IListItem[];
  setStoreItems: React.Dispatch<React.SetStateAction<IListItem[]>>;
}) {
  const maxRange = Math.max(...storeData.map((item) => item.price));
  const minRange = Math.min(...storeData.map((item) => item.price));
  const [price, setPrice] = useState<number[]>([minRange, maxRange]);
  const [brands, setBrands] = useState<string[]>([]);

  const handleApply = () => {
    const filtered = storeData.filter((item) => {
      if (!brands.length && item.price <= price[1] && item.price >= price[0]) return item;
      else if (brands.includes(item.brand) && item.price <= price[1] && item.price >= price[0]) return item;
    });

    setStoreItems(filtered);
  };

  const handleReset = () => {
    setPrice([minRange, maxRange]);
    setBrands([]);
    setStoreItems(storeData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setBrands([...brands, e.target.value]);
    } else {
      setBrands(brands.filter((brand) => brand !== e.target.value));
    }
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "20%" }}>
      <Box pb={3} sx={{ borderBottom: "1px solid #DEE2E7" }}>
        <Typography fontSize={16} fontWeight={600} mb={1}>
          Brands
        </Typography>
        <FormGroup>
          {brandsData &&
            brandsData.map((brand: string, i: number) => {
              return (
                <FormControlLabel
                  key={i}
                  control={<Checkbox value={brand} checked={brands.includes(brand)} onChange={handleChange} />}
                  label={<Typography fontSize={16}>{brand}</Typography>}
                />
              );
            })}
        </FormGroup>
      </Box>

      <Box>
        <Typography mt={2} fontWeight={600} fontSize={16}>
          Price range
        </Typography>
        <RangeSlider price={price} setPrice={setPrice} maxRange={maxRange} minRange={minRange} />
      </Box>

      <Box textAlign={"center"} mt={3}>
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

      <Button
        sx={{
          minHeight: 0,
          minWidth: 0,
          padding: 0,
          color: "primary.main",
          marginRight: "auto",
          fontWeight: 400,

          marginTop: 4,
        }}
        onClick={handleReset}
      >
        Reset filter
      </Button>
    </Box>
  );
}
