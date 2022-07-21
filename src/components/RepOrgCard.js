function RepOrgCard(props) {
  const {org_name, total, pacs, indivs} = props.props;

  return(
    <div key={total}>   
      <h3>Organization: {org_name ? org_name : 'N/A'}</h3>
      <p>Total contributions received: {total ? total : 'N/A'}</p>
      <p>Contributions from Political Action Committees (PAC): {pacs ? pacs : 'N/A'}</p>
      <p>Contributions from individuals: {indivs ? indivs : 'N/A'}</p>
    </div>
  )
}

export default RepOrgCard;