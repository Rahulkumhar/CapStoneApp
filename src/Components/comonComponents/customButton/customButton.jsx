import React from "react";

import { CustomButtonContainer } from "./customButton.style";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
