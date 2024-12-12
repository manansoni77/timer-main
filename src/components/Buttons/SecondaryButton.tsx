interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick: () => void;
  children: React.ReactNode;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  handleClick,
  ...rest
}) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
      {...rest}
    >
      {children}
    </button>
  );
};

export { SecondaryButton };
