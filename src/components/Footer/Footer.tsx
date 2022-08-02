import s from './Footer.module.scss'
import logo from '../../images/logo.png'


function Footer(){
    return(
        <div className={s.footer_wrapper}>
            <div className={s.container}>
            <div className={s.logo}><img src={logo} alt="Logo" /></div>
            <div className={s.themes}><ul className={s.pages_list}>
                <li className={s.page_item}><a href="#">Terms & Conditions</a></li>
                <li className={s.page_item}><a href="#">Privacy</a></li>
                <li className={s.page_item}><a href="#">Notice at Collection</a></li>
                <li className={s.page_item}><a href="#">CA Privacy Hub</a></li>
                <li className={s.page_item}><a href="#">Contact Us</a></li>
                <li className={s.page_item}><a href="#">Sitemap</a></li>
                </ul></div>
            <div className={s.underline}></div>
            <div className={s.copyright_text}><span>Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal Opportunity Lender.</span></div>
            </div>
        </div>
    )
}

export default Footer;