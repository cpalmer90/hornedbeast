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
  const [beastData, setBeastData] = useState(data);

  function handleModal(beast) {
    setModal(!modal);
    setModalContent(beast);
  }

  function closeModal() {
    setModal(!modal);
    setModalContent({});
  }

  function handleBeasts(event) {
    let beastNum = parseInt(event.target.value);

    const filteredBeasts = data.filter((beast) => beast.horns === beastNum);

    event.target.value === ""
      ? setBeastData(data)
      : setBeastData(filteredBeasts);
  }

  return (
    <div className="App">
      <Header handleBeasts={handleBeasts} />
      <Main beastData={beastData} handleModal={handleModal} />
      {modal && (
        <Selected modalContent={modalContent} closeModal={closeModal} />
      )}
      <Footer />
    </div>
  );
}
