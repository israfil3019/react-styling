

const stylesObj = {
  color: "red",
  backgroundColor: "#e0e0e0",
  fontWeight: "lighter",
};
const myStyles = {
  par: {
    color: "blue",
    fontSize: "20px",
    fontWeight: "bolder",
  },
  div: {
    backgroundColor: "#b0b0b0",
  },
};

const Inline = () => {
  return (
    <div>
      
      <h1
        style={{
          color: "purple",
          backgroundColor: "#e0e0e0",
          fontWeight: "lighter",
        }}
      >
        Hello from Inline comp
      </h1>
      <h2 style={stylesObj}>
        Inline components with constant javascript object
      </h2>
      <div style={myStyles.div}>
        <p style={myStyles.par}>Inline styling with third option</p>
      </div>
    </div>
  );
};

export default Inline;