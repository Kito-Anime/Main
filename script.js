// Hiệu ứng đổi màu Navbar khi cuộn trang
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Giả lập tương tác click vào nút xem phim
document.querySelector('.play-btn').addEventListener('click', () => {
    alert('Hệ thống đang tải trình phát video... (Cần tích hợp Backend để lấy URL video)');
});

// Giả lập tương tác chuyển trang khi click vào Anime Card
const cards = document.querySelectorAll('.anime-card');
cards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').innerText;
        console.log(`Đang điều hướng đến trang chi tiết của: ${title}`);
        // Trong thực tế sẽ dùng: window.location.href = `/anime/${id}`;
    });
});
