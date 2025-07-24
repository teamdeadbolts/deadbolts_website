import React from "react";
import "./button.module.css";
import Link from "next/link";

const STYLES = ["btn--primary", "btn--outline", "btn--black", "btn--white", "btn--darker", "btn--opposite"];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type = "button",
  onClick,
  buttonStyle,
  buttonSize = "btn--medium",
  linkTo,
}: {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  buttonStyle: string;
  buttonSize?: string;
  linkTo?: string;
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link href={linkTo || "/"} className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};