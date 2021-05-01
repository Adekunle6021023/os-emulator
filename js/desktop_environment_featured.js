let featuredAppsSVG = [
    'amazon', 'calender-alt',
    'cloud-sun-rain', 'deezer', 'github', 'microsoft', 'playstation', 'skype', 'slack',
    'stack-overflow', 'twitter', 'wifi'
];

let leftSidebarSVG = ['user', 'apps', 'recycle', 'share-square', 'search', 'screencast', ];

let taskbarSVG = [
    'question-circle', 'battery-full', 'network-wired', 'sound'
];

(function loadFeaturedArea() {

    //LOAD FEATURED AREA ICONS
    let iconWrappers = document.querySelectorAll('.inner-img');

    let iconWrappersArray = Array.from(iconWrappers);

    iconWrappers.forEach(icon => {
        icon.style.backgroundImage = `url('./svg/${featuredAppsSVG[iconWrappersArray.indexOf(icon)]}.svg')`
    });
})();

(function loadLeftSIdebar() {

    // LOAD LEFT-SIDEBAR ICONS
    let optionWrappers = document.querySelectorAll('.option-icon');

    let optionWrappersArray = Array.from(optionWrappers);


    optionWrappers.forEach(option => {
        option.style.backgroundImage = `url('./svg/${leftSidebarSVG[optionWrappersArray.indexOf(option)]}.svg')`
    });
})();

(function loadTaskbar() {

    // LOAD TASKBAR ICONS
    let taskbarIconWrappers = document.querySelectorAll('.icon');

    let taskbarIconArray = Array.from(taskbarIconWrappers);


    taskbarIconWrappers.forEach(icon => {
        icon.style.backgroundImage = `url('./svg/${taskbarSVG[taskbarIconArray.indexOf(icon)]}.svg')`
    });

    //LOAD DATE AND TIME

    let dateWrap = document.querySelector('.date');

    let date = new Date().toLocaleString();

    dateWrap.textContent = `${date}`;


})();