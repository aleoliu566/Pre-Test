import React from 'react';
import useForm from './useForm';

function Main() {

  const { handleChange, handleSubmit, values, errors } = useForm({
    initialValues: {
      account: '',
      password: '',
      rememberMe: false
    },
  
    validation: (values) => {
      const errors = {}
      if (!values.account) {
        errors.account = '請輸入帳號'
      } else if (!values.password) {
        errors.password = '請輸入密碼'
      }
      return errors
    },
    onSubmit: (values) => console.table(values),
  })

  return (
    <>

      <input name="account" onChange={handleChange} value={values.account} placeholder="Account" />
      <br/>
      {errors.account && (<span>{errors.account}</span>)}
      <br/>
      <input name="password" onChange={handleChange} value={values.password} placeholder="Password" />
      <br/>
      {errors.password && (<span>{errors.password}</span>)}
      <br/>
      <label>
        <input type="checkbox" name="rememberMe" onChange={handleChange} checked={values.rememberMe} />
        Remember Me
      </label>
      <br/>
      <button onClick={handleSubmit}>Login</button>
    </>
  )
}

export default Main;

