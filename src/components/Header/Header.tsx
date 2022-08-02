import s from './Header.module.scss'
import logo from '../../images/logo.png'

function Header(){
    return(
        <div className={s.header_wrapper}>
            <div className={s.first_header_part}></div>
            <div className={s.second_header_part}>
                <div className={s.logo_wrapper}>
                    <img className={s.logo} src={logo} alt="Logo" />
                </div>
                <>  </>
            </div>
        </div>
    )
}

export default Header;