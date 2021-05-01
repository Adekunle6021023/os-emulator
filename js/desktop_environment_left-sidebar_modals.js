import {
    toggler
} from "./desktop_environment_tweaks.js";

let selectedIcon = document.querySelectorAll('.options');

let modalInsertionPoint = document.querySelector('.modal-container');

let modalTemplate = `<div class="parent-modal">
                    <div class="modal-header">
                        <div class="modal-info">
                            <div class="modal-icon"></div>
                            <div class="modal-name"></div>
                        </div>
                        <div class="close-modal">&times;</div>
                    </div>
                    <div class="main-modal">
                        
                    </div>
                </div>`;

selectedIcon.forEach(icon => {

    icon.addEventListener('click', (e) => {

        //SIDEBAR FUNCTIONALITIES

        icon.parentElement.parentElement.classList.add('remove-sidebar');

        toggler.classList.remove('open');



        ////TEMPLATE FUNCTIONALITIES

        // INSERT MODAL TEMPLATE INTO THE DOM

        modalInsertionPoint.innerHTML = modalTemplate;

        //MODAL ICON

        document.querySelector('.modal-icon').style.backgroundImage = icon.firstElementChild.style.backgroundImage;

        //MODAL TITLE

        document.querySelector('.modal-name').textContent = icon.lastElementChild.textContent;


        // MODAL ANIMATION

        document.querySelector('.parent-modal').classList.add('modal-animate')

        //FETCH MODAL CONTENT

        let fetchedDataInsertionPoint = document.querySelector('.main-modal');

        (async function getModalContent() {
            const getData = await fetch(`../txt/${icon.lastElementChild.textContent}.txt`);
            const receivedData = await getData.text();
            fetchedDataInsertionPoint.innerHTML = receivedData;
        })()

        // CLOSE THE MODAL

        let modalClose = document.querySelector('.close-modal');

        modalClose.addEventListener('click', (e) => {

            modalClose.parentElement.parentElement.remove();


        });

        //CLEAR SEARCH FIELDS IN SEARCH MODAL 

        setTimeout(() => {
            if (icon.lastElementChild.textContent === 'Search') {


                document.querySelector('.search-button').addEventListener('click', () => {

                    document.querySelector('.search-box').value = '';

                })
            }
        }, 250);



    })
});