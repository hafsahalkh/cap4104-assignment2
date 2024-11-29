document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('.tab_btn');
    const all_content = document.querySelectorAll('.content');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', (e) => {
            console.log(`Tab clicked: ${index}`);
            tabs.forEach(tab => { tab.classList.remove('active') });
            tab.classList.add('active');

            var line = document.querySelector('.line');
            line.style.width = e.target.offsetWidth + "px";
            line.style.left = e.target.offsetLeft + "px";

            all_content.forEach(content => { content.classList.remove('active') });
            all_content[index].classList.add('active'); // this adds an active class to the correct content based on the tab index
            
        });
    });
});
