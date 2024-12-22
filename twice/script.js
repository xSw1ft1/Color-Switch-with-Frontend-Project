function clicker() {
    const circle = document.querySelector('.circle');
    const label = document.querySelector('.label');
    const badi = document.querySelector('body');

    if (circle.classList.contains('dark-circle')) {
        circle.classList.remove('dark-circle');
        label.classList.remove('dark-label');
        circle.classList.add('toggleOff');
        circle.classList.remove('toggleOn');
        badi.classList.remove('darki');
    } else {
        circle.classList.add('dark-circle');
        label.classList.add('dark-label');
        circle.classList.add('toggleOn');
        circle.classList.remove('toggleOff');
        badi.classList.add('darki');
        
    }
}
