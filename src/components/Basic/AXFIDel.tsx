import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const AXFIDel: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 24 24"
    role="axf-icon"
    data-axf-i-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.14286 3.71429C4.35388 3.71429 3.71429 4.35388 3.71429 5.14286V18.8571C3.71429 19.6461 4.35388 20.2857 5.14286 20.2857H18.8571C19.6461 20.2857 20.2857 19.6461 20.2857 18.8571V5.14286C20.2857 4.35388 19.6461 3.71429 18.8571 3.71429H5.14286ZM2 5.14286C2 3.4071 3.4071 2 5.14286 2H18.8571C20.5929 2 22 3.40711 22 5.14286V18.8571C22 20.5929 20.5929 22 18.8571 22H5.14286C3.40711 22 2 20.5929 2 18.8571V5.14286ZM9.10819 9.10819C9.44293 8.77346 9.98564 8.77346 10.3204 9.10819L12 10.7878L13.6796 9.10819C14.0144 8.77346 14.5571 8.77346 14.8918 9.10819C15.2265 9.44293 15.2265 9.98564 14.8918 10.3204L13.2122 12L14.8918 13.6796C15.2265 14.0144 15.2265 14.5571 14.8918 14.8918C14.5571 15.2265 14.0144 15.2265 13.6796 14.8918L12 13.2122L10.3204 14.8918C9.98564 15.2265 9.44293 15.2265 9.10819 14.8918C8.77346 14.5571 8.77346 14.0144 9.10819 13.6796L10.7878 12L9.10819 10.3204C8.77346 9.98564 8.77346 9.44293 9.10819 9.10819Z"
      fill="#C7CED9"
    />
  </SvgComponent>
);
