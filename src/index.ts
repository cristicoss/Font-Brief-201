import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Cristian Costea Claudiu';
  document.body.style.backgroundColor = 'red';
  greetUser(name);
});
