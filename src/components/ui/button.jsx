const Button = ({ label, variant = "primary", ...props }) => {
  const baseStyles = "mt-4 cursor-pointer px-8 py-2 font-semibold rounded-full shadow transition";

  const variants = {
    primary: "bg-black text-white hover:bg-gray-900",
    secondary: "bg-white text-black hover:bg-gray-200",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} {...props}>
      {label}
    </button>
  );
};

export default Button;
