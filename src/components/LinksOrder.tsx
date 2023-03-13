import { Box, Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { useStoreContext } from "../context/storeContext";
import { useNavigate } from "react-router-dom";

export default function LinksOrder({ itemType }: { itemType: string }) {
  const { category } = useStoreContext();

  const theme = useTheme();
  let isSm = useMediaQuery(theme.breakpoints.down("sm"));

  let navigate = useNavigate();

  return (
    <>
      <Container>
        {isSm ? (
          <Box my={3} display={"flex"} alignContent={"center"}>
            <Box
              onClick={() => {
                navigate(`/${category}`);
              }}
              component={"img"}
              src="/imgs/icons/arrow_back.svg"
              alt="back"
            ></Box>

            {category && (
              <Box sx={{ display: "flex" }}>
                <Link style={{ textDecoration: "none" }} to={`/${category}`}>
                  <Typography component={"span"} ml={2} color="info.main" fontSize={18} fontWeight={600}>
                    {category}
                  </Typography>
                </Link>
              </Box>
            )}
          </Box>
        ) : (
          <Box my={3}>
            <Box sx={{ display: "flex", color: "secondary.light" }}>
              <Link style={{ textDecoration: "none" }} to={"/store"}>
                <Typography
                  style={{ textDecoration: "none" }}
                  component={"span"}
                  mr={1}
                  color={"secondary.light"}
                  fontSize={16}
                >
                  Home
                </Typography>
              </Link>

              {category && (
                <Box sx={{ display: "flex" }}>
                  <Typography component={"span"}>&gt;</Typography>
                  <Link style={{ textDecoration: "none" }} to={`/${category}`}>
                    <Typography component={"span"} color={"secondary.light"} mr={1} ml={2} fontSize={16}>
                      {category}
                    </Typography>
                  </Link>
                </Box>
              )}

              {itemType && (
                <Box sx={{ display: "flex" }}>
                  <Typography component={"span"}>&gt;</Typography>
                  <Link style={{ textDecoration: "none" }} to={`/${category}/${itemType}`}>
                    <Typography component={"span"} color={"secondary.light"} ml={2} fontSize={16}>
                      {itemType}
                    </Typography>
                  </Link>
                </Box>
              )}
            </Box>
          </Box>
        )}
      </Container>
    </>
  );
}
