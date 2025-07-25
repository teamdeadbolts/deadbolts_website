import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost' | 'secondary';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  backgroundColor?: string;
  width?: string | number;
  height?: string | number;
  fontSize?: string | number;
  padding?: string;
  href?: string;
  target?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
  rounded?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  color,
  backgroundColor,
  width,
  height,
  fontSize,
  padding,
  href,
  target,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  fullWidth = false,
  rounded = 'md',
}) => {
  // Size presets
  const sizeStyles = {
    sm: { padding: '6px 12px', fontSize: '14px' },
    md: { padding: '8px 20px', fontSize: '16px' },
    lg: { padding: '12px 26px', fontSize: '18px' },
    xl: { padding: '16px 32px', fontSize: '20px' },
  };

  // Variant base styles
  const variantStyles = {
    primary: {
      backgroundColor: backgroundColor || '#3b82f6',
      color: color || '#ffffff',
      border: `1px solid ${backgroundColor || '#3b82f6'}`,
    },
    outline: {
      backgroundColor: 'transparent',
      color: color || '#3b82f6',
      border: `1px solid ${color || '#3b82f6'}`,
    },
    ghost: {
      backgroundColor: 'transparent',
      color: color || '#374151',
      border: '1px solid transparent',
    },
    secondary: {
      backgroundColor: backgroundColor || '#f3f4f6',
      color: color || '#374151',
      border: `1px solid ${backgroundColor || '#e5e7eb'}`,
    },
  };

  // Rounded styles
  const roundedStyles = {
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    full: '9999px',
  };

  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: disabled ? 'not-allowed' : 'pointer',
    outline: 'none',
    fontWeight: 500,
    textDecoration: 'none',
    transition: 'all 0.2s ease-in-out',
    opacity: disabled ? 0.6 : 1,
    width: fullWidth ? '100%' : width,
    height,
    borderRadius: typeof rounded === 'boolean' 
      ? (rounded ? '6px' : '0px') 
      : roundedStyles[rounded],
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...(padding && { padding }),
    ...(fontSize && { fontSize }),
    ...(color && { color }),
    ...(backgroundColor && { backgroundColor }),
  };

  const hoverStyles: React.CSSProperties = {
    filter: 'brightness(0.9)',
    transform: 'translateY(-1px)',
  };

  const ButtonElement = (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={className}
      style={baseStyles}
      onMouseEnter={(e) => {
        if (!disabled) {
          Object.assign(e.currentTarget.style, hoverStyles);
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.filter = '';
          e.currentTarget.style.transform = '';
        }
      }}
    >
      {children}
    </button>
  );

  // If href is provided, wrap with Link
  if (href && !disabled) {
    return (
      <Link href={href} target={target} style={{ textDecoration: 'none' }}>
        {ButtonElement}
      </Link>
    );
  }

  return ButtonElement;
};

export default Button;