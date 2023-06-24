import { sidebar, event, upcomingevent } from "../assets";

export const navLinks = [
    {
        'id': '/',
        'title': 'Home',
    },
    {
        'id': 'events',
        'title': 'About',
    },
    {
        'id': 'contact-us',
        'title': 'Contact Us',
    }
];

export const dashboards = [
    {
        'id': '/dashboard',
        'title': 'Dashboard',
        'icon': sidebar
    },
    {
        'id': '/dashboard/add-event',
        'title': 'Add Event',
        'icon': event
    },
    {
        'id': '/dashboard/event-lists',
        'title': 'List of Events',
        'icon': upcomingevent
    },
    {
        'id': '/upcoming-events',
        'title': 'Upcoming Events',
        'icon': upcomingevent
    }
]

