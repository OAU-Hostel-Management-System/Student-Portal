import "./Button.css";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  // Custom properties go here
  children: any;
}

const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button type="submit" className="defaultbutton" {...props}>
      {children}
    </button>
  );
};

export default Button;
