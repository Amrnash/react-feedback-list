function Input({ handleTextChange, ...props }) {
  return <input className="input" onChange={handleTextChange} {...props} />;
}

export default Input;
