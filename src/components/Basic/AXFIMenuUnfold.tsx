import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const AXFIMenuUnfold: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 24 24"
    role="axf-icon"
    data-axf-i-color-controllable="true"
    {...props}
  >
    <path
      d="M20.8632 5.35782L8.35782 5.35782C7.73256 5.35782 7.22097 5.8694 7.22097 6.49467C7.22097 7.11994 7.73256 7.63152 8.35782 7.63152L20.8632 7.63152C21.4884 7.63152 22 7.11994 22 6.49467C22 5.8694 21.4884 5.35782 20.8632 5.35782ZM20.8632 11.0421L11.7684 11.0421C11.1431 11.0421 10.6315 11.5536 10.6315 12.1789C10.6315 12.8042 11.1431 13.3158 11.7684 13.3158L20.8632 13.3158C21.4884 13.3158 22 12.8042 22 12.1789C22 11.5536 21.4884 11.0421 20.8632 11.0421ZM22 17.8632C22 17.2379 21.4884 16.7263 20.8632 16.7263L8.35782 16.7263C7.73256 16.7263 7.22097 17.2379 7.22097 17.8632C7.22097 18.4884 7.73256 19 8.35782 19L20.8632 19C21.4884 19 22 18.4884 22 17.8632ZM2.33253 8.90479L5.60665 12.1789L2.33253 15.453C1.88916 15.8964 1.88916 16.6126 2.33253 17.056C2.7759 17.4994 3.49211 17.4994 3.93548 17.056L8.01677 12.9747C8.46014 12.5313 8.46014 11.8151 8.01677 11.3717L3.93548 7.29046C3.49211 6.84709 2.7759 6.84709 2.33253 7.29046C1.90053 7.73383 1.88916 8.46142 2.33253 8.90479Z"
      fill="#C7CED9"
    />
  </SvgComponent>
);
