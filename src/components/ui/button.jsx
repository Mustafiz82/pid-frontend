import Link from "next/link";

const Button = ({ label, variant = "primary", href, ...props }) => {
  const baseStyles = "mt-4 cursor-pointer px-8 py-2 font-semibold rounded-full shadow transition";

  const variants = {
    primary: "bg-black  px-10 text-white hover:bg-gray-900",
    secondary: "bg-white  text-black hover:bg-gray-200",
  };

  const classes = `${baseStyles} ${variants[variant]}`;

  if (href) {
    return (
     <Link href={href}>
      <button className={classes} {...props}>
        {label}
      </button>
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {label}
    </button>
  );
};

export default Button;
