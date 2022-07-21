function RepCard(props) {
  const {firstlast, cid, party, first_elected, phone, website, webform, twitter_id, youtube_url, facebook_id} = props.props;

  return(
    <div className="home">
      <div className="item-repcard" key={firstlast}>   
        <h2>{firstlast ? firstlast : 'N/A'}</h2>
        <h3>cID: {cid ? cid : 'N/A'}</h3>
        <p>Party: {party ? party : 'N/A'}</p>
        <p>First Elected: {first_elected ? first_elected : 'N/A'}</p>
        <p>Phone Number: {phone ? phone : 'N/A'}</p>
        <p>Website: <a href={website ? website : null} target="_blank" rel="noreferrer">
            {website ? website : 'N/A'}</a>
        </p>
        <p>Contact Webform: <a href={webform ? webform : null} target="_blank" rel="noreferrer">
          {webform ? webform : 'N/A'}</a>
        </p>
        <p>Twitter: <a href={twitter_id ? `https://twitter.com/${twitter_id}` : null} target="_blank" rel="noreferrer">
          {twitter_id ? `https://twitter.com/${twitter_id}` : 'N/A'}</a>
        </p>
        <p>Youtube: <a href={youtube_url ? youtube_url : null} target="_blank" rel="noreferrer">
          {youtube_url ? youtube_url : 'N/A'}</a>
        </p>
        <p>Facebook: <a href={facebook_id ? facebook_id : null} target="_blank" rel="noreferrer">{facebook_id ?
          `https://facebook.com/${facebook_id}` : 'N/A'}</a>
        </p>
      </div>
    </div>
  )
}

export default RepCard;