interface ButtonProps {
  label: string;
}

export const PrimaryButton: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button className="bg-secondary p-3 rounded-md text-primary font-semibold hover:bg-opacity-90">
      {label}
    </button>
  );
};
