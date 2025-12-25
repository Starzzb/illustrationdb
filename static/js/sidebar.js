document.addEventListener('DOMContentLoaded', function () {
    const sidebarDrawer = document.getElementById('sidebarDrawer');
    const sidebarBackdrop = document.getElementById('sidebarBackdrop');
    const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');

    function toggleSidebar() {
        const isOpen = sidebarDrawer.classList.contains('show');
        if (isOpen) {
            closeSidebar();
        } else {
            openSidebar();
        }
    }

    function openSidebar() {
        sidebarDrawer.classList.add('show');
        sidebarBackdrop.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
        sidebarDrawer.classList.remove('show');
        sidebarBackdrop.classList.remove('show');
        document.body.style.overflow = '';
    }

    sidebarBackdrop.addEventListener('click', closeSidebar);
    sidebarToggleBtn.addEventListener('click', toggleSidebar);
});