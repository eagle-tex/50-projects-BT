const APIURL = 'https://api.github.com/usersw/';

function getUser(username) {
  // axios(APIURL+username) === axios.get(APIURL+username)
  axios(APIURL + username)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
}

getUser('bradtraversy');
