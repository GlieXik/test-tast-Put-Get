import { api, post } from './api';

const refs = {
  form: document.querySelector('form'),

  users: document.querySelector('.users'),
  addmoreBtn: document.querySelector('.more'),
};

const render = json => {
  return json
    .map(
      j => `<section class="user-card">
      <img
        src="${j.avatar}"
        alt=""
        class="user-card__img"
        loading="lazy"
      />
      <p class="user-card__name">${j.name}</p>
      <p class="user-card__profesion">
      ${j.pos}
      </p>
      <p class="user-card__email">${j.email}</p>
      <p class="user-card__num">${j.number}</p>
    </section>`
    )
    .join('');
};
api().then(res => {
  console.log(res),
    refs.users.insertAdjacentHTML('beforeend', render(res.data));
});
const onSubmit = event => {
  event.preventDefault();
  const data = {
    name: refs.form.elements.name.value,
    email: refs.form.elements.email.value,
    number: refs.form.elements.number.value,
    pos: refs.form.elements.pos.value,
    avatar: refs.form.elements.avatar.files[0],
  };
  post(data);
  console.log(data);
};
refs.form.addEventListener('submit', onSubmit);
refs.addmoreBtn.addEventListener('click', () => {
  api().then(res => {
    refs.users.insertAdjacentHTML('beforeend', render(res.data));
  });
});
