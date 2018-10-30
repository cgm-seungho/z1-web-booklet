import * as React from "react";
import * as styles from "./MainPage.scss";
import ButtonAppbar from "../../materialui/ButtonAppbar";

class MainPage extends React.Component {
  public render() {
    return (
      <div className={styles.MainPage}>
        <ButtonAppbar/>
        MainPage
      </div>
            
        );
    }
}

export default MainPage;