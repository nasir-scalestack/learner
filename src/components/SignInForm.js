import React from 'react';
import { Formik } from 'formik';
import { Button } from 'react-native';
import { defaultProfileImg } from '@assets';
import { Image, Form, TextInput } from '@styles';

const initialValues = {
  email: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => (
  <Formik initialValues={initialValues} onSubmit={onSubmit}>
    {({
      values: { email, password },
      handleSubmit,
      handleChange,
      handleBlur,
    }) => (
      <Form>
        <Image
          source={defaultProfileImg}
          width={130}
          height={130}
          rounded
          bordered
        />
        <TextInput
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={email}
          placeholder="email@domain.com"
          rounded
        />
        <TextInput
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={password}
          placeholder="password"
          secureTextEntry
          rounded
        />
        <Button onPress={handleSubmit} title="Enter" />
      </Form>
    )}
  </Formik>
);

export default SignInForm;
