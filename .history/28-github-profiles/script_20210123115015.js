const APIURL = 'https://api.github.com/users/';

async function getUser(username) {
  const res = await axios(APIURL + username)
 console.log(res.data))
}

getUser('bradtraversy');

// function getUser(username) {
//   // axios(APIURL+username) === axios.get(APIURL+username)
//   axios(APIURL + username)
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// }
