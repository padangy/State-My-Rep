function OrgCard(props) {
  const {orgname, orgid} = props.props;
  // console.log(orgname)

  return(
    <div className="home">
      <div className="item-orgcard" key={orgname}>   
        <h2>{orgname ? orgname : 'N/A'}</h2>
        <h3>orgID: {orgid ? orgid : 'N/A'}</h3>
      </div>
    </div>
  )
}

export default OrgCard;