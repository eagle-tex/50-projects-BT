const APIURL = 'https://api.github.com/users/';

const main = document.getElementById('main');

const form = document.getElementById('form');
const search = document.getElementById('search');

function createUserCard(user) {
  const cardHTML = `
    <div class="card">
      <div>
        <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
      </div>
      <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>

        <ul>
          <li>${user.followers} <strong>Followers</strong></li>
          <li>{user.following} <strong>Following</strong></li>
          <li>30 <strong>${user.public_repos}</strong></li>
        </ul>

        <div id="repos">
          <a href="#" class="repo">Repo 1</a>
          <a href="#" class="repo">Repo 2</a>
          <a href="#" class="repo">Repo 3</a>
        </div>

      </div>
    </div>
  `;

  main.innerHTML = cardHTML;
}

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);

    createUserCard(data);
  } catch (err) {
    console.log(err);
  }
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
