function submit() {

	// Get the form.
	var form = $('#ajax-contact');

	// Get the messages div.
	var formMessages = $('#form-messages');
    $(formMessages).removeClass('bg-danger');
    $(formMessages).addClass('bg-success');

    // Set the message text.
    $(formMessages).text('Your message successfully sent');

    // Clear the form.
    $('#name, #email, #message').val('');

};
