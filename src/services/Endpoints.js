import axios from 'axios';

// searching by State/Rep info
export async function searchByState(letters) {
  try {
    const response = await axios.get(`https://www.opensecrets.org/api/?method=getLegislators&id=${letters}&apikey=${process.env.REACT_APP_OS_API_KEY}&output=json`);
    // console.log(response)
    // let arrOfReps = response.data.response.legislator
    // console.log(arrOfReps)
    // console.log(response.data.response.legislator[0]['@attributes'].firstlast)
    return response
  }
    catch (err) {
    console.log("error")
  }
}

// cid: N00044521 orgid: D000000128
export async function searchByRep(cid) {
  try {
    const response = await axios.get(`https://www.opensecrets.org/api/?method=candContrib&cid=${cid}&cycle=2022&apikey=${process.env.REACT_APP_OS_API_KEY}&output=json`);
    // console.log(response)
    return response
  }
    catch (err) {
    console.log("error")
  }
}

// export async function repSummary(cid) {
//   try {
//     const response = await axios.get(`https://www.opensecrets.org/api/?method=candSummary&cid=${cid}&cycle=2022&apikey=${process.env.REACT_APP_OS_API_KEY}&output=json`);
//     console.log(response)
    
//     return response
//   }
//     catch (err) {
//     console.log(err)
//   }
// }


//search by org name/org id
export async function searchOrg(words) {
  try {
    const response = await axios.get(`https://www.opensecrets.org/api/?method=getOrgs&org=${words}&apikey=${process.env.REACT_APP_OS_API_KEY}&output=json`);
    // console.log(response)
    
    return response
  }
    catch (err) {
    console.log(err)
  }
}

// D000000128
export async function searchOrgID(orgid) {
  try {
    const response = await axios.get(`https://www.opensecrets.org/api/?method=orgSummary&id=${orgid}&apikey=${process.env.REACT_APP_OS_API_KEY}&output=json`);
    // console.log(response)
    
    return response
  }
    catch (err) {
    console.log(err)
  }
}