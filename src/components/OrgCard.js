function OrgCard(props) {
  const {orgname, orgid} = props.props;
  // console.log(orgname)

  return(
    <div key={orgname}>   
      <h2>{orgname ? orgname : 'N/A'}</h2>
      <h3>orgID: {orgid ? orgid : 'N/A'}</h3>

    </div>
  )
}

export default OrgCard;