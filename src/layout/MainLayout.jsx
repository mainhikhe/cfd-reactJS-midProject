import React from "react";
import Loading from "../components/Loading";
import Overlay from "../components/Overlay";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import ModalLogin from "../components/ModalLogin";
import { Routes, Route, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      {/* Page Effect */}
      <Loading />
      <Overlay />

      {/* Header */}
      <Header />

      {/* Nav */}
      <Nav />

      {/* Main */}
      <Outlet />

      {/* Footer */}
      <Footer />

      {/* Modal */}
      <Modal />
      <ModalLogin />
    </>
  );
};

export default MainLayout;
