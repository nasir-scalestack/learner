import React from 'react';
import { Formik } from 'formik';
import { Button, Text } from 'react-native';
import { defaultProfileImg } from '@assets';
import { Image, Form, TextInput } from '@styles';

const initialValues = {
  email: '',
  name: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => (
  <Formik initialValues={initialValues} onSubmit={() => onSubmit}>
    {({
      values: { name, email, password },
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
          onChangeText={handleChange('name')}
          onBlur={handleBlur('name')}
          value={name}
          placeholder="Name"
          rounded
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
        <Text>By pressing 'Join' you agree to our terms and agreements</Text>
      </Form>
    )}
  </Formik>
);

export default SignInForm;
