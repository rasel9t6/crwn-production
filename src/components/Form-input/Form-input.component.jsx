import "./Input.styles.scss";
const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps}></input>
      {label && <label className="form-input-label">{label}</label>}
    </div>
  );
};
export default FormInput;
