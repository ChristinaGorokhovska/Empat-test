import { Container } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ItemDetails from "../components/ItemDetails";
import LinksOrder from "../components/LinksOrder";

export default function Item() {
  const { itemType, id } = useParams();
  return (
    <>
      <Header />
      <Container>
        <LinksOrder itemType={itemType || ""} />
        <ItemDetails id={id || ""} />
      </Container>
    </>
  );
}
