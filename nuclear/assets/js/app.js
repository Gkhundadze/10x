const arrow = document.querySelector('.arrow')
const dropdown = document.querySelector('.dropdown')
let expanded = false

arrow.addEventListener('click', function () {

    if(expanded === true) {
        // this code goes if user clicked at least one time and "expanded" variable changed to true, so it means dropdown is expanded
        console.log('if');
        dropdown.classList.add('none')
        dropdown.classList.remove('block')
        expanded = !expanded
        this.style.transform = 'rotate(0deg)'

    }else {
        // this code goes when user wants to show/expand dropdown meenu
        // from dropdown removing display none property and adding block, this is achived by adding correspondin class, which is declared in css
        dropdown.classList.remove('none')
        dropdown.classList.add('block')
        expanded = !expanded
        this.style.transform = 'rotate(180deg)'
    }
    

    
})