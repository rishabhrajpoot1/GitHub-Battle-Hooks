import React from 'react'
import Players from './Players'

function Battle(props) {
    var {person1DataAll,darkMode} = props
    return (
        <div className={darkMode === true ? "container text_white   " : "container"}>
            <h2 className="Instructions">Instructions</h2>
            <div className="flex instruction_div justify_between">
                <div className="icon_div flex_30">
                    <h3>Enter two Github Users</h3>
                    <i className="fas fa-user-friends icon person_icon"></i>
                </div>

                <div className="icon_div flex_30">
                    <h3>Battle</h3>
                    <i className="fas fa-fighter-jet icon"></i>
                </div>

                <div className="icon_div flex_30">
                    <h3>See the Winner</h3>
                    <i className="fas fa-trophy icon winner_icon"></i>
                </div>
            </div>

            <div>
                <Players person1DataAll={person1DataAll}/>
            </div>
        </div>
    )
}

export default Battle
