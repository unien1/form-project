function validateField(label, value) {
  return value.trim() !== '';
}

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

document.getElementById('user-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const ageValue = document.getElementById('age').value.trim();
  const hobby = document.getElementById('hobby').value.trim();
  const message = document.getElementById('message');

  message.textContent = '';

  const age = parseInt(ageValue, 10);

  if (!validateField('Name', name) || !validateField('Email', email) || !validateField('Age', ageValue) || !validateField('Hobby', hobby)) {
    message.textContent = 'All fields are required.';
    return;
  }

  if (!validateEmail(email)) {
    message.textContent = 'Invalid email format.';
    return;
  }

  if (isNaN(age) || age <= 0) {
    message.textContent = 'Age must be a number > 0.';
    return;
  }

  if (age <= 18) {
    message.textContent = 'You must be over 18 to submit.';
    return;
  }

  addPersonToList({ name, email, age, hobby });
  document.getElementById('user-form').reset();
});

function addPersonToList(person) {
  const list = document.getElementById('people-list');

  const card = document.createElement('div');
  card.className = 'user-card';

  card.innerHTML = `
    <p><strong>Name:</strong> ${person.name}</p>
    <p><strong>Email:</strong> ${person.email}</p>
    <p><strong>Age:</strong> ${person.age}</p>
    <p><strong>Hobby:</strong> ${person.hobby}</p>
  `;

  list.appendChild(card);
}
