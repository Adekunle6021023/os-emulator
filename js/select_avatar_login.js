//AUTHENTICATOR FOR LOGIN SECTION;

let passcodeField = document.querySelector('#passcode');

let btn = document.querySelector('.btn');

let passcodeContainer = document.querySelector('.session-passcode');

let passcode = Math.floor(Math.random() * 100000000);

passcodeContainer.textContent = passcode;


btn.addEventListener('click', () => {

    if (passcodeField.value != passcode) {
        function displayAlert() {
            let message = document.createElement('div');
            message.textContent = `Oops, Try Again!`;
            document.querySelector('.form').insertBefore(message, btn);
            setTimeout(() => {
                message.remove();
            }, 1400);
        }
        displayAlert()

    } else {
        window.location.href = '../desktop_environment.html'
    }
})