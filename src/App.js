import "./App.css";
import Footer from "./Compontents/Footer/Footer";
import Header from "./Compontents/Header/Header";
import Main from "./Compontents/Main/Main";
import Selected from "./Compontents/Selected/Selected";

import data from "./data.json";
import { useState } from "react";
export default function App() {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  function handleModal(beast) {
    setModal(!modal);
    setModalContent(beast);
  }

  function closeModal() {
    setModal(!modal);
    setModalContent({});
  }

  return (
    <div className="App">
      <Header />
      <Main data={data} handleModal={handleModal} />
      {modal && (
        <Selected modalContent={modalContent} closeModal={closeModal} />
      )}
      <Footer />
    </div>
  );
}
