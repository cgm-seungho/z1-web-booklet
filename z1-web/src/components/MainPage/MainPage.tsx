import * as React from "react";
import * as styles from "./MainPage.scss";
import { Button } from 'reactstrap';

class MainPage extends React.Component {
    public render() {
        return (
            <div className={styles.MainPage}>
                MainPage
                <Button color="primary">이건 버튼입니당</Button>{' '}
            </div>
            
        );
    }
}

export default MainPage;