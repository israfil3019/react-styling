
import "./styleSheet.css";

const StyleSheet = (props) => {
    const isPrimary = props.primary ? "primary" : "secondary";
  return (
    <div className="style-sheet-container">
      <img
        className="logo"
        src="https://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg"
        alt="logo"
      />
      <h1 className="header">Welcome</h1>
      <p className={isPrimary}>Change your skillset, change your future!</p>
    </div>
  );
};

export default StyleSheet;