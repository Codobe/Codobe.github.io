document.addEventListener('DOMContentLoaded', () => {
    let logbook = document.querySelector('#logbook');
    let www = document.querySelector('#www');
    let logbookSelectBtns = document.querySelectorAll('.logbook-select__button');
    let activeLayer = logbook;
    let activeBtn = logbookSelectBtns[0];

    toggleLogbook(logbookSelectBtns, activeBtn, activeLayer)
    initLogbookNavi('logbook');
    initLogbookNavi('www');
});

function toggleLogbook(btns, activeBtn, activeLayer) {
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            activeBtn.classList.remove('active');
            btn.classList.add('active');
            activeBtn = btn;
            activeLayer.classList.remove('active');
            activeLayer = document.querySelector(`#${btn.dataset.logbook}`);
            activeLayer.classList.add('active');
        })
    });
}

function initLogbookNavi(book) {
    let next = document.querySelector(`#${book} .logbook__navigation .next`);
    let prev = document.querySelector(`#${book} .logbook__navigation .prev`);
    let entries = document.querySelectorAll(`#${book} .logbook__entry`);
    let idx = 0;

    next.addEventListener('click', () => {
        if (idx < entries.length-1) {
            entries[idx].classList.remove('visible');
            idx++;
            entries[idx].classList.add('visible');
        }
    });

    prev.addEventListener('click', () => {
        if (idx > 0) {
            entries[idx].classList.remove('visible');
            idx--;
            entries[idx].classList.add('visible');
        }
    });
}