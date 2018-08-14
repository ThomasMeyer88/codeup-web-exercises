/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

const name = 'Thomas Meyer';
const email = 'trexmeyer@gmail.com';
const languages = ['css', 'html', 'javascript'];

users.push({
  name,
  email,
  languages,
});

console.log(users);

let emails = [];
let names = [];

users.forEach((user) => emails.push(user.email));

users.forEach((user) => names.push(user.name));

let developers = [];
let i = 0;

users.forEach(function(name, email, languages) {
    const thisName = users[i].name;
    const thisEmail = users[i].email;
    const thisLanguage = users[i].languages.join(', ');
    i++;

    developers.push(`${thisName}'s email is ${thisEmail} and ${thisName} knows ${thisLanguage}`);
});

let list = '<ul>';

// // TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {
//
//   // TODO: rewrite the assignment below to use template strings
//   list += '<li>' + developer + '</li>';
// });

for(let index of developers){
  list += `<li>  ${index} </li>`;
}
list += '</ul>';

$('#listBody').html(list);
