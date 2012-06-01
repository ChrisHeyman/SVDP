function initDocView() {
    // Create a dialog to confirm the case close operation.
    var deleteDoc = $('.deleteDoc');

    $('.deleteDoc').click(function(e){
	e.preventDefault();
	var targetUrl = $(this).attr("href");
	
	var confirmDeleteDoc = $('<div/>')
        .html('<p>Are you sure you wish to delete this document?</p>'
            + '<p>Deleted documents cannot be recovered.</p>')
        .dialog({
            autoOpen: true,
            buttons: {
                'Yes': function () {
			window.location.href = targetUrl;
                },
                'No': function () {
			$(this).dialog("close");
                }
            },
            modal: true,
            resizable: false,
            title: 'Confirm Delete Document'
        });
    });
}
function initDocUpload(){
	$(document).ready(function(){
		$("#upload").validate({
			rules: {
				name: {
					required: true,
					maxlength: 50
				},
				url: {
					required: true,
				}
			},
			messages: {
				name: {
					required: "File name must be provided",
					maxlength: "File name must not exceed 50 characters"
				},
				url: {
					required: "No File Specified",
				}
			},
			submitHandler: function(form) {
				form.submit();
			},
			errorElement: "span",
			errorPlacement: function(error, element){;
				error.addClass('help-inline');	
				if( element.attr('id') == 'url'){
					var parent = $('#err').parent().parent();
					parent.addClass('error');
					error.insertAfter( $('#err') );
				}
				else
				{
					var parent = element.parent().parent();
					parent.addClass('error');
					error.insertAfter(element);
				}
			}
		});//end validate
	});// end ready
}
function initDocAdd(){
	//url,name,add
	$(document).ready(function(){
		$("#add").validate({
			rules: {
				name: {
					required: true,
					maxlength: 50
				},
				url: {
					required: true,
					maxlength: 2083,
					url: true
				}
			},
			messages: {
				name: {
					required: "File name must be provided",
					maxlength: "File name must not exceed 50 characters"
				},
				url: {
					required: "URL must be provided",
					maxlength: "URL cannot exceed 2083 characters",
					url: "URL is invalid. Did you forget \"http://\"?"
				}
			},
			highlight: function(element, errorClass, validClass){
				element.parent().parent().addClass('error');
			},
			unhighlight: function(element, errorClass, validClass){
				var parent = element.parent().get(0);
				parent = parent.parent();
				element.parent().parent().removeClass('error');
			},
			submitHandler: function(form) {
				form.submit();
			},
			focusCleanup: true,
			errorElement: "span",
			errorPlacement: function(error, element){
				//var parent = element.parent().parent();
				//parent.addClass('error');
				error.insertAfter(element);
				error.addClass('help-inline');
			}
		});//end validate
	});// end ready
}