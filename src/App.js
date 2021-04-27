// import Inline from './components/inline/inline'
// import StyleSheet from './components/stylesheets/styleSheet'
// import "./styles.css"
// import styles from "./styles.module.css"
import ModuleBtn from "./components/moduleCss/ModuleBtn"

const App = () => {
// console.log("styles obj: ", styles); */
  return (
    <div>
      {/* <Inline />      */}
      {/* <StyleSheet primary={false} /> */}
      {/* <h1 className="error">Something went wrong</h1>
      <h1 className={styles.success}>200 OK success </h1> */}
      <h1>Module Css</h1>
      <ModuleBtn btnClass="primary" btnName="Module" />
      <ModuleBtn  btnClass="secondary" btnName="CSS" />

    </div>
  );
};

export default App;