interface TertiaryButtonProp {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const TertiaryButton: React.FC<TertiaryButtonProp> = ({ label, onClick }) => {
    return (
        <button className="btn btn-tertiary" onClick={onClick}>
            {label}
        </button>
    );
}

export default TertiaryButton;
