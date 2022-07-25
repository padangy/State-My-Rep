import {useNavigate} from 'react-router-dom';

function OrgCard(props) {
  const {orgname, orgid} = props.props;
  // console.log(orgname)
  const navigate = useNavigate();

  return(
    <div className="home">
      <div className="item-orgcard" key={orgname}>   
        <h2>{orgname ? orgname : 'N/A'}</h2>
        <h3>orgID: {orgid ? orgid : 'N/A'}</h3>
        <br />
        <button onClick={
          () => navigate(`/OrgIDSearch/${orgid}`)
          }
          >Organization's Fundraising Efforts</button>
      </div>
    </div>
  )
}

export default OrgCard;