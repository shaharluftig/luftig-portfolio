import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { grey, pink } from '@mui/material/colors';
import styles from '../styles/IconFooter.module.css';


const customStyles = {
    icon: {
        color: grey[500],
        "&:hover": {
            color: pink[500],
            cursor: "default"
        }
    }
}

export default function IconFooter() {

    const handleIconClink = (url: String) => {
        window.open(url)
    }
    
    return (
        <div className={styles.linksContainer}>
            <GitHubIcon fontSize="medium" sx={customStyles.icon} onClick={() => handleIconClink("https://www.google.com")} />
            <InstagramIcon className={styles.linkIcon} fontSize="medium" sx={customStyles.icon} onClick={() => handleIconClink("https://www.google.com")} />
            <LinkedInIcon className={styles.linkIcon} fontSize="medium" sx={customStyles.icon} onClick={() => handleIconClink("https://www.google.com")} />
        </div>
    )
}