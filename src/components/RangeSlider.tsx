import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { FormHelperText, Grid, TextField, Typography } from "@mui/material";

const minDistance = 10;

export default function RangeSlider({
  price,
  setPrice,
  maxRange,
  minRange,
}: {
  price: number[];
  setPrice: React.Dispatch<React.SetStateAction<number[]>>;
  maxRange: number;
  minRange: number;
}) {
  const handleChange1 = (event: Event, newValue: number | number[], activeThumb: number) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setPrice([Math.min(newValue[0], price[1] - minDistance), price[1]]);
    } else {
      setPrice([price[0], Math.max(newValue[1], price[0] + minDistance)]);
    }
  };

  const handleMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice([+e.target.value, price[1]]);
  };

  const handleMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice([price[0], +e.target.value]);
  };

  return (
    <Grid container sx={{ fontSize: 16 }}>
      <Grid item sx={{ display: "flex", gap: 1 }} order={{ md: 2, sm: 1 }}>
        <Box>
          <FormHelperText component={"div"} id="outlined-min">
            <Typography color={"info.main"} fontSize={16}>
              Min
            </Typography>
          </FormHelperText>
          <TextField
            variant="outlined"
            inputProps={{ style: { fontSize: "16px" } }}
            value={price[0]}
            size="small"
            id="outlined-min"
            onChange={handleMin}
          />
        </Box>

        <Box
          sx={{
            fontSize: 16,
          }}
          mb={2}
        >
          <FormHelperText component={"div"} id="outlined-max">
            <Typography color={"info.main"} fontSize={16}>
              Max
            </Typography>
          </FormHelperText>
          <TextField
            variant="outlined"
            inputProps={{ style: { fontSize: "16px" } }}
            value={price[1]}
            size="small"
            id="outlined-max"
            onChange={handleMax}
          />
        </Box>
      </Grid>
      <Grid item sx={{ width: "100%" }} order={{ md: 1 }}>
        <Slider
          getAriaLabel={() => "Minimum distance"}
          value={price}
          onChange={handleChange1}
          valueLabelDisplay="auto"
          disableSwap
          max={maxRange}
          sx={{
            "& .MuiSlider-thumb": {
              color: "white",
            },
          }}
        />
      </Grid>
    </Grid>
  );
}
