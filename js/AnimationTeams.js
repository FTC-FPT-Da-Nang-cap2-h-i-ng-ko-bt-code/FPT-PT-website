const track = document.getElementById('awardsTrack');
const originalCards = Array.from(track.children);
const n = originalCards.length;

// 1. Nhân bản thẻ: [4 clone trước] [4 gốc] [4 clone sau]
originalCards.forEach(card => {
    const c1 = card.cloneNode(true);
    const c2 = card.cloneNode(true);
    track.insertBefore(c1, track.firstChild);
    track.appendChild(c2);
});

const allCards = Array.from(track.children);
const cardStep = 320 + (30 * 2); // --card-w + --card-m * 2
let index = n; 
let isTransitioning = false; // Cờ chặn để tránh lỗi bấm nhanh

function updateCarousel(instant = false) {
    if (instant) {
        track.style.transition = 'none';
    } else {
        track.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    }

    const screenCenter = window.innerWidth / 2;
    const offset = screenCenter - (index * cardStep) - (cardStep / 2);
    
    track.style.transform = `translateX(${offset}px)`;

    // Cập nhật hiệu ứng Zoom
    allCards.forEach((card, i) => {
        card.classList.remove('active', 'neighbor');
        if (i === index) card.classList.add('active');
        if (i === index - 1 || i === index + 1) card.classList.add('neighbor');
    });
}

// Hàm xử lý khi lướt xong
track.addEventListener('transitionend', () => {
    isTransitioning = false;
    
    // Nếu đang ở bộ clone cuối, nhảy về bộ gốc tương ứng (0 giây)
    if (index >= n * 2) {
        index = n;
        updateCarousel(true);
    }
    // Nếu đang ở bộ clone đầu, nhảy về bộ gốc tương ứng (0 giây)
    if (index < n) {
        index = n * 2 - 1;
        updateCarousel(true);
    }
});

function moveNext() {
    if (isTransitioning) return;
    isTransitioning = true;
    index++;
    updateCarousel();
}

// Chạy tự động
let autoPlay = setInterval(moveNext, 2500);

// Fix khi resize hoặc load
window.addEventListener('resize', () => updateCarousel(true));
window.addEventListener('load', () => updateCarousel(true));

// Tạm dừng khi di chuột vào để người dùng xem kỹ giải thưởng
track.addEventListener('mouseenter', () => clearInterval(autoPlay));
track.addEventListener('mouseleave', () => autoPlay = setInterval(moveNext, 2500));