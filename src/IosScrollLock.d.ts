import "./styles/ios-scroll-lock.css";
import type {ReactNode} from "react";

interface IosScrollLockProps {
    bgColor?: string;
    isInline?: boolean;
    className?: string;
    isOpen?: boolean;
    children: React.ReactNode;
}

declare function IosScrollLock({ children, isOpen, isInline, className, bgColor, }: IosScrollLockProps): import("react/jsx-runtime").JSX.Element;

export default IosScrollLock;
