lucide.createIcons();

        // Mobile Menu
        const mobileToggle = document.getElementById('mobileToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        
        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });

        // Close menu on link click
        document.querySelectorAll('.mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });

        // FAQ Accordion
        const faqBtns = document.querySelectorAll('.faq-btn');
        faqBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const content = btn.nextElementSibling;
                const chevron = btn.querySelector('.chevron');
                
                // Toggle current
                content.classList.toggle('open');
                chevron.classList.toggle('rotate');
                btn.classList.toggle('active');

                // Close others (optional - standard accordion behavior)
                faqBtns.forEach(otherBtn => {
                    if (otherBtn !== btn) {
                        otherBtn.nextElementSibling.classList.remove('open');
                        otherBtn.querySelector('.chevron').classList.remove('rotate');
                        otherBtn.classList.remove('active');
                    }
                });
            });
        });

        // Form Submit
        document.getElementById('leadForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = "Submitting...";
            btn.style.opacity = "0.7";
            
            setTimeout(() => {
                alert("Thank you for booking! We will contact you shortly.");
                e.target.reset();
                btn.innerText = originalText;
                btn.style.opacity = "1";
            }, 1500);
        });