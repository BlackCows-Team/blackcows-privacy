// 스크롤 시 상단 이동 버튼 표시
window.addEventListener('scroll', function() {
    const backToTop = document.querySelector('.back-to-top');
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

// 상단으로 스크롤
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 부드러운 앵커 링크 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // 네비게이션 바 높이 고려
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer를 이용한 스크롤 애니메이션
const animateElements = document.querySelectorAll('.scroll-animate');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // 한 번만 애니메이션 실행
        }
    });
}, {
    threshold: 0.2 // 요소의 20%가 보일 때 애니메이션 시작
});

animateElements.forEach(element => {
    observer.observe(element);
});

// 히어로 섹션 시차 효과 (Parallax Effect)
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.pageYOffset;
    hero.style.backgroundPositionY = -scrollPosition * 0.3 + 'px'; // 스크롤 속도의 30%로 배경 이동
});

// 카드 호버 효과 (기존 코드 유지)
document.querySelectorAll('.feature-card, .social-value-card, .team-card, .chatbot-feature, .productivity-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// AI 카드 특별 효과 (기존 코드 유지)
document.querySelectorAll('.ai-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(255,255,255,0.2)';
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.background = 'rgba(255,255,255,0.1)';
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// 페이지 로드 시 헤더 애니메이션 (기존 코드 유지)
window.addEventListener('load', function() {
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.animation = 'slideUp 1s ease-out';
});

// Initialize charts when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Age Distribution Chart
    const ageCtx = document.getElementById('ageDistributionChart').getContext('2d');
    new Chart(ageCtx, {
        type: 'bar',
        data: {
            labels: ['30대 이하', '40대', '50대', '60대', '70대 이상'],
            datasets: [{
                label: '비율(%)',
                data: [5.2, 12.4, 26.0, 43.0, 13.4],
                backgroundColor: [
                    'rgba(76, 175, 80, 0.7)',
                    'rgba(76, 175, 80, 0.7)',
                    'rgba(76, 175, 80, 0.7)',
                    'rgba(255, 152, 0, 0.7)',
                    'rgba(244, 67, 54, 0.7)'
                ],
                borderColor: [
                    'rgba(76, 175, 80, 1)',
                    'rgba(76, 175, 80, 1)',
                    'rgba(76, 175, 80, 1)',
                    'rgba(255, 152, 0, 1)',
                    'rgba(244, 67, 54, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 50
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: '연령대별 낙농가 경영주 비율'
                }
            }
        }
    });

    // Young Farmers Chart
    const youngFarmersCtx = document.getElementById('youngFarmersChart').getContext('2d');
    new Chart(youngFarmersCtx, {
        type: 'bar',
        data: {
            labels: ['20-24세', '25-29세', '30-34세', '35-39세', '40세 이상'],
            datasets: [{
                label: '농장 수',
                data: [16, 74, 185, 200, 4,785],
                backgroundColor: [
                    'rgba(76, 175, 80, 0.7)',
                    'rgba(76, 175, 80, 0.7)',
                    'rgba(76, 175, 80, 0.7)',
                    'rgba(76, 175, 80, 0.7)',
                    'rgba(158, 158, 158, 0.7)'
                ],
                borderColor: [
                    'rgba(76, 175, 80, 1)',
                    'rgba(76, 175, 80, 1)',
                    'rgba(76, 175, 80, 1)',
                    'rgba(76, 175, 80, 1)',
                    'rgba(158, 158, 158, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 5000
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: '연령대별 농장 수 분포'
                }
            }
        }
    });

    // Successor Status Chart
    const successorCtx = document.getElementById('successorChart').getContext('2d');
    new Chart(successorCtx, {
        type: 'doughnut',
        data: {
            labels: ['후계자 없음', '후계자 있음', '미정'],
            datasets: [{
                data: [38.9, 35.1, 26.0],
                backgroundColor: [
                    'rgba(244, 67, 54, 0.7)',
                    'rgba(76, 175, 80, 0.7)',
                    'rgba(255, 152, 0, 0.7)'
                ],
                borderColor: [
                    'rgba(244, 67, 54, 1)',
                    'rgba(76, 175, 80, 1)',
                    'rgba(255, 152, 0, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: '후계자 현황 분포'
                }
            }
        }
    });
});

// Add scroll animation
document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        // If element is in viewport
        if(position.top < window.innerHeight - 100) {
            element.classList.add('visible');
        }
    });
});
