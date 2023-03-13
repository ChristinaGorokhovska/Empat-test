import { Box, Container, Hidden, Typography } from "@mui/material";
import React from "react";

export default function Header() {
  return (
    <Hidden smDown>
      <Box sx={{ backgroundColor: "white" }}>
        <Container>
          <Box py={2} sx={{ display: "flex", alignItems: "center" }}>
            <div className="">
              <img src="/imgs/icons/logo-symbol.svg" alt="logo" />
            </div>

            <Typography ml={2} component={"h2"} color="primary.light" fontWeight={600} fontSize={20}>
              Frontend task |{" "}
              <Typography component={"span"} fontWeight={600} fontSize={20} color={"primary.main"}>
                Christina Gorokhovska
              </Typography>
            </Typography>
          </Box>
        </Container>
      </Box>
    </Hidden>
  );
}
