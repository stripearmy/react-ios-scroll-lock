import React from 'react';
import './css/styles.css';
export interface IosScrollLockProps {
    bgColor?: string;
    isInline?: boolean;
    className?: string;
    isOpen?: boolean;
    children: React.ReactNode;
}
declare function IosScrollLock({ children, isOpen, isInline, className, bgColor, }: IosScrollLockProps): React.JSX.Element;
export default IosScrollLock;
