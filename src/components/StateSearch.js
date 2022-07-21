import {useState} from 'react';
import {searchByState} from '../services/Endpoints';
import RepCard from './RepCard';

function StateSearch() {
    const [stateReps, setStateReps] = useState([]);
    const [errMessage, setErrMessage] = useState("");

    async function handleSearch() {
        let input = document.querySelector('#state-search')
        const objOfReps = await searchByState(input.value.toUpperCase())
        const repData = [];
        if(objOfReps !== undefined) {
            let arrOfReps = objOfReps.data.response.legislator
            if(Array.isArray(arrOfReps)) {
                for(let i = 0; i < arrOfReps.length; i++) {
                  const arrOfAttrib = arrOfReps[i]['@attributes'];
                  repData.push(arrOfAttrib)
                }
                setStateReps(repData)
                setErrMessage('')  
              }
              else {
                const arrOfAttrib = arrOfReps['@attributes'];
                repData.push(arrOfAttrib)
                
              }
              setStateReps(repData)
              setErrMessage('')    
        }  
        else {
            setErrMessage('State/Representative not found, please input a two-letter state abbreviation or cID of the Representative.')
            setStateReps([])
        }
    }
  
    return(
        <div>
            <label>
                <h1>StateMyRep</h1>
                <p>Find your state's Congressional Representatives to learn more about them and ways to contact them. <br />
                In RepSearch, find the Representative's top 10 organizational supporters using their cID.</p>
            </label>

            <input id='state-search' type='text' placeholder="State Abbreviation or cID"/>
            <button onClick={() => handleSearch()}>Submit</button>
            <p>{errMessage}</p>

            {stateReps.map((rep) => {
                return <RepCard  props={rep}/>
                })
            }
           
        </div>
    )
}

export default StateSearch