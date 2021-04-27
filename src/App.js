// import Inline from './components/inline/inline'
// import StyleSheet from './components/stylesheets/styleSheet'
import "./styles.css"
import styles from "./styles.module.css"


const App = () => {
// console.log("styles obj: ", styles); */
  return (
    <div>
      {/* <Inline />      */}
      {/* <StyleSheet primary={false} /> */}
      <h1 className="error">Something went wrong</h1>
      <h1 className={styles.success}>200 OK success </h1>

    </div>
  );
};

export default App;