document.addEventListener('DOMContentLoaded', function() {
        const attendeeID = localStorage.getItem('attendeeID') || 'Not Set';
        const placeholders = document.querySelectorAll('.attendee-id-placeholder');

        placeholders.forEach(function(placeholder) {
            const prefix = placeholder.getAttribute('data-prefix') || '';
            const suffix = placeholder.getAttribute('data-suffix') || '';
            const fullText = `${prefix}${attendeeID}${suffix}`;

            // Update the placeholder text
            placeholder.textContent = fullText;

            // Set up click event to copy the full text
            const container = placeholder.parentElement;
            container.addEventListener('click', function() {
                navigator.clipboard.writeText(fullText).then(() => {
                    console.log("Text copied to clipboard");
                }).catch(err => {
                    console.error("Could not copy text: ", err);
                });
            });
        });

        // Handle static text copy functionality
        const staticTextElements = document.querySelectorAll('.static-text-copy');

        staticTextElements.forEach(function (staticElement) {
            const staticText = staticElement.textContent.trim(); // Get the static text

        // Set up click event to copy the static text
            staticElement.addEventListener('click', function () {
                navigator.clipboard.writeText(staticText).then(() => {
                    console.log("Static text copied to clipboard");
                }).catch(err => {
                    console.error("Could not copy static text: ", err);
                });
            });
        });
});
