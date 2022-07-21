function RepOrgCard(props) {
  const {org_name, total, pacs, indivs} = props.props;

  return(
    <div className="home">
      <div className="item-reporgcard" key={total}>   
        <h3>Organization: {org_name ? org_name : 'N/A'}</h3>
        <p>Total contributions received: {total ? total : 'N/A'}</p>
        <p>Contributions from Political Action Committees (PAC): {pacs ? pacs : 'N/A'}</p>
        <p>Contributions from individuals: {indivs ? indivs : 'N/A'}</p>
      </div>
    </div>
  )
}

export default RepOrgCard;