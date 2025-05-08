import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

export default function ContactForm({ onAdd }) {
  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Min 3 chars")
      .max(50, "Max 50 chars")
      .required("This is a required field"),
    number: Yup.string()
      .min(3, "Min 3 chars")
      .max(50, "Max 50 chars")
      .required("This is a required field"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        onAdd({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <div className={css.wrapperForm}>
        <Form className={css.formContainer}>
          <label className={css.label}>
            Name:
            <Field className={css.input} name="name" />
            <ErrorMessage className={css.error} component="div" name="name" />
          </label>
          <label className={css.label}>
            Number:
            <Field className={css.input} name="number" />
            {
              <ErrorMessage
                className={css.error}
                component="div"
                name="number"
              />
            }
          </label>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      </div>
    </Formik>
  );
}
