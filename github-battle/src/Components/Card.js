import React from 'react'

function Card(props) {
    var {FetchCards, darkMode} = props
    return (
        <div className="container flex justify_center flex_wrap allCards ">
            {
                FetchCards.map((each) => (
                    <article className={darkMode === true ? "flex_22 article darkcard" : "flex_22 article"}>
                        <img src={each.owner.avatar_url} alt="" />
                        <h2>{each.name}</h2>
                        <div className="article_data">
                            <h3><i className="fas fa-user-alt person"></i> {each.name}</h3>
                            <p><i className="fas fa-star star"></i> {each.stargazers_count} Stars</p>
                            <p><i className="fas fa-code-branch forks"></i> {each.forks_count} forks</p>
                            <p><i className="fas fa-exclamation-triangle warning"></i> {each.open_issues_count} open issues</p>
                        </div>
                    </article>
                ))
            }
        </div>
    )
}

export default Card

