import React, { useEffect } from "react";

import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsApi } from "../../../redux/slices/productSlice";
import "./product.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

// ['id', 'name', 'price', 'image', 'description', 'status_number', 'createdAt', 'updatedAt', 'category_id', 'Category']
// https://mui.com/x/react-data-grid/column-definition/

export default function Product() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const listProduct = useSelector((state) => state.product.products);

  const columns = [
    {
      renderHeader: (params) => <strong>{params.colDef.headerName} </strong>,
      field: "id",
      headerName: "ID",
      width: 130,
    },
    {
      renderHeader: (params) => <strong>{params.colDef.headerName} </strong>,
      field: "image",
      headerName: "Image",
      width: 150,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <img className="img__product--admin" src={params.value} alt="product" />
      ),
    },
    {
      renderHeader: (params) => <strong>{params.colDef.headerName} </strong>,
      field: "name",
      headerName: "Name Product",
      width: 300,
    },
    {
      renderHeader: (params) => <strong>{params.colDef.headerName} </strong>,
      field: "price",
      headerName: "Price",
      width: 130,
      type: "number",
    },

    {
      renderHeader: (params) => <strong>{params.colDef.headerName} </strong>,
      field: "status_number",
      headerName: "Status Product",
      // type: "boolean",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueFormatter: (params) => {
        const statusProduct = params.value
          ? "Stocking"
          : "Temporarily out of stock";
        return statusProduct;
      },
    },

    {
      renderHeader: (params) => <strong>{params.colDef.headerName} </strong>,
      field: "action",
      headerName: "Action",
      width: 130,
      sortable: false,
      filterable: false,
      renderCell: (params) => {
        const product = params.row;

        return (
          <>
            <Button
              variant="contained"
              color="warning"
              onClick={() => {
                navigate(`/admin/edit_product/${product.id}`, {
                  state: product,
                });
              }}
            >
              Edit
            </Button>
          </>
        );
      },
    },
  ];

  const rows = listProduct.length > 0 ? listProduct : [];

  return (
    <>
      <Button
        sx={{ ml: 2, mb: 2 }}
        variant="contained"
        onClick={() => {
          navigate("/admin/add_product");
        }}
      >
        Add Product
      </Button>

      <div style={{ height: "78vh", width: "100%" }}>
        <DataGrid
          rowHeight={80}
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </>
  );
}
