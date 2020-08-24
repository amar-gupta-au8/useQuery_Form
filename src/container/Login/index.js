import React, { useContext } from 'react';
import { Styles } from '../../Utils/Style';
import { Formik, Form } from 'formik';
import CustomCheckBox from '../../components/CustomCheckBox';
import CustomTextInput from '../../components/CustomTextInput';
import * as Yup from 'yup';
import UserContext from '../../context/userContext';

const Home = () => {
  const userContextValue = useContext(UserContext);

  const { user, loading, error } = userContextValue;

  console.log(`User: ${user}, Loading: ${loading}, Error: ${error}`);

  return (
    <Styles>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          acceptedTerms: false,
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, 'Must be at least 3 character')
            .max(15, 'Less than 15 charcters')
            .required('Required'),
          email: Yup.string().email('Invalid Email').required('Required'),
          acceptedTerms: Yup.boolean()
            .oneOf([true], 'You must accept the terms and condition')
            .required('Required'),
          password: Yup.string()
            .required()
            .min(2, 'Seems a bit short...')
            .max(10, 'We prefer insecure system, try a shorter password.'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 3000);
        }}
      >
        {(props) => (
          <Form>
            <h1>Signup Form</h1>

            <CustomTextInput
              label='Name'
              name='name'
              type='text'
              placeholder='Amar'
            />
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
            <CustomCheckBox name='acceptedTerms'>
              I accept he terms and condition
            </CustomCheckBox>
            <button type='submit'>
              {props.isSubmitting ? 'loading...' : 'submit'}
            </button>
          </Form>
        )}
      </Formik>
    </Styles>
  );
};

export default Home;
