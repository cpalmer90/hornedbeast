import React from "react";
import "./Main.css";
import HornedBeast from "../Horned Beast/HornedBeast";

export default function Main({ data, handleModal }) {
  return (
    <main>
      {data.map((beast, key) => {
        return (
          <HornedBeast
            key={beast._id}
            beastObject={beast}
            title={beast.title}
            imgUrl={beast.image_url}
            description={beast.description}
            handleModal={handleModal}
          />
        );
      })}
    </main>
  );
}
