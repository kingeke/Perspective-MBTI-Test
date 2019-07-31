export const Notifications = (message, type) => {
    var content = {};
    content.message = message;
    content.icon = 'fa fa-bell';
    content.title = 'Notification:';

    $.notify(content, {
        type: type,
        animate: {
            enter: 'animated slideInUp',
            exit: ''
        },
        placement: {
            from: 'bottom',
            align: 'right'
        },
        delay: 3000
    });
}