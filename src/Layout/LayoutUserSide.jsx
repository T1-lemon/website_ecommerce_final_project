import React, { useEffect } from "react";
import Header from "../userSide/components/Header/Header";
import Footer from "../userSide/components/Footer/Footer";
import Routers from "../routers/RoutersUserSide";
import { useDispatch } from "react-redux";
import { getAllProductsApi } from "../redux/slices/productSlice";


const LayoutUserSide = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchGetAllProductsApi = async () => {
      await dispatch(getAllProductsApi());
    }

    fetchGetAllProductsApi()
  }, [])

  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default LayoutUserSide;
