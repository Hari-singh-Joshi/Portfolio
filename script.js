document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor link behavior
            
            const targetId = this.getAttribute('href'); // Get the target section's ID
            const targetElement = document.querySelector(targetId); // Select the target section

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth', // Smooth scroll behavior
                    block: 'start' // Align the target at the start of the viewport
                });
            }
        });
    });
});
<script>
    document.querySelector('form').addEventListener('submit', function() {
        alert('Your message has been sent successfully!');
    });
</script>
