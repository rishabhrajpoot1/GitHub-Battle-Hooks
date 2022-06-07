import React from 'react';
import {NavLink} from 'react-router-dom'

function BattleCards(props) {
    var { per1Data1, per2Data2,darkMode } = props

    return (
        <>
        <div className="flex container justify_center battle_persons">
            {
                per1Data1 ? (<article className={darkMode===true ? "flex_22 article darkcard text_white" : "flex_22 article"}>
                    {per1Data1.public_repos > per2Data2.public_repos  ? <h2 className="winner">Winner</h2> : <h2>Looser</h2>}
                <img src={per1Data1.avatar_url} alt="" />
                <h2>{per1Data1.name}</h2>
                <div className="article_data">
                    <h3><i className="fas fa-user-alt person"></i> {per1Data1.name}</h3>
                    <p><i class="fas fa-user-friends star"></i>{per1Data1.following} following</p>
                    <p><i class="fas fa-users forks"></i> {per1Data1.followers} followers</p>
                    <p><i class="fas fa-code warning code"></i>  {per1Data1.public_repos} repositories</p>
                </div>
            </article>) : ""
            }

            {
                per2Data2 ? (<article className={darkMode===true ? "flex_22 article darkcard text_white" : "flex_22 article"}>
                    {per1Data1.public_repos > per2Data2.public_repos ? <h2>Looser</h2> : <h2 className="winner">Winner</h2>}
                <img src={per2Data2.avatar_url} alt="" />
                <h2>{per2Data2.name}</h2>
                <div className="article_data">
                    <h3><i className="fas fa-user-alt person"></i> {per2Data2.name}</h3>
                    <p><i class="fas fa-user-friends star"></i> {per2Data2.following} following</p>
                    <p><i class="fas fa-users forks"></i> {per2Data2.followers} followers</p>
                    <p><i class="fas fa-code warning code"></i> {per2Data2.public_repos} repositories</p>
                </div>
            </article>) : ""
            }
        </div>
        <NavLink to="/battle">
            <button className="battle">Reset</button>
        </NavLink>
        </>
    )
}

export default BattleCards;
