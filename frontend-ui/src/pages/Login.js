// src/pages/Login.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '../redux/userSlice';

const Login = () => {
  const dispatch = useDispatch();

  const loginSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', background: 'linear-gradient(135deg, #6a11cb, #2575fc)' }}>
      <div className="card p-4" style={{ width: '400px', borderRadius: '15px', backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white' }}>
        <h2 className="text-center mb-4">Login</h2>
        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            console.log(values);
            dispatch(setLoggedIn(true));
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-3">
                <label htmlFor="username">Username</label>
                <Field name="username" className="form-control" />
                <ErrorMessage name="username" component="div" className="text-danger" />
              </div>
              <div className="mb-3">
                <label htmlFor="password">Password</label>
                <Field type="password" name="password" className="form-control" />
                <ErrorMessage name="password" component="div" className="text-danger" />
              </div>
              <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>Login</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;