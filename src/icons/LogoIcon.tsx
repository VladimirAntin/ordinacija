import {FC, memo} from 'react';

// DentaVita — tooth shape logo (always white)
const LogoIcon: FC<Icon> = ({width = 40, height = 40, className}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}>
    <path
      d="M20 4C15.5 4 12 6.5 10 9C8 11.5 7 14 7 17C7 20 7.5 23 8.5 25.5C9.5 28 11 30 12 32C13 34 13.5 36 14 36C14.5 36 15 34 15.5 30.5C16 27 16.5 25 17.5 24C18.2 23.2 19.1 23 20 23C20.9 23 21.8 23.2 22.5 24C23.5 25 24 27 24.5 30.5C25 34 25.5 36 26 36C26.5 36 27 34 28 32C29 30 30.5 28 31.5 25.5C32.5 23 33 20 33 17C33 14 32 11.5 30 9C28 6.5 24.5 4 20 4Z"
      fill="white"
    />
    <path
      d="M15 8C14 9.5 13 12 13 14.5"
      stroke="rgba(255,255,255,0.45)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default memo(LogoIcon);
