import PrimaryButton from "../../components/Buttons/PrimaryButton"
import SecondaryButton from "../../components/Buttons/SecondaryButton"
import TertiaryButton from "../../components/Buttons/TertiaryButton"

const ButtonTests = () => {
    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e)
    }

    return (
        <div>
            <PrimaryButton label="Primary" onClick={onClick}/>
            <SecondaryButton label="Secondary" onClick={onClick} />
            <TertiaryButton label="Tertiary" onClick={onClick} />
        </div>

    )
  }
  
  export default ButtonTests