
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });


        
        // Gallery modal
        const galleryItems = document.querySelectorAll('.gallery-item');
        const imageModal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImg');
        const closeModal = document.getElementById('closeModal');
        
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const imgSrc = item.getAttribute('data-img');
                modalImg.src = imgSrc;
                imageModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });
        
        closeModal.addEventListener('click', () => {
            imageModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        imageModal.addEventListener('click', (e) => {
            if (e.target === imageModal) {
                imageModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        const membersData = [
            {
                name: "Арюна Намдылова",
                role: "Художественный руководитель",
                description: "Лауреат международных и всероссийских конкурсов, основатель ансамбля, преподаватель бурятской народной музыки.",
                img: "https://sun9-2.userapi.com/s/v1/ig2/fkQ87uZey_uxNGQjxDUg6anTHIA3uFEc6DWU9MZQ7EA2OuwLas1JK6WNyHtpKoILnbeoHM9c5sVQkAA0pGJVuiQv.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,1920x1280&from=bu&cs=1920x0"
            },
            {
                name: "Эльвира Байминова",
                role: "Вокалист ансамбля",
                description: "Горловое пение, игра на хомусе.",
                img: "/img/Elvira.jpg"
            },
            {
                name: "Саяна Янданова",
                role: "Вокалист ансамбля",
                description: "Исполнитель на национальных инструментах.",
                img: "/img/newFoto.jpg"
            },
            {
                name: "Ансамбль Аялга",
                role: "Вокалисты",
                description: "Участники ансамбля",
                img: "https://sun9-32.userapi.com/s/v1/ig2/1VHAm64Y5Xhn9LAR0YRgk7chXkxjMk70JF4T4Zq8jY3Cb5gFHx9AQ5jSqrbtBsXbHosBAyFTN67qAcn7crQZ-0ni.jpg?quality=95&as=32x25,48x38,72x56,108x85,160x125,240x188,360x282,480x376,540x423,640x501,720x564,1080x846,1280x1003&from=bu&cs=1280x0"
            }
        ];

        const track = document.getElementById('carouselTrack');
        const dotsContainer = document.getElementById('carouselDots');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        let currentIndex = 0;
        const slideCount = membersData.length;

        // Создание слайдов
        function createSlides() {
            membersData.forEach(member => {
                const slide = document.createElement('div');
                slide.className = 'carousel-slide';
                slide.innerHTML = `
                    <div class="member-card">
                        <div class="member-img">
                            <img src="${member.img}" alt="${member.name}">
                        </div>
                        <div class="member-info">
                            <h3>${member.name}</h3>
                            <div class="member-role">${member.role}</div>
                            <p>${member.description}</p>
                        </div>
                    </div>
                `;
                track.appendChild(slide);
            });
        }

        // Создание индикаторов (точек)
        function createDots() {
            for (let i = 0; i < slideCount; i++) {
                const dot = document.createElement('span');
                dot.className = 'dot' + (i === 0 ? ' active' : '');
                dot.addEventListener('click', () => goToSlide(i));
                dotsContainer.appendChild(dot);
            }
        }

        // Переключение на определенный слайд
        function goToSlide(index) {
            if (index < 0) index = slideCount - 1;
            if (index >= slideCount) index = 0;
            
            currentIndex = index;
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            // Обновление активной точки
            document.querySelectorAll('.dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === currentIndex);
            });
        }

        // События кнопок
        prevBtn.addEventListener('click', () => {
            goToSlide(currentIndex - 1);
        });

        nextBtn.addEventListener('click', () => {
            goToSlide(currentIndex + 1);
        });

        // Инициализация
        createSlides();
        createDots();

        
       
        
        // Change header style on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.backgroundColor = 'rgba(47, 79, 79, 0.98)';
            } else {
                header.style.backgroundColor = 'rgba(47, 79, 79, 0.95)';
            }
        });




        