import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { grey, teal } from '@mui/material/colors';
import config from '../config';
import styles from '../styles/IconFooter.module.css';

const customStyles = {
    icon: {
        color: grey[500],
        "&:hover": {
            color: teal.A400,
            cursor: "pointer"
        }

    }
}

export default function IconLinks() {

    const handleIconClink = (url: string) => {
        window.open(url)
    }

    return (
        <div className={styles.linksContainer}>
            <GitHubIcon fontSize="medium" sx={customStyles.icon} onClick={() => handleIconClink(config.links.github)} />
            <LinkedInIcon className={styles.linkIcon} fontSize="medium" sx={customStyles.icon} onClick={() => handleIconClink(config.links.linkdin)} />
            <InstagramIcon className={styles.linkIcon} fontSize="medium" sx={customStyles.icon} onClick={() => handleIconClink(config.links.instagram)} />
        </div>
    )
}