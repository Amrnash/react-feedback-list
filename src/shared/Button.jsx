function Button({ variant, text, ...props }) {
  return (
    <button className={`btn ${variant}`} {...props}>
      {text}
    </button>
  );
}

export default Button;
