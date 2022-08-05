// Accordian
let acc = document.querySelectorAll('.acc-but');
acc.forEach(a => a.addEventListener('click', acco));

function acco() {
    let panels = document.querySelectorAll('.acc');
    let panel = this.nextElementSibling;
    panel.style.display === 'block' ? panel.style.display = 'none' : panel.style.display = 'block';
    for (let i = 0; i < panels.length; i++) {
        if (panels[i] !== panel) {
            panels[i].style.display = 'none';
        }
    }

}