const APIURL = 'https://api.github.com/users/';

async function getUser(username) {
  try{}catch(err{}
  const  {data} = await axios(APIURL + username);

  console.log(data);
}

getUser('bradtraversy');

// function getUser(username) {
//   // axios(APIURL+username) === axios.get(APIURL+username)
//   axios(APIURL + username)
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// }
