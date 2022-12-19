import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Product from "./pages/Product/Product";
import Category from "./pages/Category/Category";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "./theme/theme";
import FormProduct from "./pages/Product/FormProduct";
import InputProduct from "./pages/Product/InputProduct";
import EditProduct from "./pages/Product/EditProduct";


const HomeAdmin = () => {
  const mode = useSelector((state) => state.globalSlice.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/*" element={<Navigate to="/admin/products" />} />
          <Route path="/admin/*" element={<Layout />}>
            <Route path="products" element={<Product />} />
            <Route path="category" element={<Category />} />
            <Route path="add_product" element={<InputProduct />} />
            <Route path="edit_product/:idProduct" element={<EditProduct />} />



          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default HomeAdmin;
