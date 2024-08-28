import React from 'react';

const DefaultAvatar = ({ size = 40, color = "#ccc" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 30 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="12" fill={color} />
    <circle cx="12" cy="9" r="3" fill="white" />
    <path
      d="M12 12c-2.761 0-5 2.239-5 5v1h10v-1c0-2.761-2.239-5-5-5z"
      fill="white"
    />
  </svg>
);

export default DefaultAvatar;