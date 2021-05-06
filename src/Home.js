import React from "react";
import { useGlobalContext } from "./contest";

function Home() {
  const { openSidebar } = useGlobalContext();
  return (
    <div>
      <button onClick={openSidebar}>open sidebar</button>{" "}
    </div>
  );
}

export default Home;
