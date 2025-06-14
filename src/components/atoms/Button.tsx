import React from 'react';
import './Button.css';

type ButtonProps = {
  children: React.ReactNode;
  variant: 'primary' | 'secundary';
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ children, variant, onClick }) => {
  return (
    <button className={`btn ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};
