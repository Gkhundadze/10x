// program starts when all DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    const explorerWindow = document.querySelector('.explorer') // explorer
    const desktop = document.getElementById("desktop"); // desktop
    const contextMenu = document.getElementById("contextMenu"); // context menu
    const closeBtn = document.querySelector('.close') // close button
    const minimizeBtn = document.querySelector('.minimize') // minimize button
    const maximizeBtn = document.querySelector('.maximize') // maximize button
    const icons = document.querySelectorAll('.icon') // All shortcuts
    const time = document.querySelector('.time time') // time variable
    const explorerHeader = document.querySelector(".explorer-header"); // explorer header
    const welcomeAudio = new Audio("assets/audio/xp-startup.mp3"); // Xp welcome screen sound
    const openFolder = new Audio("assets/audio/start.mp3"); // folder open & redirect sound
    const minimizeFolder = new Audio("assets/audio/minimize.mp3"); //minimize sound
    const welcomeScreen = document.querySelector('.welcome-screen'); // Xp welcome screen
    const loadingScreen = document.querySelector('.loading-xp') // Loading layer
    let loadingTime = 5000; //loading time
    const runingAppsInDock = document.querySelector('.running-apps')   // started programs in dock

   
    const startMenu = document.querySelector('.start-menu')  // start menu
    const startBtn = document.querySelector('.start') // start menu button


    // on start button clicked it triggers startmenu adding "hide" class on it
    startBtn.addEventListener('click', () => {
        startMenu.classList.toggle('hide')
    })

    
    // show loading gif
    setTimeout(() => {
        loadingScreen.remove()
    }, loadingTime)
    
    // simulate black screen after loading xp
    setTimeout(() => {
        loadingScreen.style.background = '#000'
    }, loadingTime - 2000)

    // Hide the welcome screen initially
    welcomeScreen.style.opacity = "1";
    welcomeScreen.style.visibility = "visible";

    function startWelcomeScreen() {
        welcomeAudio.play().catch((error) => console.error("Playback error:", error));
        welcomeScreen.style.animation = "fadeOut 2s ease-out forwards";

        // Remove event listener after first press
        document.removeEventListener("keydown", enterKeyListener);
    }

 
    function enterKeyListener(event) {
        if (event.code === "Enter") {
            startWelcomeScreen();
        }
    }

    document.addEventListener("keydown", enterKeyListener);
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
    










    getCurrentTime(time) // sets local time

    handleIconSelection(icons) // handles mouse click on icon (makes icon selected)

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
        }else {
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