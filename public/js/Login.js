const btnLoginSumit = document.querySelector('.btn-Submit');
const toastLiveExample = document.getElementById('liveToast')
const btnSignUP = document.querySelector('.btn-SignUp')

const loginForm = async (event) => {
    event.preventDefault();
    console.log('hi');
    const username = document.querySelector('.username').value.trim();
    const password = document.querySelector('.password').value.trim();
    const hi = JSON.stringify({ username, password });
    console.log(hi);
if (password == "") {
   btnLoginSumit.textContent = 'both text fields must be filled'
 return

}

    if (username && password) {
        const response = await fetch('http://localhost:3001/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in:(.');
        }
    }
};

async function signUp(e) {
    e.preventDefault();
    const username = document.querySelector('.username').value.trim();
    const password = document.querySelector('.password').value.trim();
    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ password, username }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('could not to sign up.');
        }
    }

}


btnLoginSumit.addEventListener('click', loginForm);
// btnSignUP.addEventListener('click', signUp)