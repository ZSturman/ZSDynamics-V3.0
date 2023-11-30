import { BsPaintBucket } from "react-icons/bs";
import { BsBucket } from "react-icons/bs";
import './PalettePicker.scss'

interface SidebarPaintbucketProps {
    active?: boolean;
    onTogglePalettes: () => void;

}
const SidebarPaintbucket: React.FC<SidebarPaintbucketProps> = ({ active, onTogglePalettes }) => {
    return (
        <li className="icon" onClick={onTogglePalettes}>
            { active ? <BsPaintBucket className="paint-bucket-active"/> :  <BsBucket className="paint-bucket"/>}
        
        </li>

    );
}

export default SidebarPaintbucket
