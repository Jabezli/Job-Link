const btnLoginSumit = document.querySelector('.btn-Submit');
const toastLiveExample = document.getElementById('liveToast')
const btnSignUP = document.querySelector('.btn-SignUp')
const SignUpForm = document.querySelector('.signupSelector');
const hi = document.querySelector('.signuplink');
const pageloginForm = document.querySelector('.loginform');
SignUpForm.style.display = 'none';
hi.addEventListener('click', displayForms)
async function displayForms(){
  

     if (pageloginForm.style.display === 'none') {
        pageloginForm.style.display = 'block';
        SignUpForm.style.display = 'none';
      } else {
        pageloginForm.style.display = 'none';
        SignUpForm.style.display = 'block';
      }


   
}

const loginForm = async (event) => {
    event.preventDefault();
    const username = document.querySelector('.username').value.trim();
    const password = document.querySelector('.password').value.trim();
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
    const username = document.querySelector('.Signusername').value.trim();
    const password = document.querySelector('.Signpassword').value.trim();
    if (username && password) {
        const response = await fetch('http://localhost:3001/api/user', {
            method: 'POST',
            body: JSON.stringify({ password, username }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/login');
        } else {
            alert('could not to sign up.');
        }
    }

}


btnLoginSumit.addEventListener('click', loginForm);
 btnSignUP.addEventListener('click', signUp)