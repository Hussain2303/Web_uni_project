import React from 'react';
import styles from './Footer.module.css';
import fb from '../assets/facebook.webp';
import insta from '../assets/instagram.jpg';
import yt from '../assets/youtubeicon.png';

const Footer = () => {
    return (
        
        <div className={styles.footer}>
            <br/>
            <div className={styles.footerContainer}>
                <div className={styles.contact}>
                    <h3>You can also contact us on</h3>
                    <ul>
                        <li><b>Phone</b>: +923456321</li>
                        <li id="mail"><b>Email</b>: <a href="mailto:musclehub@gmail.com">musclehub@gmail.com</a></li>
                        <li><b>Address</b>: DHA Phase 6, Lahore.</li>
                    </ul>
                </div>

                <div className={styles.socialMedia}>
                    <h2>Follow us on Social Media</h2>
                    <div className={styles.icons}>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <img src={insta} alt="Instagram" className={styles.icon} />
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <img src={fb} alt="Facebook" className={styles.icon} />
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                            <img src={yt} alt="YouTube" className={styles.icon} />
                        </a>
                    </div>
                </div>
            </div>

            <footer className={styles.footerText}>
                <span>© 2025 <strong>Muscle Hub.</strong> All Rights Reserved.</span>
            </footer>
        </div>
    );
};

export default Footer;
