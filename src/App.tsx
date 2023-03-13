import { Routes, Route } from "react-router-dom";
import Item from "./pages/Item";
import Store from "./pages/Store";
import "./css/style.min.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import ItemType from "./pages/ItemType";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/:categoryName/:itemType/:id" element={<Item />}></Route>
        <Route path="/:categoryName/:itemType" element={<ItemType />}></Route>
        <Route path="*" element={<Store />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
