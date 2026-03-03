/**
 * SLIBF Internal System — Shared JavaScript
 * Handles: Auth, Data, Routing, UI Helpers
 * Backend TODO comments mark .NET API integration points
 */

// ================================================
//  IN-MEMORY DATA STORE (Replace with API calls)
// ================================================

const DB = {
    users: [
        { id: 'STU001', name: 'Ahmed Mohamed Ali', email: 'student@slibf.edu', password: 'student123', role: 'student', program: 'Master in Islamic Banking & Finance', status: 'Approved', fee: 2400, paid: 1200 },
        { id: 'STU002', name: 'Fadumo Hassan Jama', email: 'fadumo@slibf.edu', password: 'student456', role: 'student', program: 'BSc in Banking and Finance', status: 'Pending', fee: 1800, paid: 0 },
        { id: 'REG001', name: 'Omar Abdillahi Ismail', email: 'registrar@slibf.edu', password: 'registrar123', role: 'registrar', program: null, status: 'Staff', fee: 0, paid: 0 },
        { id: 'FIN001', name: 'Sahra Dahir Warsame', email: 'finance@slibf.edu', password: 'finance123', role: 'finance', program: null, status: 'Staff', fee: 0, paid: 0 },
        { id: 'TCH001', name: 'Dr. Hassan Abdi Mohamed', email: 'teacher@slibf.edu', password: 'teacher123', role: 'teacher', program: null, status: 'Staff', fee: 0, paid: 0 },
        { id: 'ADM001', name: 'Amina Dahir Warsame', email: 'admin@slibf.edu', password: 'admin123', role: 'admin', program: null, status: 'Staff', fee: 0, paid: 0 },
    ],

    courses: [
        { id: 'CRS001', name: 'Islamic Finance Principles', code: 'IFP301', credits: 3, teacherId: 'TCH001', studentIds: ['STU001', 'STU002', 'STU003'], semester: 'Spring 2026' },
        { id: 'CRS002', name: 'Banking Operations', code: 'BNK201', credits: 3, teacherId: 'TCH001', studentIds: ['STU001', 'STU004', 'STU005'], semester: 'Spring 2026' },
        { id: 'CRS003', name: 'Shariah Compliance', code: 'SHA401', credits: 3, teacherId: 'TCH002', studentIds: ['STU002', 'STU003'], semester: 'Spring 2026' },
        { id: 'CRS004', name: 'Risk Management Basics', code: 'RSK102', credits: 2, teacherId: 'TCH002', studentIds: ['STU004', 'STU005'], semester: 'Spring 2026' },
        { id: 'CRS005', name: 'Financial Accounting', code: 'ACC301', credits: 3, teacherId: 'TCH002', studentIds: ['STU001', 'STU003', 'STU005'], semester: 'Spring 2026' },
    ],

    teachers: [
        { id: 'TCH001', name: 'Dr. Hassan Abdi Mohamed', email: 'teacher@slibf.edu', phone: '+252 63 1234567', courseIds: ['CRS001', 'CRS002'], status: 'Active', username: 'dr.hassan' },
        { id: 'TCH002', name: 'Prof. Maryam Jama Nur', email: 'maryam@slibf.edu', phone: '+252 63 7654321', courseIds: ['CRS003', 'CRS004', 'CRS005'], status: 'Active', username: 'prof.maryam' },
        { id: 'TCH003', name: 'Lecturer Abdi Farah Ali', email: 'abdi.f@slibf.edu', phone: '+252 63 9876543', courseIds: [], status: 'Inactive', username: 'abdi.farah' },
    ],

    registrarsData: [
        { id: 'REG001', name: 'Omar Abdillahi Ismail', email: 'registrar@slibf.edu', username: 'omar.reg', status: 'Active' },
        { id: 'REG002', name: 'Hibo Ali Warsame', email: 'hibo@slibf.edu', username: 'hibo.reg', status: 'Inactive' },
    ],

    applications: [
        { id: 'APP001', name: 'Mustafa Abdi Nuur', program: 'Master in Islamic Banking', date: '2026-03-01', status: 'Pending' },
        { id: 'APP002', name: 'Hodan Yusuf Hersi', program: 'BSc in Banking & Finance', date: '2026-02-28', status: 'Approved' },
        { id: 'APP003', name: 'Bashir Ahmed Omar', program: 'Diploma in Risk Management', date: '2026-02-26', status: 'Rejected' },
        { id: 'APP004', name: 'Ikram Mohamed Said', program: 'MBA in Financial Management', date: '2026-02-24', status: 'Pending' },
        { id: 'APP005', name: 'Abdullahi Warsame', program: 'Advanced Diploma in FinTech', date: '2026-02-20', status: 'Pending' },
    ],

    students: [
        { id: 'STU001', name: 'Ahmed Mohamed Ali', email: 'ahmed@slibf.edu', program: 'Master in Islamic Banking', status: 'Approved', fee: 2400, paid: 1200 },
        { id: 'STU002', name: 'Fadumo Hassan Jama', email: 'fadumo@slibf.edu', program: 'BSc Banking & Finance', status: 'Pending', fee: 1800, paid: 0 },
        { id: 'STU003', name: 'Hodan Yusuf Hersi', email: 'hodan@slibf.edu', program: 'BSc Banking & Finance', status: 'Approved', fee: 1800, paid: 1800 },
        { id: 'STU004', name: 'Abdi Nuur Hassan', email: 'abdi@slibf.edu', program: 'Diploma in Risk Mgmt', status: 'Approved', fee: 900, paid: 450 },
        { id: 'STU005', name: 'Ikram Mohamed Said', email: 'ikram@slibf.edu', program: 'MBA in Financial Mgmt', status: 'Pending', fee: 2000, paid: 500 },
    ],

    news: [
        { id: 'N001', title: 'First Graduation Ceremony 2026', date: '2026-03-01', content: 'A historic milestone as SLIBF graduates its first cohort.', img: null },
        { id: 'N002', title: 'New AAOIFI Partnership Signed', date: '2026-02-15', content: 'SLIBF partners with AAOIFI for international certification.', img: null },
    ],

    attendance: [
        { date: '2026-02-10', subject: 'Islamic Finance Principles', status: 'Present' },
        { date: '2026-02-12', subject: 'Shariah Compliance', status: 'Present' },
        { date: '2026-02-14', subject: 'Banking Operations', status: 'Absent' },
        { date: '2026-02-17', subject: 'Risk Management Basics', status: 'Present' },
        { date: '2026-02-19', subject: 'Financial Accounting', status: 'Present' },
        { date: '2026-02-21', subject: 'Islamic Finance Principles', status: 'Late' },
        { date: '2026-02-24', subject: 'Banking Operations', status: 'Present' },
        { date: '2026-02-26', subject: 'Shariah Compliance', status: 'Present' },
    ],
};

