import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const RFIRevert: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 24 24"
    role="rfi-icon"
    data-rfi-color-controllable="true"
    {...props}
  >
    <g clipPath="url(#clip0_111_18)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9925 22C9.7963 22.0065 7.67236 21.2158 6.0184 19.775C4.36434 18.3341 3.29364 16.3417 3.0078 14.1702C2.94293 13.6774 3.28984 13.2254 3.78264 13.1605C4.27544 13.0956 4.72752 13.4425 4.7924 13.9353C5.02082 15.6706 5.87664 17.2643 7.20072 18.4178C8.52489 19.5713 10.2265 20.2052 11.9872 20.2C13.7478 20.1947 15.4456 19.5507 16.7628 18.3893C18.08 17.228 18.9262 15.6293 19.1442 13.8926C19.3622 12.156 18.9372 10.3995 17.9481 8.95177C16.959 7.50391 15.4732 6.46378 13.7682 6.0272C12.0632 5.59061 10.2568 5.78782 8.68762 6.58159C7.53694 7.16365 6.57193 8.03704 5.88254 9.10281H8.98412C9.48118 9.10281 9.88412 9.50575 9.88412 10.0028C9.88412 10.4999 9.48118 10.9028 8.98412 10.9028H4.42892C4.41515 10.9031 4.40135 10.9031 4.38753 10.9028H3.9001C3.40304 10.9028 3.0001 10.4999 3.0001 10.0028V4.94034C3.0001 4.44329 3.40304 4.04035 3.9001 4.04035C4.39715 4.04035 4.80009 4.44329 4.80009 4.94034V7.51857C5.61559 6.46072 6.66329 5.58841 7.87514 4.9754C9.83375 3.98465 12.0875 3.73877 14.2147 4.28347C16.342 4.82819 18.1979 6.12647 19.4344 7.93639C20.6709 9.7464 21.203 11.9437 20.9302 14.1168C20.6574 16.2899 19.5986 18.2887 17.9533 19.7395C16.308 21.1901 14.1888 21.9934 11.9925 22Z"
        fill="#C7CED9"
      />
    </g>
    <defs>
      <clipPath id="clip0_111_18">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </SvgComponent>
);
