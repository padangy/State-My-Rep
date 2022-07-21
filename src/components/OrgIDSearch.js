import {useState} from 'react';
import {searchOrgID} from '../services/Endpoints';
import OrgSummCard from './OrgSummCard';

function OrgIDSearch() {
  const [organizations, setOrganizations] = useState([]);
  const [errMessage, setErrMessage] = useState("");

  async function handleSearch() {
    let input = document.querySelector('#orgid-search')
    const objOfOrgs = await searchOrgID(input.value.toUpperCase())
    const orgData = [];
    // console.log(objOfOrgs)
    if(objOfOrgs !== undefined) {
      let arrOfOrgs = objOfOrgs.data.response.organization
      const arrOfAttrib = arrOfOrgs['@attributes'];
      orgData.push(arrOfAttrib)
      setOrganizations(orgData)
      setErrMessage('')  
    }
    else {
      setErrMessage('Organization not found, please input the orgID of the Organization.');
      setOrganizations([])
    }
  }
  return(
    <div>
      <h1>Organizational fundraising efforts summarized by latest cycle year</h1> 

      <input id='orgid-search' type='text' placeholder="orgID of Organization"/>
      <button onClick={() => handleSearch()}>Submit</button>
      <p>{errMessage}</p>

      {organizations.map((rep) => {
          return <OrgSummCard  props={rep}/>
          })
      }
    </div>
)

}

export default OrgIDSearch