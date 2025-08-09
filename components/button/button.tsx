import React from "react";
import clsx from "clsx";

/**
 * * Button component dengan dukungan variant dan warna dasar orange.
 *
 * @param {Object} props
 * @param {"solid" | "outline" | "ghost"} [props.variant] - Tipe tampilan button.
 * @param {React.ReactNode} props.children - Isi button.
 * @param {string} [props.className] - Kelas tambahan.
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} [props.rest] - Properti button lainnya.
 */
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline" | "ghost";
  children: React.ReactNode;
  className?: string;
};

const baseStyle =
  "font-semibold rounded-md px-4 py-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2";

const variantStyles = {
  solid:
    // * Border hanya muncul saat hover, tidak ada border saat normal maupun active
    "bg-orange-500 text-white border border-transparent hover:bg-orange-600 hover:border-orange-600",
  outline:
    "bg-transparent text-orange-500 border border-orange-500 hover:bg-orange-50 active:bg-orange-100",
  ghost:
    "bg-transparent text-orange-500 hover:bg-orange-50 active:bg-orange-100 border border-transparent",
};

const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  children,
  className,
  ...rest
}) => {
  return (
    <button
      className={clsx(baseStyle, variantStyles[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
