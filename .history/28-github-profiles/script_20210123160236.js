const APIURL = 'https://api.github.com/users/';

const form = document.getElementById('form');
const search = document.getElementById('search');

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);

    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

function createUserCard(user){
  const
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    search.value = '';
  }
});

// function getUser(username) {
//   // axios(APIURL+username) === axios.get(APIURL+username)
//   axios(APIURL + username)
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// }
