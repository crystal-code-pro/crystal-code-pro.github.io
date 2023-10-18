(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {
        $(document).on('submit', '#contact_form_submit', function (e) {
            e.preventDefault();
            var name = $('#name').val();
            var email = $('#email').val();
            var message = $('#message').val();
            var params = {
                from_name: name,
                email_id: email,
                message: message
            };

            if (name && email && message) {

                emailjs.send("service_3y24dzs","template_nlfnrvh", params);
                $('#contact_form_submit').prepend('<span class="alert alert-success email-success">Email sent successfully!</span>');
            } else {
                $('#contact_form_submit').children('.email-success').remove();
                $('#contact_form_submit').prepend('<span class="alert alert-danger email-success">All Fields are Required.</span>');
                $('#map').height('576px');
                $('.email-success').fadeOut(3000);
            }

        });
    })

}(jQuery));
