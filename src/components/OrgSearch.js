import {useState} from 'react';
import {searchOrg} from '../services/Endpoints';
import OrgCard from './OrgCard';

function OrgSearch() {
  const [organizations, setOrganizations] = useState([]);
  const [errMessage, setErrMessage] = useState("");

  async function handleSearch() {
    let input = document.querySelector('#org-search')
    const objOfOrgs = await searchOrg(input.value.toUpperCase())
    const orgData = [];
    if(objOfOrgs !== undefined) {
        let arrOfOrgs = objOfOrgs.data.response.organization
        if(Array.isArray(arrOfOrgs)) {
          for(let i = 0; i < arrOfOrgs.length; i++) {
            const arrOfAttrib = arrOfOrgs[i]['@attributes'];
            orgData.push(arrOfAttrib)
          }
          setOrganizations(orgData)
          setErrMessage('')
        }
        else {
          const arrOfAttrib = arrOfOrgs['@attributes'];
          orgData.push(arrOfAttrib)
        }
        setOrganizations(orgData)
        setErrMessage('')         
    } 
    else {
      setErrMessage('Organization not found, please input an organization name.');
      setOrganizations([])
    }
  }
  return(
    <div>
      <h1>Organization Search</h1>
      <p>Find the organization's orgID. <br />
      In OrgIDSearch, use the orgID to find their fundraising efforts for the last cycle.</p>
       

      <input id='org-search' type='text' placeholder="Organization Name"/>
      <button onClick={() => handleSearch()}>Submit</button>
      <p>{errMessage}</p>

      {/* if(organizations) */}
      {organizations.map((rep) => {
          return <OrgCard  props={rep}/>
          })
      }
    </div>
)

}

export default OrgSearch