// import "./styles/react-ios-scroll-lock.css";
import React from "react";
import cn from "classnames";

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
  const rootCn = cn({
    isl_holder: true,
    "isl_holder--contents": isInline,
    "isl_holder--open": isOpen,
    [className]: !!className,
  });

  const rootStyle = bgColor
    ? ({ "--isl-bg": bgColor } as React.CSSProperties)
    : undefined;

  return (
    <div className={rootCn} style={rootStyle}>
      <div className="isl_scroller">
        <div className="isl_scroller_inner">
          <div className="isl_scroller_content">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default IosScrollLock;
