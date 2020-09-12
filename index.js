window.onload = function() {
  let avatar = document.querySelector("#avatar");
  let user_name = document.querySelector("#user_name");
  let form = document.querySelector("#form");

  form.addEventListener("submit", getAvator);

  function getAvator(e) {
    e.preventDefault();
    fetch("https://api.github.com/users/" + user_name.value)
    .then(res => res.json())
    .then(data => {
      avatar.src = data.avatar_url;
    })
    .catch(err => console.log(err));
  }
}
