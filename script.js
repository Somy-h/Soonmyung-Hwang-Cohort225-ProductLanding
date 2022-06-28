const menuTools = document.querySelectorAll('.menu-tools');
const navBarNav = document.getElementById('navbarNav');

navBarNav.addEventListener('hidden.bs.collapse', () => {
    //console.log("collapse")
    menuTools.forEach (menuTool => {
        menuTool.classList.remove('hidden')
    });
})

navBarNav.addEventListener('show.bs.collapse', () => {
    //console.log("show");
    menuTools.forEach (menuTool => {
        menuTool.classList.add('hidden')
    });    
})
