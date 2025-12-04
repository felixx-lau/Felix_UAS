// =====================================================
// 1. Smooth Scroll untuk Link Navbar
// =====================================================
document.querySelectorAll('a.nav-link[href^="#"], a.btn[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// =====================================================
// 2. Navbar Shadow ketika Scroll
// =====================================================
const navbar = document.querySelector('.navbar-glass');

window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// =====================================================
// 3. Back to Top Button
// =====================================================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// =====================================================
// 4. Validasi Form Contact + Pesan Status
// =====================================================
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;

        // Cek tiap field required
        ['name', 'email', 'subject', 'message'].forEach(id => {
            const field = document.getElementById(id);
            if (!field.value.trim()) {
                field.classList.add('is-invalid');
                isValid = false;
            } else {
                field.classList.remove('is-invalid');
            }
        });

        if (!isValid) {
            formStatus.textContent = 'Please complete all required fields.';
            formStatus.style.color = '#e74c3c';
            return;
        }

        // Jika valid, tampilkan pesan sukses (simulasi kirim)
        formStatus.textContent = 'Thank you! Your message has been sent (simulation).';
        formStatus.style.color = '#2ecc71';
        contactForm.reset();
    });
}

// =====================================================
// 5. Interaksi Tombol "View Details" Project
//    (simulasi modal / detail project sederhana)
// =====================================================
document.querySelectorAll('.btn-project-detail').forEach(btn => {
    btn.addEventListener('click', () => {
        const project = btn.dataset.project;
        let message = '';

        if (project === 'hotel') {
            message = 'Hotel Reservation System: Aplikasi Java OOP untuk mengelola kamar, pelanggan, dan pembayaran.';
        } else if (project === 'pos') {
            message = 'Café POS System: Sistem kasir untuk FOH café dengan fitur input pesanan dan laporan sederhana.';
        } else if (project === 'portfolio') {
            message = 'Personal Portfolio: Website responsif untuk menampilkan profil, project, dan kontak.';
        }

        alert(message); // boleh dibilang sebagai fungsi interaktif sederhana
    });
});