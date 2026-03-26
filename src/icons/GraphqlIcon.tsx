import {FC, memo} from 'react';

const Icon: FC<Icon> = ({width = 64, height = 64, className}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      className={className}>
      <path
        fill="none"
        stroke="#f5bde6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 1.5a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1m-5.5 3a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1m0 7a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1m11 0a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1m-5.5 3a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1m5.5-10a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1m-12 1v5m11-5v5m-10 1h9m-6 2.5l-3-1.5m6 1.5l3-1.5m-9-2l4-8m5 8l-4-8m-5 1l3-1.5m3 0l3 1.5"></path>
    </svg>
  );
};

export default memo(Icon);
