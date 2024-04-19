import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import DatePicker from 'react-datepicker';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  gap: 24px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 1.2;
  }

  p {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const FieldWrapper = styled.div`
  position: relative;

  .error-styled {
    position: absolute;
    bottom: -16px;
    left: 18px;
    color: ${({ theme }) => theme.colors.orange};
    font-size: 12px;
  }

  .input-success {
    background-color: light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4));
  }

  svg {
    position: absolute;
    bottom: 18px;
    right: 18px;

    width: 20px;
    height: 20px;

    fill: ${({ theme }) => theme.colors.white};
    stroke: ${({ theme }) => theme.colors.black};
  }
`;

export const FieldStyled = styled(Field)`
  border: none;
  border-radius: 10px;
  padding: 18px;
  width: 400px;
  height: 56px;

  background: ${({ theme }) => theme.colors.lightGray};

  &:focus-visible {
    outline: none;
  }
`;

export const DatePickerStyled = styled(DatePicker)`
  border: none;
  border-radius: 10px;
  padding: 18px;
  width: 400px;
  height: 56px;

  background: ${({ theme }) => theme.colors.lightGray};

  &:focus-visible {
    outline: none;
  }
`;

export const FieldStyledComment = styled(Field)`
  border: none;
  border-radius: 10px;
  padding: 18px;
  width: 400px;
  height: 114px;

  resize: none;

  background: ${({ theme }) => theme.colors.lightGray};

  &:focus-visible {
    outline: none;
  }
`;
