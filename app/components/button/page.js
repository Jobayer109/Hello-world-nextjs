function Button({ text, customStyle }) {
  const style = {
    padding: ".5rem 1rem",
    border: "1px solid grey",
    borderRadius: "5px",
    letterSpacing: "1px",
    ...customStyle,
  };

  return <button style={style}>{text}</button>;
}

export default Button;
