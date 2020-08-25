import React, { useContext } from 'react';
import { Styles } from '../../Utils/Style';
import { Formik, Form } from 'formik';
// import Loader from '../../components/Loader';
import CustomTextInput from '../../components/CustomTextInput';
import * as Yup from 'yup';
import UserContext from '../../context/userContext';

const Home = () => {
  const userContextValue = useContext(UserContext);

  const { signInUser } = userContextValue;

  return (
    <Styles>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid Email').required('Required'),
          password: Yup.string()
            .required()
            .min(2, 'Seems a bit short...')
            .max(10, 'We prefer insecure system, try a shorter password.'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // handleClick(values);
          signInUser(values);
          resetForm();
          setSubmitting(false);
        }}
      >
        {(props) => (
          <Form>
            <h1>Login Form</h1>

            <CustomTextInput
              label='Email'
              name='email'
              type='email'
              placeholder='theamargupta.tech@gmail.com'
            />
            <CustomTextInput
              label='Password'
              name='password'
              type='password'
              placeholder='********'
            />
            <button type='submit'>
              {props.isSubmitting ? 'loading...' : 'submit'}
            </button>
            {/* <button>{isLoading ? 'loading...' : 'done'}</button> */}
            {/* {user.displayName && <button>{user.displayName}</button>} */}
          </Form>
        )}
      </Formik>
    </Styles>
  );
  // ) : (
  //   <Loader />
  // );
};

export default Home;
