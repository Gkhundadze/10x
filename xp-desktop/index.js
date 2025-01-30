const explorerWindow = document.querySelector('.explorer')
const closeBtn = document.querySelector('.close')
closeBtn.addEventListener('click', () => {
    explorerWindow.style.animation = 'closeWindow 0.3s ease-out';
    
    setTimeout(() => {
        explorerWindow.style.display = 'none';
        explorerWindow.style.animation = ''; // Reset animation for next time
    }, 300); // Match the duration of the CSS animation
})

const desktop = document.getElementById("desktop");
const contextMenu = document.getElementById("contextMenu");

desktop.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    console.log("Right-clicked on:", e.target);

    if(e.target.classList.contains('icon')) {
        console.log('icon clicked')
    }
    else if(e.target.classList.contains('explorer-header')) {
        console.log('explorer header clicked')
    }
    else if(e.target.classList.contains('dock')) {
        console.log('dock clicked')
    }
    else if(e.target.classList.contains('start')) {
        console.log('start clicked')
    }
    else if(e.target.classList.contains('time')) {
        console.log('time clicked')
    }
    else if (e.target === desktop) {
        contextMenu.style.top = `${e.clientY}px`;
        contextMenu.style.left = `${e.clientX}px`;
        contextMenu.style.display = "block";
        console.log('desktop clicked')
    }
});

document.addEventListener("click", () => {
    contextMenu.style.display = "none";
});