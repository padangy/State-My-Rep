import {useState} from 'react';
import {searchByRep} from '../services/Endpoints';
import RepOrgCard from './RepOrgCard';

function RepSearch() {
    const [orgContribs, setorgContribs] = useState([]);
    const [repName, setRepName] = useState("");
    const [notice, setNotice] = useState("");
    const [source, setSource] = useState("");
    const [errMessage, setErrMessage] = useState("");

    async function handleSearch() {
        let input = document.querySelector('#rep-search')
        const objOfOrgs = await searchByRep(input.value.toUpperCase())
        const orgData = [];
        // console.log(objOfOrgs)
        if(objOfOrgs !== undefined) {
            let name = objOfOrgs.data.response.contributors['@attributes'].cand_name
            let message = objOfOrgs.data.response.contributors['@attributes'].notice
            let url = objOfOrgs.data.response.contributors['@attributes'].source
            // console.log(url)
            let arrOfOrgs = objOfOrgs.data.response.contributors.contributor
            for(let i = 0; i < arrOfOrgs.length; i++) {
                const arrOfAttrib = arrOfOrgs[i]['@attributes'];
                orgData.push(arrOfAttrib)         
            }
            setRepName(name)
            setNotice(message)
            setSource(url)
            setorgContribs(orgData)
            setErrMessage('')
        }  
        else {
            setErrMessage('Representative not found, please input the cID of the Congressional Representative.')
            setorgContribs([])
            setRepName('')
            setNotice('')
            setSource('')
        }
    }
  
    return(
        <div>
            <label><h1>Top 10 Contributors to your Congressional Representative for 2022</h1></label>
            <input id='rep-search' type='text' placeholder="cID of Representative"/>
            <button onClick={() => handleSearch()}>Submit</button>
            
            <div className="summary">
                <p>{errMessage}</p>
                <h2>{repName}</h2>
                <h3 class="source"><a href={source ? source : null} target="_blank" rel="noreferrer">
                    {source ? source : null}</a></h3>
                <p class="notice">{notice}</p>
            </div>

            {orgContribs.map((org) => {
                return <RepOrgCard  props={org}/>
                })
            }
           
        </div>
    )
}

export default RepSearch