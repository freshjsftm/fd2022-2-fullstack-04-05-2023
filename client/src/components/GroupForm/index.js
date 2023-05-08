import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { createGroup } from '../../store/groupsSlice';

const GroupForm = () => {
  const dispatch = useDispatch();
  const onSubmit = (values, formikBag) => {
    values.userId = 9;
    console.log(values);
    dispatch(createGroup(values));
    //formikBag.resetForm();
  };
  return (
    <Formik initialValues={{ title: '', imageGroup: '' }} onSubmit={onSubmit}>
      {(formikProps) => {
        return (
          <Form encType="multipart/form-data">
            <Field name="title" placeholder="title" />
            <input
              name="imageGroup"
              type="file"
              onChange={({target}) =>
                formikProps.setFieldValue('imageGroup', target.files[0])
              }
            />
            <input type="submit" value="add new group" />
          </Form>
        );
      }}
    </Formik>
  );
};

export default GroupForm;
