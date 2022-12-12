import React from "react";
import Header from "../userSide/components/Header/Header";
import Footer from "../userSide/components/Footer/Footer";
import Routers from "../routers/Routers";

const Layout = () => {
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

export default Layout;
