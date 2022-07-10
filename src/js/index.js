import { api, post } from './api';

const refs = {
  form: document.querySelector('form'),
  inputName: document.querySelector('.input-name'),
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
  post(refs.inputName.value);
  //   const form = new FormData(event.currentTarget);
  //   post(form);
};
refs.form.addEventListener('submit', onSubmit);
refs.addmoreBtn.addEventListener('click', () => {
  api().then(res => {
    refs.users.insertAdjacentHTML('beforeend', render(res.data));
  });
});
