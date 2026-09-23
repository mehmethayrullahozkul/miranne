import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export function PrimaryButton({ children, variant = 'primary', fullWidth = true, className = '', ...props }: PrimaryButtonProps) {
  return <button className={`primary-button ${variant === 'secondary' ? 'secondary-button' : ''} ${fullWidth ? 'button-full' : ''} ${className}`} {...props}>{children}</button>;
}
