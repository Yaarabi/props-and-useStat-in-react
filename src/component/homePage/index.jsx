import React from "react";
import "./style.css";
import Rass from "../Header/header";
import Foo from "../footer/footer";
import Main from "../Main/main";
export default function Lyaut() {
  return (
    <>
      <header>
        <Rass />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Foo />
      </footer>
    </>
  );
}
