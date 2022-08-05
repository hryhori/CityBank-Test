import s from '..//Login.module.scss';
import * as yup from 'yup'
import { Formik } from 'formik';
import cancel_logo from '../../../../images/cancel.png'
import {  NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function LoginForm(){
    const navigate = useNavigate();
    const [dataError, setDataError] = useState('')
    let userData = useSelector(state=>state.root.userData);
  
    const acceptData = ({ name, password }) =>
      name === userData.username && password === userData.password
        ? navigate("/todo")
        : setDataError("Incorrect name or password");
  
    const validation = yup.object().shape({
      name: yup.string().required('Please enter your name'),
      password: yup.string().required('Please enter your password'),
    })
    return (
      <div className={s.login_container}>
        <Formik
          initialValues={{ name: "", password: "" }}
          validateOnBlur
          onSubmit={(values) => acceptData(values)}
          validationSchema={validation}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            handleSubmit,
          }) => (
            <div className={s.login_form}>
              <div className={s.login_input_container}>
                <div className={s.abc}>
                  <div className={s.login_input}>
                    <label className={s.labelStyle}>
                      Name
                      <input
                        className={`${s.inputStyle} ${
                          errors.name && touched.name && s.inputError
                        }`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        type="text"
                        name="name"
                        placeholder="Admin"
                      />
                    </label>
                    {touched.name && errors.name && (
                      <div className={s.error_container}>
                        <img src={cancel_logo} alt="cancel" />
                        {errors.name}
                      </div>
                    )}
                  </div>
                  <div className={s.password_input}>
                    <label className={s.labelStyle}>
                      Password
                      <input
                        className={`${s.inputStyle} ${
                          errors.password && touched.password && s.inputError
                        }`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        type="password"
                        name="password"
                        placeholder="12345"
                      />
                      {touched.password && errors.password && (
                        <div className={s.error_container}>
                          <img src={cancel_logo} alt="cancel" />
                          {errors.password}
                        </div>
                      )}
                    </label>
                    {dataError && (
                      <div className={s.data_error_container +' '+ s.error_container}>
                        <img src={cancel_logo} alt="cancel" />
                        {dataError}
                      </div>
                    )}
                  </div>
                  <div className={s.submit_container}>
                    <button
                      className={s.login_btn}
                      disabled={!isValid}
                      onClick={handleSubmit}
                      type={"submit"}
                    >
                      LOGIN
                    </button>
                    <NavLink to="/">Forgot password?</NavLink>
                  </div>
                </div>
              </div>
              <div className={s.register_container}>
                <NavLink to="/" className={s.register_link}>
                  Register now
                </NavLink>
              </div>
            </div>
          )}
        </Formik>
      </div>
    );
  }

  export default LoginForm;