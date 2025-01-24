document.addEventListener('DOMContentLoaded', () => {
    const lectureItems = document.querySelectorAll('.lecture-item');
    const video = document.getElementById('course-video');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const searchBar = document.getElementById('search-bar');
    const feedbackForm = document.getElementById('feedback-form');
    const sectionTabs = document.querySelectorAll('.section-tab');
    const sections = document.querySelectorAll('.section');

    sectionTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            sectionTabs.forEach(t => t.classList.remove('active'));
            sections.forEach(s => s.classList.add('hidden'));
            tab.classList.add('active');
            const sectionId = `${tab.getAttribute('data-section')}-section`;
            document.getElementById(sectionId).classList.remove('hidden');
        });
    });

    lectureItems.forEach(item => {
        item.addEventListener('click', () => {
            lectureItems.forEach(el => el.classList.remove('active'));
            item.classList.add('active');
            const lectureNumber = item.getAttribute('data-lecture');
            video.src = `lecture-${lectureNumber}.mp4`;
            video.play();
        });
    });

    prevBtn.addEventListener('click', () => {
        const currentActive = document.querySelector('.lecture-item.active');
        const prevLecture = currentActive.previousElementSibling;
        
        if (prevLecture) {
            currentActive.classList.remove('active');
            prevLecture.classList.add('active');
            video.src = `lecture-${prevLecture.getAttribute('data-lecture')}.mp4`;
            video.play();
        }
    });

    nextBtn.addEventListener('click', () => {
        const currentActive = document.querySelector('.lecture-item.active');
        const nextLecture = currentActive.nextElementSibling;
        
        if (nextLecture) {
            currentActive.classList.remove('active');
            nextLecture.classList.add('active');
            video.src = `lecture-${nextLecture.getAttribute('data-lecture')}.mp4`;
            video.play();
        }
    });

    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        lectureItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(searchTerm) ? 'block' : 'none';
        });
    });

    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const feedback = feedbackForm.querySelector('textarea').value;
        if (feedback.trim()) {
            alert('Thank you for your feedback!');
            feedbackForm.reset();
        } else {
            alert('Please enter your feedback before submitting.');
        }
    });
});