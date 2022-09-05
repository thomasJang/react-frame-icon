import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const RFIReload: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 24 24"
    role="rfi-icon"
    data-rfi-color-controllable="true"
    {...props}
  >
    <g clipPath="url(#clip0_111_15)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0075 22C14.2037 22.0065 16.3276 21.2158 17.9816 19.775C19.6357 18.3341 20.7064 16.3417 20.9922 14.1702C21.0571 13.6774 20.7102 13.2254 20.2174 13.1605C19.7246 13.0956 19.2725 13.4425 19.2076 13.9353C18.9792 15.6706 18.1234 17.2643 16.7993 18.4178C15.4751 19.5713 13.7735 20.2052 12.0128 20.2C10.2522 20.1947 8.55437 19.5507 7.23716 18.3893C5.92004 17.228 5.07382 15.6293 4.85582 13.8926C4.63782 12.156 5.06281 10.3995 6.05189 8.95177C7.04104 7.50391 8.52685 6.46378 10.2318 6.0272C11.9368 5.59061 13.7432 5.78782 15.3124 6.58159C16.4631 7.16365 17.4281 8.03704 18.1175 9.10281H15.0159C14.5188 9.10281 14.1159 9.50575 14.1159 10.0028C14.1159 10.4999 14.5188 10.9028 15.0159 10.9028H19.5711C19.5848 10.9031 19.5986 10.9031 19.6125 10.9028H20.0999C20.597 10.9028 20.9999 10.4999 20.9999 10.0028V4.94034C20.9999 4.44329 20.597 4.04035 20.0999 4.04035C19.6028 4.04035 19.1999 4.44329 19.1999 4.94034V7.51857C18.3844 6.46072 17.3367 5.58841 16.1249 4.9754C14.1662 3.98465 11.9125 3.73877 9.78531 4.28347C7.65804 4.82819 5.80213 6.12647 4.56563 7.93639C3.32906 9.7464 2.79705 11.9437 3.06985 14.1168C3.34264 16.2899 4.40136 18.2887 6.04675 19.7395C7.69204 21.1901 9.81121 21.9934 12.0075 22Z"
        fill="#C7CED9"
      />
    </g>
    <defs>
      <clipPath id="clip0_111_15">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </SvgComponent>
);
