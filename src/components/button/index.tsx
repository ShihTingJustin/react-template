import React from 'react';

import './button.scss';

const Button = ({
  children,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}) => {
  return (
    <div data-testid="button" className="button-root">
      <button data-disabled={disabled} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
