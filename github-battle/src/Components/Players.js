import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';

function Players(props) {
    var {person1DataAll}=props;
    var [person1, setPerson1] = useState("")
    var [person2, setPerson2] = useState("")

    var [person1Data, setPerson1Data] = useState(null)
    var [person2Data, setPerson2Data] = useState(null)

    var [person1Name, setPerson1Name] = useState("")
    var [person2Name, setPerson2Name] = useState("")

    function handleplayer1({target}){
        var {name, value} = target
        setPerson1([name] = value);
    }
    function handleplayer2({target}){
        var {name, value} = target
        setPerson2([name] = value)
    }

    function fetchPerson1User(){
        fetch(`https://api.github.com/users/${person1Name}`)
        .then((res) => res.json())
        .then((data) => {
            setPerson1Data(data)
        })
    }

    function fetchPerson2User(){
        fetch(`https://api.github.com/users/${person2Name}`)
        .then((res) => res.json())
        .then((data) => {
            setPerson2Data(data)
        })
    }
    
    useEffect(() => { 
        fetchPerson1User();
        fetchPerson2User();
        return () => {}
    },[person1Name, person2Name])


    function handleSubmit(event){
        event.preventDefault()
        setPerson1Name(person1)
        setPerson2Name(person2)
    }
    function handel1empty(){
        setPerson1("")
        setPerson1Name("")
    }
    function handel2empty(){
        setPerson2("")
        setPerson2Name("")
    }

    return (
        <div>
            <h3 className="players">Players</h3>
            <div className="flex justify_between inputs_players">
               <div className="flex_43">
                    <form action=""  onSubmit={handleSubmit}>
                        <label htmlFor="">Player One</label>
                        {person1Name ? "" : <input type="text" onChange={handleplayer1} value={person1} name='person1' className="input"/>}                        {
                            person1Name ? "" : person1 ? <input  type="submit" className="submit" /> : <input  type="submit"  className="submit disabled" disabled/> 
                        }
                    </form>

                    <div className="player_profile">
                        {
                            person1Name ? (<article className="flex items_center profie_data_one">
                                    <div className="flex items_center">
                                        <img src={person1Data.avatar_url} alt="" />
                                        <h3>{(person1Data.name)}</h3>
                                    </div>
                                    <p onClick={handel1empty} className="cross"><i className="fas fa-times"></i></p>
                                </article>) : ""
                        }
                    </div>
               </div>

                <div className="flex_43">
                    <form action="" onSubmit={handleSubmit} className="flex_43">
                        <label htmlFor="">Player Two</label>
                        {person2Name ? "" : <input type="text" onChange={handleplayer2} value={person2} className="input"/>}
                        {person2Name ? "" : person2 ? <input  type="submit" className="submit" /> : <input  type="submit"  className="submit disabled" disabled/> }
                    </form>
                    <div className="player_profile">
                        {
                            person2Name ? (<article className="flex items_center profie_data_one">
                                    <div className="flex items_center">
                                        <img src={person2Data.avatar_url} alt="" />
                                        <h3>{(person2Data.name)}</h3>
                                    </div>
                                    <p onClick={handel2empty} className="cross"><i className="fas fa-times"></i></p>
                                </article>) : ""
                        }
                    </div>
                </div>
            </div>

            {
                person1Name && person2Name ? <NavLink to="/battlecards"><button className="battle" onClick={() => person1DataAll(person1Data ,person2Data)}>Battle</button></NavLink> : ""
            }



            

            
        </div>
    )
}

export default Players
