import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import Tags from './Tags';
import Header from './Header';
import Battle from './Battle';
import BattleCards from './BattleCards';

function App() {
    var [per1Data1 , setper1Data1] = useState(null)
    var [per2Data2 , setper2Data2] = useState(null)
    var [darkMode, setdarkMode] = useState(false)
    function person1DataAll(per1, per2){
        setper1Data1(per1)
        setper2Data2(per2)
    }
    function darkModeset(){
        setdarkMode(true)
    }
    function whiteModeset(){
        setdarkMode(false)
    }
    return (
        <div className={darkMode === true ? "darkcolor app_hei" : "app_hei"}>
            <Header darkMode={darkMode} darkModeset={darkModeset} whiteModeset={whiteModeset} />
            <main>
                <Switch>
                    <Route path='/' exact>
                        <Tags darkMode={darkMode}/>
                    </Route>

                    <Route path="/battle" exact>
                        <Battle darkMode={darkMode} person1DataAll={person1DataAll}/>
                    </Route>

                    <Route path="/battlecards">
                        <BattleCards per1Data1={per1Data1} per2Data2={per2Data2} darkMode={darkMode} />
                    </Route>
                </Switch>
            </main>

        </div>
    )
}

export default App
