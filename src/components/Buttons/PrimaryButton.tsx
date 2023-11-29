interface PrimaryButtonProp {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const PrimaryButton: React.FC<PrimaryButtonProp> = ({ label, onClick }) => {
    return (
        <button className="btn btn-primary" onClick={onClick}>
            {label}
        </button>
    );
}

export default PrimaryButton;
