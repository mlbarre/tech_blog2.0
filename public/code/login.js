// login form
async function loginFormHandler (event) {
    event.preventDefault();

    // email and pw variables
    const email = document.querySelector("#email-login").value.trim();
    const pw = document.querySelector("#pw-login").value.trim();

    // checking to see if user is logged in, show content posts
    if (email && pw) {
        const res = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email, 
                pw
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (res.ok) {
            document.location.replace('/dash');
        } else {
            alert(res.statusText);
        }
    }
}

async function registerFormHandler (event) {
    event.preventDefault();

    // variables for reg page
    const username = document.querySelector("#username-reg").value.trim();
    const email = document.querySelector("#email-reg").value.trim();
    const pw = document.querySelector("#pw-reg").value.trim();

    if (username && email && pw) {
        const res = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                pw
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (res.ok) {
            document.location.replace('/dash');
        } else {
            alert(res.statusText);
        }
    }
}

// event listeners for the form handlers
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.reg-form').addEventListener('submit', registerFormHandler);