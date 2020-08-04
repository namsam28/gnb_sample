import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/common/Header";
import Main from "./components/Main";
import Intro from "./components/sub/Intro";
import Mypage from "./components/sub/Mypage";
import Etc from "./components/sub/Etc";
import "./App.scss";

const App = () => {
    return (
        <div className="App">
            <Header />

            <main id="contents">
                <Switch>
                    <Route path={["/", "main"]} component={Main} exact={true} />
                    <Route path="/intro" component={Intro} />
                    <Route path="/mypage" component={Mypage} />
                    <Route path="/etc" component={Etc} />
                </Switch>
            </main>
        </div>
    );
};

export default App;
