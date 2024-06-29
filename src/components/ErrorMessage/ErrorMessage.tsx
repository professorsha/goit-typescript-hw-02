import css from './ErrorMessage.module.css';

export default function ErrorMessage() {
  return (
    <>
      <span className={css.error}>Oops! There was an error! Try again!</span>
    </>
  );
}
