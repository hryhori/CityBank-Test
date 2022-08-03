import s from './Footer.module.scss'
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';


function Footer(){
    return(
        <div className={s.footer_wrapper}>
            <div className={s.container}>
            <div className={s.logo}><img src={logo} alt="Logo" /></div>
            <div className={s.themes}><ul className={s.pages_list}>
                <li className={s.page_item}><NavLink to='/'>Terms & Conditions</NavLink></li>
                <li className={s.page_item}><NavLink to='/'>Privacy</NavLink></li>
                <li className={s.page_item}><NavLink to='/'>Notice at Collection</NavLink></li>
                <li className={s.page_item}><NavLink to='/'>CA Privacy Hub</NavLink></li>
                <li className={s.page_item}><NavLink to='/'>Contact Us</NavLink></li>
                <li className={s.page_item}><NavLink to='/'>Sitemap</NavLink></li>
                </ul></div>
            <div className={s.underline}></div>
            <div className={s.copyright_text}><span>Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal Opportunity Lender.</span></div>
            </div>
        </div>
    )
}

export default Footer;