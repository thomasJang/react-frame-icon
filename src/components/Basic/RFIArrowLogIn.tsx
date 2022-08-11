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
      d="M3 4.125C3 3.50368 3.50368 3 4.125 3H12C12.6213 3 13.125 3.50368 13.125 4.125C13.125 4.74632 12.6213 5.25 12 5.25H5.25V18.75H12C12.6213 18.75 13.125 19.2537 13.125 19.875C13.125 20.4963 12.6213 21 12 21H4.125C3.50368 21 3 20.4963 3 19.875V4.125ZM13.9205 7.8295C14.3598 8.26884 14.3598 8.98116 13.9205 9.4205L12.466 10.875H19.875C20.4963 10.875 21 11.3787 21 12C21 12.6213 20.4963 13.125 19.875 13.125H12.466L13.9205 14.5795C14.3598 15.0188 14.3598 15.7312 13.9205 16.1705C13.4812 16.6098 12.7688 16.6098 12.3295 16.1705L8.9545 12.7955C8.51516 12.3562 8.51516 11.6438 8.9545 11.2045L12.3295 7.8295C12.7688 7.39016 13.4812 7.39016 13.9205 7.8295Z"
      fill="#C7CED9"
    />
  </SvgComponent>
);
