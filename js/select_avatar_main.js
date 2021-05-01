//SELECT AVATAR
let avatars = document.querySelectorAll('.avatar');
let avatarContainer = document.querySelector('.select_avatar-container');
let loginContainer = document.querySelector('.login-container');
let avatarArr = Array.from(avatars);
let userAvatar = document.querySelector('.user-avatar');

(function deliverAvatar() {

    avatarArr.forEach(avatar => {

        //DYNAMICALLY PROVIDE BG-IMAGES FOR EMPTY DIVS.

        let counter = avatarArr.indexOf(avatar);

        function showAvatar() {
            avatar.style.backgroundImage = `url('./img/img${counter}.jpeg')`;
        }
        showAvatar();

        avatar.addEventListener('click', (e) => {

            // TWEAK CSS TO SIMULATE PAGE CHANGE

            avatarContainer.style.display = 'none';
            loginContainer.style.display = 'flex';
            loginContainer.classList.add('login-animation');

            //GRAB THE INDEX OF SELECTED AVATAR TO PROVIDE IMAGE FOR LOGIN SECTION

            let selectedAvatar = avatarArr.indexOf(e.target);
            userAvatar.style.backgroundImage = `url('./img/img${selectedAvatar}.jpeg')`;

            //CHANGE PAGE TITLE

            document.querySelector('title').textContent = 'Login';
        })
    });
})()