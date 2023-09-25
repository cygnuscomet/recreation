import React from 'react';
import styles from './buttonComponent.module.css';

interface ButtonProps {
  text: string;
  secondary?: boolean; // New prop for inverse styling
}

const ButtonComponent: React.FC<ButtonProps> = ({ text, secondary = false }) => {
  const buttonClassName = secondary ? `${styles.btnSecondary}` : `${styles.btnPrimary}`;

  return (
    <button className={buttonClassName}>
      {text}
    </button>
  );
}

export default ButtonComponent;