// ================================================
//  AUTH HELPERS
// ================================================

const Auth = {
    login(email, password, role) {
        // TODO: Replace with .NET API endpoint: POST /api/auth/login
        const user = DB.users.find(u => u.email === email && u.password === password && u.role === role);
        if (user) {
            const session = { id: user.id, name: user.name, email: user.email, role: user.role, program: user.program, status: user.status, fee: user.fee, paid: user.paid };
            localStorage.setItem('slibf_session', JSON.stringify(session));
            localStorage.setItem('slibf_last_active', Date.now().toString());
            return session;
        }
        return null;
    },

    logout() {
        localStorage.removeItem('slibf_session');
        localStorage.removeItem('slibf_last_active');
        window.location.href = 'login.html';
    },

    getSession() {
        try { return JSON.parse(localStorage.getItem('slibf_session')); }
        catch { return null; }
    },

    requireRole(role) {
        const s = this.getSession();
        if (!s || s.role !== role) {
            window.location.href = 'login.html';
            return null;
        }
        return s;
    },

    touchActivity() {
        localStorage.setItem('slibf_last_active', Date.now().toString());
    },
};

// ================================================
//  AUTO LOGOUT (15-min inactivity simulation)
// ================================================

function initAutoLogout(timeoutMinutes = 15) {
    const TIMEOUT = timeoutMinutes * 60 * 1000;

    // Touch on user interaction
    ['click', 'keydown', 'mousemove', 'touchstart'].forEach(ev => {
        document.addEventListener(ev, Auth.touchActivity, { passive: true });
    });

    // Check every 60 seconds
    setInterval(() => {
        const last = parseInt(localStorage.getItem('slibf_last_active') || '0');
        if (Date.now() - last > TIMEOUT) {
            showToast('Session expired due to inactivity. Logging out…', 'warning');
            setTimeout(() => Auth.logout(), 2000);
        }
    }, 60000);
}

// ================================================
//  UI HELPERS
// ================================================

