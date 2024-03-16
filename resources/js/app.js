import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

window.Echo.private('App.Models.User.1')
    .notification( (notification) => {
        console.log(notification);
    })
