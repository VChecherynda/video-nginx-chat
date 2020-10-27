import React from "react";
import { v4 as uuidv4 } from "uuid";

import Button from "components/buttons/button";

const Main = ({ history }) => {
  const openRoom = () => {
    history.push(`/room/${uuidv4()}`);
  };

  return (
    <>
      <div>Main</div>
      <Button onClick={openRoom}>Open Room</Button>
    </>
  );
};

export default Main;
