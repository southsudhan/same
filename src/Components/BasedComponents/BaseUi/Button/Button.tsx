import React from "react";
type Position = "absolute" | "relative";
type BgColor = "#000" | "#FFFFFF" | "transparent";

interface ButtonProps {
  bgColor?: BgColor;
  color?: string;
  radius?: string;
  padding?: string;
  margin?: string;
  onClick?: () => void;
  fontSize?: number;
  border?: string;
  width?: number;
  height?: number;
  className?: string;
  bottom?: number;
  position?: Position;
  children: React.ReactNode;
}
const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    bgColor,
    border,
    bottom,
    className,
    color,
    fontSize,
    height,
    margin,
    onClick,
    position,
    radius,
    width,
  } = props;
  return (
    <button
      style={{
        backgroundColor: bgColor || "#E86F16",
        border: border || "none",
        color: color || "#ffffff",
        width: width || "100%",
        height: height || "45px",
        borderRadius: radius || "5px",
        fontSize: fontSize,
        cursor: "pointer",
        margin: margin,
        bottom: bottom,
        position: position,
        fontWeight: "bold",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
      onClick={onClick}
      className={`ButtonStyle ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
