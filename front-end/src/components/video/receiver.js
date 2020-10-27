import React, { forwardRef } from "react";
import styled from "styled-components";

const StyledVideo = styled.video`
  width: 640px;
  height: 320px;
`;

const Receiver = ({ videoRef }) => {
  return <StyledVideo ref={videoRef} controls={true} />;
};

export default Receiver;
