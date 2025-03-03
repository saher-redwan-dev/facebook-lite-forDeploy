import React from "react";

export default function DotsSvg({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="-0.5 0 25 25"
      fill="none"
      className="need-invert"
      {...props}
    >
      <path
        {...props}
        d="M12 14.5C13.1046 14.5 14 13.6046 14 12.5C14 11.3954 13.1046 10.5 12 10.5C10.8954 10.5 10 11.3954 10 12.5C10 13.6046 10.8954 14.5 12 14.5Z"
        stroke="#000"
        stroke-miterlimit="10"
        // fill="var(--background-color)"
      />
      <path
        {...props}
        d="M19.5 14.5C20.6046 14.5 21.5 13.6046 21.5 12.5C21.5 11.3954 20.6046 10.5 19.5 10.5C18.3954 10.5 17.5 11.3954 17.5 12.5C17.5 13.6046 18.3954 14.5 19.5 14.5Z"
        stroke="#000"
        stroke-miterlimit="10"
        // fill="var(--background-color)"
      />
      <path
        {...props}
        d="M4.5 14.5C5.60457 14.5 6.5 13.6046 6.5 12.5C6.5 11.3954 5.60457 10.5 4.5 10.5C3.39543 10.5 2.5 11.3954 2.5 12.5C2.5 13.6046 3.39543 14.5 4.5 14.5Z"
        stroke="#000"
        stroke-miterlimit="10"
        // fill="var(--background-color)"
      />
    </svg>
  );
}
