const btnLoginSumit = document.querySelector('.btn-Submit');
const toastLiveExample = document.getElementById('liveToast')
const btnSignUP = document.querySelector('.btn-SignUp')

const loginForm = async (event) => {
    event.preventDefault();
    console.log('hi');
    const txtusername = document.querySelector('.username').value.trim();
    const txtpassword = document.querySelector('.password').value.trim();
if (txtpassword == "") {
   btnLoginSumit.textContent = 'both text fields must be filled'
 return

}
console.log('hie3');
    if (txtusername && txtpassword) {
        console.log('hellp');
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ txtpassword, txtpassword }),
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
    const txtusername = document.querySelector('.username').value.trim();
    const txtpassword = document.querySelector('.password').value.trim();
    if (txtusername && txtpassword) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ txtpassword, txtpassword }),
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