import React, { useMemo } from "react";
import { Popover, PopoverProps } from "antd";

interface ReusablePopoverProps {
  title?: React.ReactNode;
  content?: React.ReactNode;
  placement?: PopoverProps["placement"];
  arrow?: "Show" | "Hide" | "Center";
  children: React.ReactNode;
  className?:string
}

const ReusablePopover: React.FC<ReusablePopoverProps> = ({
  title,
  content,
  placement = "bottom",
  arrow = "Show",
  children,
  className
}) => {
  const mergedArrow = useMemo<PopoverProps["arrow"]>(() => {
    if (arrow === "Hide") {
      return false;
    }

    if (arrow === "Show") {
      return true;
    }

    return {
      pointAtCenter: true,
    };
  }, [arrow]);

  return (
    <Popover
      zIndex={1000}
      placement={placement}
      title={title}
      content={content}
      arrow={mergedArrow}
       trigger="click"
       className={className}
    >
      {children}
    </Popover>
  );
};

export default ReusablePopover;