function showToast(msg, type = 'success') {
    let toast = document.getElementById('sys-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'sys-toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    const icons = { success: 'fa-check-circle', danger: 'fa-times-circle', warning: 'fa-exclamation-triangle' };
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="fas ${icons[type] || icons.success}"></i> ${msg}`;
    setTimeout(() => toast.classList.add('show'), 20);
    setTimeout(() => toast.classList.remove('show'), 3400);
}

function openModal(id) { document.getElementById(id)?.classList.add('open'); }
function closeModal(id) { document.getElementById(id)?.classList.remove('open'); }

function initModals() {
    document.querySelectorAll('[data-modal]').forEach(btn => {
        btn.addEventListener('click', () => openModal(btn.dataset.modal));
    });
    document.querySelectorAll('.modal-close, [data-close-modal]').forEach(el => {
        el.addEventListener('click', () => el.closest('.modal-overlay')?.classList.remove('open'));
    });
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });
    });
}

function switchPanel(id) {
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.sidebar-nav a').forEach(a => a.classList.remove('active'));
    const panel = document.getElementById(id);
    if (panel) panel.classList.add('active');
    document.querySelectorAll(`[data-panel="${id}"]`).forEach(a => a.classList.add('active'));
    const topbarTitle = document.getElementById('topbar-title');
    if (topbarTitle) {
        const link = document.querySelector(`[data-panel="${id}"]`);
        if (link) topbarTitle.textContent = link.querySelector('span')?.textContent || '';
    }
}

function initSidebar() {
    document.querySelectorAll('[data-panel]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            switchPanel(link.dataset.panel);
            document.querySelector('.sidebar')?.classList.remove('open');
        });
    });
    const hamburger = document.getElementById('hamburger-btn');
    const sidebar = document.querySelector('.sidebar');
    if (hamburger && sidebar) {
        hamburger.addEventListener('click', () => sidebar.classList.toggle('open'));
    }
}

function initLiveTime() {
    const el = document.getElementById('live-time');
    if (!el) return;
    const update = () => {
        const now = new Date();
        el.textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    };
    update();
    setInterval(update, 60000);
}

function animateCounter(el, target, duration = 1200) {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
        start = Math.min(start + step, target);
        el.textContent = Math.floor(start).toLocaleString();
        if (start >= target) clearInterval(timer);
    }, 16);
}

function initCounters() {
    document.querySelectorAll('[data-count]').forEach(el => {
        animateCounter(el, parseInt(el.dataset.count));
    });
}

function statusBadge(status) {
    const map = {
        'Approved': 'badge-success', 'Active': 'badge-success', 'Present': 'badge-success', 'Paid': 'badge-success', 'Pass': 'badge-success',
        'Pending': 'badge-warning', 'Late': 'badge-warning',
        'Rejected': 'badge-danger', 'Absent': 'badge-danger', 'Unpaid': 'badge-danger', 'Fail': 'badge-danger', 'Inactive': 'badge-danger',
        'Staff': 'badge-info', 'Admin': 'badge-info',
    };
    return `<span class="badge ${map[status] || 'badge-gray'}">${status}</span>`;
}

function formatCurrency(n) {
    return '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 2 });
}

function calcGrade(marks) {
    const m = parseFloat(marks);
    if (isNaN(m)) return { grade: '—', status: '—' };
    if (m >= 90) return { grade: 'A', status: 'Pass' };
    if (m >= 80) return { grade: 'B', status: 'Pass' };
    if (m >= 70) return { grade: 'C', status: 'Pass' };
    if (m >= 60) return { grade: 'D', status: 'Pass' };
    return { grade: 'F', status: 'Fail' };
}

function initTableSearch(inputId, tableId) {
    const input = document.getElementById(inputId);
    const tbody = document.querySelector(`#${tableId} tbody`);
    if (!input || !tbody) return;
    input.addEventListener('input', () => {
        const q = input.value.toLowerCase();
        tbody.querySelectorAll('tr').forEach(row => {
            row.style.display = row.textContent.toLowerCase().includes(q) ? '' : 'none';
        });
    });
}

// ================================================
//  NEWS (Registrar Shared)
// ================================================
function renderNewsCards(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = DB.news.map(n => `
        <div class="news-mgmt-card" id="news-${n.id}">
            <div style="height:100px;background:var(--primary-light);display:flex;align-items:center;justify-content:center;">
                <i class="fas fa-newspaper" style="font-size:2rem;color:var(--primary);opacity:0.4;"></i>
            </div>
            <div class="news-mgmt-card-body">
                <h4>${n.title}</h4>
                <p><i class="fas fa-calendar" style="margin-right:0.3rem;"></i>${n.date}</p>
            </div>
            <div class="news-mgmt-card-footer">
                <button class="btn btn-outline btn-sm" onclick="editNews('${n.id}')"><i class="fas fa-pen"></i> Edit</button>
                <button class="btn btn-danger  btn-sm" onclick="deleteNews('${n.id}')"><i class="fas fa-trash"></i></button>
            </div>
        </div>
    `).join('');
}

window.deleteNews = function (id) {
    DB.news = DB.news.filter(n => n.id !== id);
    document.getElementById(`news-${id}`)?.remove();
    showToast('News post deleted.', 'warning');
};
window.editNews = function (id) {
    const n = DB.news.find(x => x.id === id);
    if (!n) return;
    document.getElementById('news-title-input').value = n.title;
    document.getElementById('news-content-input').value = n.content;
    document.getElementById('news-editing-id').value = id;
    document.getElementById('news-modal-title').textContent = 'Edit News Post';
    openModal('news-modal');
};

// ================================================
//  EXPORT
// ================================================
window.Auth = Auth;
window.DB = DB;
window.showToast = showToast;
window.openModal = openModal;
window.closeModal = closeModal;
window.initModals = initModals;
window.switchPanel = switchPanel;
window.initSidebar = initSidebar;
window.initLiveTime = initLiveTime;
window.initCounters = initCounters;
window.statusBadge = statusBadge;
window.formatCurrency = formatCurrency;
window.calcGrade = calcGrade;
window.initTableSearch = initTableSearch;
window.renderNewsCards = renderNewsCards;
window.animateCounter = animateCounter;
window.initAutoLogout = initAutoLogout;
