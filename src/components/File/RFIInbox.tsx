import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const RFIInbox: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 24 24"
    role="rfi-icon"
    data-rfi-color-controllable="true"
    {...props}
  >
    <path
      d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 5V14H15.44C15.08 14 14.76 14.19 14.58 14.5C14.06 15.4 13.11 16 12 16C10.89 16 9.94 15.4 9.42 14.5C9.24 14.19 8.91 14 8.56 14H5V5H19Z"
      fill="#C7CED9"
    />
  </SvgComponent>
);