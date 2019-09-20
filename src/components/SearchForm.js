import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const Search = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
  margin: 40px;

  h2 {
    margin-top: 40px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  form div {
    margin: 10px;
  }

  form label {
    display: inline-block;
    width: 100px;
    text-align: right;
  }

  form input {
    width: 200px;
    font-size: 1rem;
    margin-left: 10px;
  }

  form button {
        padding: 10px 30px;
        width: 200px;
        margin: 40px 10px;
        border-radius: 10px;
        font-size: 1rem;
        border: none;
        text-align: center;
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
      }
`;

export default function SearchForm() {
  return (
    <Search>
      <h2>Search</h2>
      <Formik
        initialValues={{name: ''}}
        onSubmit={(values, actions) => null}
      >
        <Form>
          <div>
            <label htmlFor='name'>Name: </label>
            <Field type='text' name='name' />
            <ErrorMessage name='name' component='span' />
          </div>
          <div>
            <label htmlFor='species'>Species: </label>
            <Field type='text' name='species' />
            <ErrorMessage name='species' component='span' />
          </div>
          <div>
            <label htmlFor='gender'>Gender: </label>
            <Field type='text' name='gender' />
            <ErrorMessage name='gender' component='span' />
          </div>
          <button type='submit' disabled={() => null}>Submit</button>
        </Form>
      </Formik>
    </Search>
  );
}
