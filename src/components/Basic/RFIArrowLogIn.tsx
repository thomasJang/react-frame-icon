import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const RFIArrowLogIn: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 24 24"
    role="rfi-icon"
    data-rfi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 5.875C5 5.39175 5.39175 5 5.875 5H12C12.4832 5 12.875 5.39175 12.875 5.875C12.875 6.35825 12.4832 6.75 12 6.75H6.75V17.25H12C12.4832 17.25 12.875 17.6418 12.875 18.125C12.875 18.6082 12.4832 19 12 19H5.875C5.39175 19 5 18.6082 5 18.125V5.875ZM13.4937 8.75628C13.8354 9.09799 13.8354 9.65201 13.4937 9.99372L12.3624 11.125H18.125C18.6082 11.125 19 11.5168 19 12C19 12.4832 18.6082 12.875 18.125 12.875H12.3624L13.4937 14.0063C13.8354 14.348 13.8354 14.902 13.4937 15.2437C13.152 15.5854 12.598 15.5854 12.2563 15.2437L9.63128 12.6187C9.28957 12.277 9.28957 11.723 9.63128 11.3813L12.2563 8.75628C12.598 8.41457 13.152 8.41457 13.4937 8.75628Z"
      fill="#C7CED9"
    />
  </SvgComponent>
);