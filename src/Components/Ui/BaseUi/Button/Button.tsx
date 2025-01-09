// ReusableButton.tsx
import React from "react";

interface ReusableButtonProps {
  type?: "primary" | "default" | "dashed" | "link" | "text";
  size?: "large" | "middle" | "small";
  shape?: "default" | "circle" | "round";
  icon?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  children?: React.ReactNode;
}

const Button: React.FC<ReusableButtonProps> = ({
  type = "default",
  size = "middle",
  shape = "default",
  icon,
  loading = false,
  disabled = false,
  onClick,
  children,
}) => {
  return (
    <Button
      type={type}
      size={size}
      shape={shape}
      icon={icon}
      loading={loading}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default Button;
