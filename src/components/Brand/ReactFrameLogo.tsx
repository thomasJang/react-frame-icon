import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const ReactFrameLogo: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 25 24"
    role="rfi-icon"
    data-rfi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.96255 11.9524C8.96255 18.0012 7.18007 22.9048 4.98127 22.9048C2.78248 22.9048 1 18.0012 1 11.9524C1 5.90355 2.78248 1 4.98127 1C7.18007 1 8.96255 5.90355 8.96255 11.9524ZM7.79159 11.9524C7.79159 14.8735 7.35923 17.4655 6.6981 19.2842C6.36586 20.1982 5.99822 20.8546 5.64918 21.2608C5.29798 21.6694 5.06898 21.7143 4.98127 21.7143C4.89356 21.7143 4.66456 21.6694 4.31337 21.2608C3.96433 20.8546 3.59669 20.1982 3.26444 19.2842C2.60332 17.4655 2.17096 14.8735 2.17096 11.9524C2.17096 9.03126 2.60332 6.43929 3.26444 4.62056C3.59669 3.70656 3.96433 3.05012 4.31337 2.64399C4.66456 2.23535 4.89356 2.19048 4.98127 2.19048C5.06898 2.19048 5.29798 2.23535 5.64918 2.64399C5.99822 3.05012 6.36586 3.70656 6.6981 4.62056C7.35923 6.43929 7.79159 9.03126 7.79159 11.9524Z"
      fill="black"
    />
    <path
      d="M8.76302 3.84472C8.64553 3.52151 8.5189 3.21029 8.38293 2.91439C9.1794 2.17493 9.96784 1.84138 10.6655 2.03144C12.7566 2.60109 13.2406 7.65869 11.7464 13.3279C10.9783 16.2425 9.83685 18.7512 8.62485 20.4238C8.67224 20.3044 8.71829 20.1831 8.76302 20.06C9.2136 18.8205 9.55694 17.3289 9.76488 15.683C10.0792 14.8554 10.3668 13.9627 10.6153 13.0198C11.3357 10.2866 11.5638 7.75148 11.385 5.8826C11.2951 4.94349 11.1086 4.23811 10.8793 3.77191C10.6493 3.30405 10.4456 3.204 10.3625 3.18135C10.2793 3.1587 10.0537 3.14181 9.6244 3.43005C9.3901 3.58735 9.13161 3.81329 8.85704 4.1116C8.82624 4.0214 8.7949 3.93243 8.76302 3.84472Z"
      fill="black"
    />
    <path
      d="M9.99574 20.5031C11.4469 19.1907 12.9797 17.2457 14.3068 14.9088C17.1934 9.82588 18.0135 4.81327 16.1386 3.71279C15.4602 3.31455 14.5217 3.48322 13.4635 4.10153C13.5604 4.50135 13.6333 4.9241 13.685 5.36225C14.0975 5.08321 14.4652 4.89546 14.7769 4.78979C15.265 4.62434 15.4786 4.70001 15.5531 4.74378C15.6277 4.78754 15.799 4.93777 15.9021 5.45022C16.0048 5.96085 16.0054 6.69128 15.8532 7.62204C15.5501 9.47429 14.6844 11.863 13.2928 14.3135C12.8865 15.0289 12.4623 15.7023 12.0298 16.3268C11.4395 17.9215 10.7436 19.3441 9.99574 20.5031Z"
      fill="black"
    />
    <path
      d="M15.9248 16.5486C14.1863 18.444 12.343 19.9436 10.69 20.8983C11.8188 19.8278 12.9607 18.4362 14.0137 16.8242C14.3667 16.4803 14.7192 16.1175 15.0684 15.7367C16.9666 13.6673 18.3386 11.5378 19.0438 9.80231C19.3981 8.93024 19.5591 8.21838 19.572 7.69734C19.5849 7.17445 19.4513 6.9889 19.3883 6.92921C19.3253 6.86952 19.134 6.74693 18.6218 6.79652C18.4151 6.81653 18.1795 6.86335 17.917 6.93988C17.9574 6.51321 17.9716 6.09849 17.9551 5.70221C18.9122 5.48762 19.6913 5.58867 20.1869 6.05855C21.7702 7.5596 19.862 12.2562 15.9248 16.5486Z"
      fill="black"
    />
    <path
      d="M17.11 18.5139C15.7767 19.3942 14.4404 20.1151 13.1792 20.6591C14.3838 19.7521 15.6111 18.6362 16.7812 17.3605C16.8234 17.3145 16.8655 17.2684 16.9073 17.2222C19.0351 15.7575 20.7136 14.1505 21.7417 12.7351C22.293 11.9761 22.6186 11.3249 22.7551 10.8225C22.892 10.3184 22.8065 10.1055 22.7596 10.0321C22.7128 9.95865 22.5562 9.79264 22.0475 9.71478C21.9064 9.6932 21.749 9.68053 21.5758 9.67786C21.6971 9.276 21.7893 8.88081 21.8467 8.4975C22.7333 8.55461 23.3963 8.84298 23.7417 9.38368C24.9208 11.2296 21.9517 15.3173 17.11 18.5139Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.96255 11.9524C8.96255 18.0012 7.18007 22.9048 4.98127 22.9048C2.78248 22.9048 1 18.0012 1 11.9524C1 5.90355 2.78248 1 4.98127 1C7.18007 1 8.96255 5.90355 8.96255 11.9524ZM7.79159 11.9524C7.79159 14.8735 7.35923 17.4655 6.6981 19.2842C6.36586 20.1982 5.99822 20.8546 5.64918 21.2608C5.29798 21.6694 5.06898 21.7143 4.98127 21.7143C4.89356 21.7143 4.66456 21.6694 4.31337 21.2608C3.96433 20.8546 3.59669 20.1982 3.26444 19.2842C2.60332 17.4655 2.17096 14.8735 2.17096 11.9524C2.17096 9.03126 2.60332 6.43929 3.26444 4.62056C3.59669 3.70656 3.96433 3.05012 4.31337 2.64399C4.66456 2.23535 4.89356 2.19048 4.98127 2.19048C5.06898 2.19048 5.29798 2.23535 5.64918 2.64399C5.99822 3.05012 6.36586 3.70656 6.6981 4.62056C7.35923 6.43929 7.79159 9.03126 7.79159 11.9524Z"
      stroke="black"
      strokeWidth="0.3"
    />
    <path
      d="M8.76302 3.84472C8.64553 3.52151 8.5189 3.21029 8.38293 2.91439C9.1794 2.17493 9.96784 1.84138 10.6655 2.03144C12.7566 2.60109 13.2406 7.65869 11.7464 13.3279C10.9783 16.2425 9.83685 18.7512 8.62485 20.4238C8.67224 20.3044 8.71829 20.1831 8.76302 20.06C9.2136 18.8205 9.55694 17.3289 9.76488 15.683C10.0792 14.8554 10.3668 13.9627 10.6153 13.0198C11.3357 10.2866 11.5638 7.75148 11.385 5.8826C11.2951 4.94349 11.1086 4.23811 10.8793 3.77191C10.6493 3.30405 10.4456 3.204 10.3625 3.18135C10.2793 3.1587 10.0537 3.14181 9.6244 3.43005C9.3901 3.58735 9.13161 3.81329 8.85704 4.1116C8.82624 4.0214 8.7949 3.93243 8.76302 3.84472Z"
      stroke="black"
      strokeWidth="0.3"
    />
    <path
      d="M9.99574 20.5031C11.4469 19.1907 12.9797 17.2457 14.3068 14.9088C17.1934 9.82588 18.0135 4.81327 16.1386 3.71279C15.4602 3.31455 14.5217 3.48322 13.4635 4.10153C13.5604 4.50135 13.6333 4.9241 13.685 5.36225C14.0975 5.08321 14.4652 4.89546 14.7769 4.78979C15.265 4.62434 15.4786 4.70001 15.5531 4.74378C15.6277 4.78754 15.799 4.93777 15.9021 5.45022C16.0048 5.96085 16.0054 6.69128 15.8532 7.62204C15.5501 9.47429 14.6844 11.863 13.2928 14.3135C12.8865 15.0289 12.4623 15.7023 12.0298 16.3268C11.4395 17.9215 10.7436 19.3441 9.99574 20.5031Z"
      stroke="black"
      strokeWidth="0.3"
    />
    <path
      d="M15.9248 16.5486C14.1863 18.444 12.343 19.9436 10.69 20.8983C11.8188 19.8278 12.9607 18.4362 14.0137 16.8242C14.3667 16.4803 14.7192 16.1175 15.0684 15.7367C16.9666 13.6673 18.3386 11.5378 19.0438 9.80231C19.3981 8.93024 19.5591 8.21838 19.572 7.69734C19.5849 7.17445 19.4513 6.9889 19.3883 6.92921C19.3253 6.86952 19.134 6.74693 18.6218 6.79652C18.4151 6.81653 18.1795 6.86335 17.917 6.93988C17.9574 6.51321 17.9716 6.09849 17.9551 5.70221C18.9122 5.48762 19.6913 5.58867 20.1869 6.05855C21.7702 7.5596 19.862 12.2562 15.9248 16.5486Z"
      stroke="black"
      strokeWidth="0.3"
    />
    <path
      d="M17.11 18.5139C15.7767 19.3942 14.4404 20.1151 13.1792 20.6591C14.3838 19.7521 15.6111 18.6362 16.7812 17.3605C16.8234 17.3145 16.8655 17.2684 16.9073 17.2222C19.0351 15.7575 20.7136 14.1505 21.7417 12.7351C22.293 11.9761 22.6186 11.3249 22.7551 10.8225C22.892 10.3184 22.8065 10.1055 22.7596 10.0321C22.7128 9.95865 22.5562 9.79264 22.0475 9.71478C21.9064 9.6932 21.749 9.68053 21.5758 9.67786C21.6971 9.276 21.7893 8.88081 21.8467 8.4975C22.7333 8.55461 23.3963 8.84298 23.7417 9.38368C24.9208 11.2296 21.9517 15.3173 17.11 18.5139Z"
      stroke="black"
      strokeWidth="0.3"
    />
  </SvgComponent>
);