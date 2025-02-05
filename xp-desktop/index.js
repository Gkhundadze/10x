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
    const refreshBtn = document.querySelector('.refresh')
    let loadingTime = 5000; //loading time
    const runingAppsInDock = document.querySelector('.running-apps')   // started programs in dock
    const startMenu = document.querySelector('.start-menu')  // start menu
    const startBtn = document.querySelector('.start') // start menu button
    const errorMsg = document.querySelector('.error-wrapper') //error message box
    const errorClose = document.querySelector('.error-header .error-cta') // error close buttom
    const errorOk = document.querySelector('.error-ok button') // error ok button
    const cdRom = document.querySelector('.icon.optical-drive')

    cdRom.addEventListener('dblclick', showError)
    errorClose.addEventListener('click', closeError)
    errorOk.addEventListener('click', closeError)
    function showError () {
        errorMsg.classList.add('active')
    }
 
    function closeError() {
        errorMsg.classList.remove('active')
    }

    let selectionBox = null;
    let startX, startY;
    
    desktop.addEventListener("mousedown", (e) => {
        if (e.button !== 0) return; // Only left click
        if (!selectionBox) {
            selectionBox = document.createElement("div");
            selectionBox.classList.add("selection-box");
            desktop.appendChild(selectionBox);
        }
    
        startX = e.clientX;
        startY = e.clientY;
        selectionBox.style.left = `${startX}px`;
        selectionBox.style.top = `${startY}px`;
        selectionBox.style.width = "0px";
        selectionBox.style.height = "0px";
    
        function onMouseMove(e) {
            const x = Math.min(e.clientX, startX);
            const y = Math.min(e.clientY, startY);
            const width = Math.abs(e.clientX - startX);
            const height = Math.abs(e.clientY - startY);
    
            selectionBox.style.left = `${x}px`;
            selectionBox.style.top = `${y}px`;
            selectionBox.style.width = `${width}px`;
            selectionBox.style.height = `${height}px`;
    
            // Check which icons are inside the box
            icons.forEach((icon) => {
                const iconRect = icon.getBoundingClientRect();
                const selectionRect = selectionBox.getBoundingClientRect();
    
                if (
                    iconRect.left < selectionRect.right &&
                    iconRect.right > selectionRect.left &&
                    iconRect.top < selectionRect.bottom &&
                    iconRect.bottom > selectionRect.top
                ) {
                    icon.classList.add("active");
                } else {
                    icon.classList.remove("active");
                }
            });
        }
    
        function onMouseUp(e) {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
            
            // Remove selection box without triggering click event
            setTimeout(() => {
                if (selectionBox) selectionBox.remove();
                selectionBox = null;
            }, 100);
        
            e.stopPropagation(); // Prevents desktop click event from deselecting icons
        }
    
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    });
    

    // document.addEventListener("click", (e) => {
    //     contextMenu.style.display = "none";
    //     if (!e.target.classList.contains('icon')) {
    //         icons.forEach((icon) => {
    //             icon.classList.remove('active')
    //         })
    //     }else {
    //         return
    //     }
    // });
    // Deselect all icons on click outside
    // desktop.addEventListener("click", (e) => {
    //     contextMenu.style.display = "none";
    //     if (!e.target.classList.contains("icon")) {
    //         icons.forEach((icon) => icon.classList.remove("active"));
    //         console.log('remove active class from icons')
    //     }
    // });

    // desktop.addEventListener("click", (e) => {
    //     if (!e.target.classList.contains("icon") && !e.shiftKey && !e.ctrlKey) {
    //         icons.forEach((icon) => icon.classList.remove("active"));
    //     }
    // });









    refreshBtn.addEventListener('click', () => {
        const sound = new Audio("assets/audio/start.mp3");
        sound.play().catch((error) => console.error("Playback error:", error));
        icons.forEach((icon) => {
            icon.style.animation = 'refresh .1s ease-in-out forwards'
            setTimeout(() => {
                icon.style.animation = ''
            }, 500)
        })
    })

    


   // Toggle Start Menu on button click
    startBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent this click from triggering the document event
        startMenu.classList.toggle("hide");
    });

    // Hide Start Menu when clicking outside
    document.addEventListener("click", (e) => {
        if (!startMenu.contains(e.target) && !startBtn.contains(e.target)) {
            startMenu.classList.add("hide");
        }
    });

    
    // show loading gif
    setTimeout(() => {
        loadingScreen.remove()
    }, loadingTime)
    
    // simulate black screen after loading xp
    setTimeout(() => {
        loadingScreen.style.background = '#000'
        loadingScreen.style.cursor = 'default'
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
        icon.addEventListener("click", (e) => {
            e.preventDefault();

            // If holding Ctrl (or Cmd on Mac), allow multiple selection
            if (e.ctrlKey || e.metaKey) {
                icon.classList.toggle("active");
            } else {
                // Otherwise, select only one
                iconsArr.forEach((icon) => icon.classList.remove("active"));
                icon.classList.add("active");
            }
        });
    });
}