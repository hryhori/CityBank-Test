import s from './Login.module.scss'
import list_item from '../../../images/Vector.png'
import LoginForm from './LoginForm/LoginForm';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';


function Login(){
    return (
      <>
      <Header/>
      <div className={s.login_wrapper}>
        <div className={s.business_container}>
          <div className={s.welcome_text}>
            Welcome to <br /> Business Analytics Online
          </div>
          <div className={s.business_analytics}>
            <p>
              <span>Business Analytics</span> — a new, convenient tool for
              managing and forecasting your business performance, which will
              help analyze your own finances and cash flows, visualize your
              reporting, business processes, KPI's
            </p>
            <div className={s.list}>
              <img src={list_item} alt="list item" />
              <span>Interactive Reporting</span>
              <p>
                In just a few clicks, you can connect your data from 1C, CRM
                (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka,
                ebay), Logistic (Nova Poshta), Google Analytics and many more
                systems that reflect different aspects of business activities.
              </p>
            </div>
            <div className={s.list}>
              <img src={list_item} alt="list item" />
              <span>Automated data updates</span>
              <p>
                The application automatically updates and structures the data in
                just 60 seconds, saving you time and money.
              </p>
            </div>
            <div className={s.list}>
              <img src={list_item} alt="list item" />
              <span>Data Security</span>
              <p>
                The Bank guarantees the safety of your personal data, ensuring
                their integrity and confidentiality.
              </p>
            </div>
          </div>
        </div>
        <LoginForm/>
      </div>
      <Footer/>
      </>
    );
}

export default Login;