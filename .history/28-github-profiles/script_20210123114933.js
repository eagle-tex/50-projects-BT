const APIURL = 'https://api.github.com/users/';

function getUser(username) {
  // axios(APIURL+username) === axios.get(APIURL+username)
  axios(APIURL + username)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
}

getUser('bradtraversy');

// function getUser(username) {
//   // axios(APIURL+username) === axios.get(APIURL+username)
//   axios(APIURL + username)
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// }
