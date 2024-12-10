$(document).ready(function () {
    // Open modal when tab button is clicked
    $(".tab-button").on("click", function () {
        const projectId = $(this).data("tab");
        $(`#${projectId}-modal`).fadeIn();
    });

    // Close modal when 'X' is clicked
    $(".close").on("click", function () {
        const modalId = $(this).data("modal");
        $(`#${modalId}`).fadeOut();
    });

    // Close modal when clicking outside modal content
    $(".modal").on("click", function (event) {
        if ($(event.target).is(".modal")) {
            $(this).fadeOut();
            location.reload();
        }
    });
});

function toggleModal(modalId, action) {
    const modal = document.getElementById(modalId);
    if (action === 'open') {
        modal.style.display = 'block'; // Show the modal
        document.body.classList.add('no-scroll'); // Disable body scroll
    } else if (action === 'close') {
        modal.style.display = 'none'; // Hide the modal
        document.body.classList.remove('no-scroll'); // Enable body scroll
    }
    
}

// Close modal on clicking the close button
document.querySelectorAll('.close').forEach((btn) => {
    btn.addEventListener('click', function () {
        const modalId = this.getAttribute('data-modal');
        toggleModal(modalId, 'close');
        location.reload();
    });
});

// function toggleModal(modalId, action) {
//     const modal = document.getElementById(modalId);
//     if (action === 'open') {
//         modal.style.display = 'block'; // Show the modal
//         document.body.classList.add('no-scroll'); // Disable body scroll
//     } else if (action === 'close') {
//         modal.style.display = 'none'; // Hide the modal
//         document.body.classList.remove('no-scroll'); // Enable body scroll
//     }
// }

// // Prevent closing the modal by clicking outside it
// document.addEventListener('click', function (event) {
//     const modals = document.querySelectorAll('.modal');
//     modals.forEach((modal) => {
//         // Check if the click is outside the modal content
//         if (event.target === modal) {
//             event.stopPropagation(); // Prevent modal close
//         }
//     });
// });

// // Close modal on clicking the close button
// document.querySelectorAll('.close').forEach((btn) => {
//     btn.addEventListener('click', function () {
//         const modalId = this.getAttribute('data-modal');
//         toggleModal(modalId, 'close');
//         location.reload(); // Reload the page if required
//     });
// });
