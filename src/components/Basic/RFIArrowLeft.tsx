import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const RFIArrowLeft: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 24 24"
    role="rfi-icon"
    data-rfi-color-controllable="true"
    {...props}
  >
    <path
      d="M15.8832 16.8546L11.0224 11.9937L15.8832 7.13289C16.3718 6.6443 16.3718 5.85503 15.8832 5.36644C15.3946 4.87785 14.6054 4.87785 14.1168 5.36644L8.36644 11.1168C7.87785 11.6054 7.87785 12.3946 8.36644 12.8832L14.1168 18.6336C14.6054 19.1221 15.3946 19.1221 15.8832 18.6336C16.3593 18.145 16.3718 17.3432 15.8832 16.8546Z"
      fill="#C7CED9"
    />
  </SvgComponent>
);
