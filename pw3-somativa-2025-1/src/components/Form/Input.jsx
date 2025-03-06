import styles from "./Input.module.css";

function Input({ type, name, id, placeholder, value }) {
  return (
    <div className={styles.form_control}>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}

export default Input;