 

$(document).ready(function() {
    $('#contactForm').on('submit', function(e) {
        e.preventDefault(); // Prevent form from submitting normally

        try {
            var formData = {
                name: $('#name').val().trim(),
                email: $('#email').val().trim(),
                subject: $('#subject').val().trim(),
                message: $('#message').val().trim()
            };

            // Basic validation on the client-side
            if (!formData.name || !formData.email || !formData.subject || !formData.message) {
                Swal.fire({
                    icon: 'error',
                    title: 'Validation Error',
                    text: 'Please fill in all fields.',
                });
                return;
            }

            // Make the AJAX call to send the data to the server
            $.ajax({
                url: 'http://localhost:5166/api/PortfolioApp/Send_Email', // API endpoint in .NET Core
                type: 'POST',
                headers: {
                    'Content-Type': 'application/json' // Ensure the correct content type
                },
                data: JSON.stringify(formData), // Send the form data as JSON in the body
                beforeSend: function() {
                    $('#submitBtn').text('Sending...');
                },
                success: function(response) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Message Sent',
                        text: response.success || 'Your message has been sent successfully!',
                    });

                    $('#contactForm')[0].reset(); // Reset form after successful submission
                    $('#submitBtn').text('Send Message');
                },
                error: function(xhr, status, error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Error sending message. Please try again later.',
                    });

                    console.error('Error Response:', xhr.responseText);
                    $('#submitBtn').text('Send Message');
                }
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Unexpected Error',
                text: 'An unexpected error occurred. Please try again later.',
            });

            console.error('Caught Error:', error);
            $('#submitBtn').text('Send Message');
        }
    });
});
  
 
$(document).ready(function () {
    $('#subscribeForm').on('submit', function (e) {
        e.preventDefault(); // Prevent normal form submission
debugger;
        var email = $('#email').val().trim();

        // Basic email validation
        if (!email) {
            $('#alert').text('Email address is required.').fadeIn().css('color', 'red');
            return;
        }

        // Payload for API
        var formData = {
            name: 'Subscriber', // Default name for subscription
            email: email,
            subject: 'Subscription Confirmation',
            message: 'Thank you for subscribing to our service!'
        };

        // AJAX request to the API
       // Basic validation on the client-side
       if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        Swal.fire({
            icon: 'error',
            title: 'Validation Error',
            text: 'Please fill in all fields.',
        });
        return;
    }
debugger;
    // Make the AJAX call to send the data to the server
    $.ajax({
        url: 'http://localhost:5166/api/PortfolioApp/Send_Email', // API endpoint in .NET Core
        type: 'POST',
        headers: {
            'Content-Type': 'application/json' // Ensure the correct content type
        },
        data: JSON.stringify(formData), // Send the form data as JSON in the body
        beforeSend: function() {
            $('#submitBtn').text('Sending...');
        },
        success: function(response) {
            Swal.fire({
                icon: 'success',
                title: 'Message Sent',
                text: response.success || 'Your message has been sent successfully!',
            });

            $('#contactForm')[0].reset(); // Reset form after successful submission
            $('#submitBtn').text('Send Message');
        },
        error: function(xhr, status, error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error sending message. Please try again later.',
            });

            console.error('Error Response:', xhr.responseText);
            $('#submitBtn').text('Send Message');
        }
    });
    });
});
