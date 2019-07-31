window.Parsley.on('field:error', function (fieldInstance) {
    fieldInstance.$element.tooltip('dispose');
    fieldInstance.$element.tooltip({
        animation: true,
        container: 'body',
        placement: 'top',
        title: function () {
            return fieldInstance.getErrorsMessages().join(';');
        }
    });
});

window.Parsley.on('field:success', function (fieldInstance) {
    fieldInstance.$element.popover('dispose');
});