import React, {useEffect} from 'react';
import("./styles/styles.css");

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

  useEffect(() => {
    const isIOS =
        typeof window !== "undefined" &&
        navigator.userAgent.match(/iPhone|iPad|iPod/i);

    function setIOSHeight() {
      document.documentElement.style.setProperty(
          "--isl-vh",
          window.innerHeight * 0.01 + "px"
      );
    }

    if (isIOS) {
      setIOSHeight();
      window.addEventListener("resize", setIOSHeight);

      return () => {
        window.removeEventListener("resize", setIOSHeight);
      };
    }
  }, []);

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
