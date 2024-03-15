import React from "react";
import type { SVGProps } from "react";
import { Button, tokens } from "@fluentui/react-components";

function RandomIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <circle cx={8.5} cy={8.5} r={0.5} fill="currentColor"></circle>
        <circle cx={15.5} cy={8.5} r={0.5} fill="currentColor"></circle>
        <circle cx={15.5} cy={15.5} r={0.5} fill="currentColor"></circle>
        <circle cx={8.5} cy={15.5} r={0.5} fill="currentColor"></circle>
      </g>
    </svg>
  );
}

export const RandomButton = React.memo((props) => {
  return (
    <Button
      appearance="secondary"
      icon={
        <RandomIcon
          color={tokens.colorBrandBackgroundInverted}
          height={"24px"}
          width={"24px"}
        />
      }
      size="large"
    />
  );
});
