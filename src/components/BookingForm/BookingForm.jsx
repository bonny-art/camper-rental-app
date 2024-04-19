import React from 'react';

import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import 'react-datepicker/dist/react-datepicker.css';

import sprite from '../../assets/sprite.svg';
import {
  Card,
  DatePickerStyled,
  ErrorStyled,
  FieldStyled,
  FieldStyledComment,
  FieldWrapper,
  FormStyled,
  Inputs,
  Title,
} from './BookingForm.styled';
import { Button } from 'components/Button/Button';

const today = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  bookingDate: Yup.date()
    .min(today(), 'Select a date starting from today')
    .required('Booking date is required'),
  comment: Yup.string(),
});

export const BookingForm = () => {
  const initialValues = {
    name: '',
    email: '',
    bookingDate: null,
    comment: '',
  };

  const handleSubmit = (values, actions) => {
    // Обробка даних форми
    console.log(values);
    actions.setSubmitting(false);

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <Card>
      <Title>
        <h3>Book your campervan now</h3>
        <p>Stay connected! We are always ready to help you.</p>
      </Title>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, errors, touched }) => (
          <FormStyled>
            <Inputs>
              <FieldWrapper>
                <FieldStyled name="name" placeholder="Name" />
                {touched.name && errors.name && (
                  <div className="error-styled">{errors.name}</div>
                )}
              </FieldWrapper>

              <FieldWrapper>
                {' '}
                <FieldStyled name="email" placeholder="Email" />
                {touched.email && errors.email && (
                  <div className="error-styled">{errors.email}</div>
                )}
              </FieldWrapper>

              <FieldWrapper>
                <Field name="bookingDate">
                  {({ field }) => (
                    <DatePickerStyled
                      {...field}
                      selected={field.value}
                      onChange={date => setFieldValue('bookingDate', date)}
                      placeholderText="Booking date"
                      className={`datepicker-custom-input ${
                        touched.bookingDate && !errors.bookingDate
                          ? 'input-success'
                          : ''
                      }`}
                    />
                  )}
                </Field>
                <svg>
                  <use href={`${sprite}#calendar`} />
                </svg>
                {touched.bookingDate && errors.bookingDate && (
                  <div className="error-styled">{errors.bookingDate}</div>
                )}
              </FieldWrapper>

              <FieldWrapper>
                <FieldStyledComment
                  name="comment"
                  placeholder="Comment"
                  as="textarea"
                  className={
                    touched.comment && !errors.comment ? 'input-success' : ''
                  }
                />
                {touched.comment && errors.comment && (
                  <div className="error-styled">{errors.comment}</div>
                )}
              </FieldWrapper>
            </Inputs>

            <div>
              <Button type="submit" className="accent">
                Send
              </Button>
            </div>
          </FormStyled>
        )}
      </Formik>
    </Card>
  );
};
