function OrgSummCard(props) {
  const {orgname, orgid, source, cycle, lobbying, total, pacs, indivs, soft, dems, repubs, gave_to_pac, gave_to_party, gave_to_cand, gave_to_527, tot527, outside, mems_invested} = props.props;
  console.log(source)

  return(
    <div className="home">
      <div className="item-orgsummcard" key={orgname}>   
        <h2>{orgname ? orgname : 'N/A'}</h2>
        <h3>orgID: {orgid ? orgid : 'N/A'}</h3>
        <h3>OpenSecrets Source: <a href={source ? `https://${source}` : null} target="_blank" rel="noreferrer">
          {source ? `https://${source}` : 'N/A'}</a>
        </h3>
        <p>Year of latest fundraising cycle: {cycle ? cycle : 'N/A'}</p>
        <p>Total lobbying for 2 years of cycle: {lobbying ? lobbying : 'N/A'}</p>
        <p>Total contributions reported by the FEC and IRS: {total ? total : 'N/A'}</p>
        <p>Total from organization's Political Action Committees (PAC): {pacs ? pacs : 'N/A'}</p>
        <p>Total from individuals: {indivs ? indivs : 'N/A'}</p>
        <p>Total soft money: {soft ? soft : 'N/A'}</p>
        <p>Total given to democratic candidates and party committees: {dems ? dems : 'N/A'}</p>
        <p>Total given to republican candidates and party committees: {repubs ? repubs : 'N/A'}</p>
        <p>Total given to Political Action Committees (PAC): {gave_to_pac ? gave_to_pac : 'N/A'}</p>
        <p>Total given to party committees: {gave_to_party ? gave_to_party : 'N/A'}</p>
        <p>Total given to candidates: {gave_to_cand ? gave_to_cand : 'N/A'}</p>
        <p>Total given to 527 organizations: {gave_to_527 ? gave_to_527 : 'N/A'}</p>
        <p>Total received from 527 organizations: {tot527 ? tot527 : 'N/A'}</p>
        <p>Total spent on independent expenditures: {outside ? outside : 'N/A'}</p>
        <p>Number of members invested in this organization: {mems_invested ? mems_invested : 'N/A'}</p>
      </div>
    </div>
  )
}

export default OrgSummCard;