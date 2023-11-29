interface SecondaryButtonProp {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SecondaryButton: React.FC<SecondaryButtonProp> = ({ label, onClick }) => {
    return (
        <button className="btn btn-secondary" onClick={onClick}>
            {label}
        </button>
    );
}

export default SecondaryButton;
