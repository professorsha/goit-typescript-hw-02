import css from './SearchBar.module.css';
import { SearchBarProps, InitialValues } from './SearchBar.types';
import { FaSearch } from 'react-icons/fa';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Enter search text!!!');

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const onSubmit = (
    values: InitialValues,
    actions: FormikHelpers<InitialValues>
  ) => {
    if (values.query === '') {
      notify();
    } else {
      onSearch(values.query);
      actions.resetForm();
    }
  };
  return (
    <header className={css.header}>
      <Formik initialValues={{ query: '' }} onSubmit={onSubmit}>
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            placeholder="Search images and photos"
            name="query"
          />
          <button className={css.btn} type="submit">
            <FaSearch />
          </button>

          <Toaster />
        </Form>
      </Formik>
    </header>
  );
};
export default SearchBar;
