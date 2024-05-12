import React from "react";
import { Header, Footer, About } from "./components";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
{/* calling the components is fixed but we can automatically do nesting inside react-router dom  */}
{/* Thats why we could do 
Route - Layout and inside it we added Home, Contact Us and other components which lie between header and Footer */}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
