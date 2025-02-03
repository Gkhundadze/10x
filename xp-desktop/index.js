document.addEventListener('DOMContentLoaded', () => {
    const explorerWindow = document.querySelector('.explorer')
    const desktop = document.getElementById("desktop");
    const contextMenu = document.getElementById("contextMenu");
    const closeBtn = document.querySelector('.close')
    const minimizeBtn = document.querySelector('.minimize')
    const maximizeBtn = document.querySelector('.maximize')
    const icons = document.querySelectorAll('.icon')
    const time = document.querySelector('.time time')
    const explorerHeader = document.querySelector(".explorer-header");
    const welcomeAudio = new Audio("assets/audio/xp-startup.mp3");
    const openFolder = new Audio("assets/audio/start.mp3");
    const minimizeFolder = new Audio("assets/audio/minimize.mp3");
    const welcomeScreen = document.querySelector('.welcome-screen');

    // started programs in dock
    const runingAppsInDock = document.querySelector('.running-apps')


    // Hide the welcome screen initially
    welcomeScreen.style.opacity = "1";
    welcomeScreen.style.visibility = "visible";

    function startWelcomeScreen() {
        welcomeAudio.play().catch((error) => console.error("Playback error:", error));
        welcomeScreen.style.animation = "fadeOut 2s ease-out forwards";

        // Remove event listener after first press
        document.removeEventListener("keydown", spaceKeyListener);
    }

    function spaceKeyListener(event) {
        if (event.code === "Enter") {
            startWelcomeScreen();
        }
    }

    document.addEventListener("keydown", spaceKeyListener);
    let isDragging = false;
    let offsetX = 0, offsetY = 0;
    
    
    explorerHeader.addEventListener("mousedown", (e) => {
        e.stopImmediatePropagation()
        // Prevent dragging when clicking on control buttons
        if (e.target.closest(".cta")) return;
    
        isDragging = true;
        offsetX = e.clientX - explorerWindow.offsetLeft;
        offsetY = e.clientY - explorerWindow.offsetTop;
    
        document.addEventListener("mousemove", onDrag);
        document.addEventListener("mouseup", onStopDrag);
    });
    
    function onDrag(e) {
        if (!isDragging) return;
        explorerWindow.style.left = `${e.clientX - offsetX}px`;
        explorerWindow.style.top = `${e.clientY - offsetY}px`;
    }
    
    function onStopDrag() {
        isDragging = false;
        document.removeEventListener("mousemove", onDrag);
        document.removeEventListener("mouseup", onStopDrag);
    }
    










    getCurrentTime(time)
    handleIconSelection(icons)
    closeBtn.addEventListener('click', (e) => {
        e.stopImmediatePropagation()
        explorerWindow.style.animation = 'closeWindow 0.3s ease-out';
        runingAppsInDock.innerHTML = ''
        setTimeout(() => {
            explorerWindow.classList.add('hide')
            explorerWindow.style.animation = ''; // Reset animation for next time
        }, 300); // Match the duration of the CSS animation
    })
    maximizeBtn.addEventListener('click', (e) => {
        e.stopImmediatePropagation()
        console.log('maximize clicked')
        explorerWindow.classList.toggle('maximized')
    })
    minimizeBtn.addEventListener('click', (e) => {
        e.stopImmediatePropagation()
        minimizeFolder.play().catch((error) => console.error("Playback error:", error));
        console.log('minimize clicked')
        explorerWindow.classList.toggle('minimized')
    })


    desktop.addEventListener("contextmenu", (e) => {
        e.preventDefault();

        if (e.target.classList.contains('icon')) {
            console.log('icon clicked')
        }
        else if (e.target.classList.contains('explorer-header')) {
            console.log('explorer header clicked')
        }
        else if (e.target.classList.contains('dock')) {
            console.log('dock clicked')
        }
        else if (e.target.classList.contains('start')) {
            console.log('start clicked')
        }
        else if (e.target.classList.contains('time')) {
            console.log('time clicked')
        }
        else if (e.target === desktop) {
            contextMenu.style.top = `${e.clientY}px`;
            contextMenu.style.left = `${e.clientX}px`;
            contextMenu.style.display = "block";
            console.log('desktop clicked')
        }
    });

    document.addEventListener("click", (e) => {
        contextMenu.style.display = "none";
        if (!e.target.classList.contains('icon')) {
            icons.forEach((icon) => {
                icon.classList.remove('active')
            })
        } else {
            return
        }
    });
    // each icon double click opens explorer
    icons.forEach((icon) => {
        icon.addEventListener('dblclick', (e) => {
            if(explorerWindow.classList.contains('hide')) {
                const runnigApp = ` <div class="running-app-wrapper">
                    <img src="assets/img/my-computer.png" alt="">
                    <h4>My Computer</h4>
                </div>`
                runingAppsInDock.innerHTML = runnigApp
                document.querySelector('.running-app-wrapper').addEventListener('click', () => {
                    explorerWindow.classList.toggle('minimized')
                })
                openFolder.play().catch((error) => console.error("Playback error:", error));
                explorerWindow.classList.remove('hide')
                
            }
        })
    })

})




function getCurrentTime(target) {
    const currentTime = new Date().toLocaleTimeString()
    target.textContent = currentTime
    setInterval(() => {
        const currentTime = new Date().toLocaleTimeString()
        target.textContent = currentTime
    }, 1000)
}

function handleIconSelection(iconsArr) {
    iconsArr.forEach((icon) => {
        icon.addEventListener('click', (e) => {
            e.preventDefault()
            iconsArr.forEach((icon) => {
                icon.classList.remove('active')
            })
            if (e.target.classList.contains('active')) {
                e.target.classList.remove('active')
            } else {
                e.target.classList.add('active')
            }
        })
    })
}