window.addEventListener('resize', function(){
    if(window.innerWidth>=900){
        document.getElementById('toggle').checked = false;
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggle');
    
    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
});