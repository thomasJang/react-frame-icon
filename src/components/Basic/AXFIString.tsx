import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const AXFIString: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 24 24"
    role="axf-icon"
    data-axf-i-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 6C3 5.44772 3.44772 5 4 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H4C3.44772 7 3 6.55228 3 6ZM3 10.226C3 9.6737 3.44772 9.22599 4 9.22599H14.625C15.1773 9.22599 15.625 9.6737 15.625 10.226C15.625 10.7783 15.1773 11.226 14.625 11.226H4C3.44772 11.226 3 10.7783 3 10.226ZM3 14.452C3 13.8997 3.44772 13.452 4 13.452H21C21.5523 13.452 22 13.8997 22 14.452C22 15.0043 21.5523 15.452 21 15.452H4C3.44772 15.452 3 15.0043 3 14.452ZM3 18.678C3 18.1257 3.44772 17.678 4 17.678H14.625C15.1773 17.678 15.625 18.1257 15.625 18.678C15.625 19.2303 15.1773 19.678 14.625 19.678H4C3.44772 19.678 3 19.2303 3 18.678Z"
      fill="#C7CED9"
    />
  </SvgComponent>
);
