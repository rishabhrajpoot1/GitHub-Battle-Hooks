import React, {useState, useEffect} from 'react';
import Card from './Card';

function FetchAllCards(props) {
    var {darkMode} = props;
    var [FetchCards, setFetchCards] = useState([]);
    var [isLoading, setisLoading] = useState(true);
    var [activeName, setActiveName] = useState('All')
    var tags = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    // FetchCards
    function FetchTagsCards(){
        fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${activeName}&sort=stars&order=desc&type=Repositories`)
        .then((res) => {
            if(!res.ok){
                throw new Error("Something went Wrong")
            }else{
                return res.json();
            }
        })
        .then((githubData) => {
            setFetchCards(githubData.items);
            setisLoading(false)
        }).catch(err => console.log(err))
    };

    useEffect(() => {
        FetchTagsCards()
        console.log(FetchCards)
    },[activeName]) 

    // FetchCards ended
    function handleName(each){
        console.log(each)
        setActiveName(each)
    }

    //  isLoding 
    if(isLoading){
        <img src="/images/loading.gif" alt="" />
    }
    return (
        <>
            <div className={darkMode === true ? "flex tags justify_between text_white" : "flex tags justify_between"}>
                {
                    tags.map((each) => (
                        <h3 className={activeName === each ? 'active' : ""} onClick={() => handleName(each)}>{each}</h3>
                    ))
                }
            </div>
            <div>
                {
                    FetchCards ? <Card darkMode={darkMode} FetchCards={FetchCards}/> : <img src="/images/loading.gif" alt="" /> 
                }
            </div>

        </>
    )
}

export default FetchAllCards
