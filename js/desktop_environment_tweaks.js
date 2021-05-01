//LEFT SIDEBAR

let sidebarContainer = document.querySelector('.sidebar-left');

let togglerWrapper = document.querySelector('.sidebar-left-toggler-wrapper');

export let toggler = document.querySelector('.toggler');

//open and close left sidebar.

export let stateValidator = false;
togglerWrapper.addEventListener('click', (e) => {

    if (!stateValidator) {
        //OPENS SIDEBAR

        sidebarContainer.classList.add('show-sidebar');

        //CHANGES HAMBURGER TO AN 'X'

        toggler.classList.add('open')

        //SETS STATE TO TRUE

        stateValidator = true;



    } else {
        //CLOSES SIDEBAR

        sidebarContainer.classList.remove('show-sidebar');

        //CHANGES 'X' TO HAMBURGER

        toggler.classList.remove('open');

        // CHECK IF SIDEBAR CONTAINS A CLASS OF (REMOVE-SIDEBAR)

        if (sidebarContainer.classList.contains('remove-sidebar')) {

            sidebarContainer.classList.remove('remove-sidebar');

        }

        //SETS STATE BACK TO FALSE

        stateValidator = false;
    }
})


// RIGHT TASKBAR

let taskbarIcons = document.querySelectorAll('.icon');

let iconStateCheck = false;

taskbarIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        if (icon.classList.contains('binary') && !iconStateCheck) {
            icon.classList.add('binary-state-change');
            iconStateCheck = true;
        } else {
            icon.classList.remove('binary-state-change');
            iconStateCheck = false;
        }
    })
})