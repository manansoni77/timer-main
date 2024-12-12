interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isDisabled: boolean;
  classattr?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  isDisabled,
  classattr,
  ...rest
}) => {
  return (
    <button
      className={`${classattr} px-4 py-2 text-sm font-medium text-white rounded-md transition-colors ${
        !isDisabled
          ? "bg-blue-600 hover:bg-blue-700"
          : "bg-blue-400 cursor-not-allowed"
      }`}
      disabled={isDisabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export { PrimaryButton };
