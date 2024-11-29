// Apply parallax scrolling effect
window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;

    // Adjust parallax effect for each section
    document.querySelector('.mainBody').style.backgroundPosition = 'center ' + (scrollPosition * 0.5) + 'px';
    document.querySelector('.scoo1').style.backgroundPosition = 'center ' + (scrollPosition * 0.3) + 'px';
    document.querySelector('.scoo2').style.backgroundPosition = 'center ' + (scrollPosition * 0.4) + 'px';
    document.querySelector('.scoo3').style.backgroundPosition = 'center ' + (scrollPosition * 0.6) + 'px';
});
