// import "./styles/react-ios-scroll-lock.css";
import React from "react";

interface IosScrollLockProps {
  bgColor?: string;
  isInline?: boolean;
  className?: string;
  isOpen?: boolean;
  children: React.ReactNode;
}

function IosScrollLock({
  children,
  isOpen = false,
  isInline = false,
  className = "",
  bgColor = "",
}: IosScrollLockProps) {
  import("./styles/styles.css");

  const rootStyle = bgColor
    ? ({ "--isl-bg": bgColor } as React.CSSProperties)
    : undefined;

  return (
    <div className={`isl_holder${!!isInline ? ' isl_holder--contents' : ''}${!!isOpen ? ' isl_holder--open' : ''}${!!className ? ` ${className}` : ''}`} style={rootStyle}>
      <div className="isl_scroller">
        <div className="isl_scroller_inner">
          <div className="isl_scroller_content">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default IosScrollLock;
