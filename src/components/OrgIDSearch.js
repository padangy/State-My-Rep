import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {searchOrgID} from '../services/Endpoints';
import OrgSummCard from './OrgSummCard';

function OrgIDSearch() {
  const [organizations, setOrganizations] = useState([]);
  const [errMessage, setErrMessage] = useState("");
  const [orgId, setOrgId] = useState();
  const {org_id} = useParams();

  useEffect(() => {
    setOrgId(org_id);
  }, []);

  async function handleSearch() {
    const objOfOrgs = await searchOrgID(orgId.toUpperCase())
    const orgData = [];
    // console.log(objOfOrgs)
    if(objOfOrgs !== undefined) {
      let arrOfOrgs = objOfOrgs.data.response.organization
      const arrOfAttrib = arrOfOrgs['@attributes'];
      orgData.push(arrOfAttrib)
      setOrganizations(orgData)
      setErrMessage('');
    }
    else {
      setErrMessage('Organization not found, please input the orgID of the Organization.');
      setOrganizations([])
    }
  }

  return(
    <div>
      <h1>Organizational Fundraising Efforts Summarized by Latest Cycle Year</h1> 

    <input id='orgid-search' type='text' value={orgId ? `${orgId}` : ''} placeholder="orgID of Organization" onChange={(event) => {
      setOrgId(event.target.value);
    }}/>
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