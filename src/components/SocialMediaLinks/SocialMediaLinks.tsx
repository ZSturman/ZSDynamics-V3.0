import SocialMediaLink from "./SocialMediaLink"

const SocialMediaLinks = () => {
    return (
        <div className="social-media-links">
            <ul className='navbar-menu'>
                <li>
                    <SocialMediaLink label="GitHub" to="/" />
                </li>
                <li>
                    <SocialMediaLink label="LinkedIn" to="/" />
                </li>
                <li>
                    <SocialMediaLink label="Twitter" to="/" />
                </li>
                <li>
                    <SocialMediaLink label="Email" to="/"/>
                </li>
                <li>
                    <SocialMediaLink label="Phone" to="/"/>
                </li>
                <li>
                    <SocialMediaLink label="Contact Page" to="/"/>
                </li>
               
            </ul>
        </div>
    )
}

export default SocialMediaLinks
