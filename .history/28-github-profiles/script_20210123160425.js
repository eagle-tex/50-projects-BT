const APIURL = 'https://api.github.com/users/';

const main = document.getElementById('main');

const form = document.getElementById('form');
const search = document.getElementById('search');

function createUserCard(user) {
  const cardHTML = `
    <div class="card">
      <div>
        <img src="https://randomuser.me/api/portraits/men/30.jpg" alt="" class="avatar">
      </div>
      <div class="user-info">
        <h2>johndoe</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, nisi?</p>

        <ul>
          <li>300 <strong>Followers</strong></li>
          <li>100 <strong>Following</strong></li>
          <li>30 <strong>Repos</strong></li>
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

    console.log(data);
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
