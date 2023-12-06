import { CSSProperties, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string
  style?: CSSProperties
}

export const Card: React.FC<CardProps> = ({ children, className, style }) => {
  return (
    <div className={`bg-teal-50 rounded py-16 px-12 items-center justify-between ${className}`} style={style}>
      {children}
    </div>
  );
};