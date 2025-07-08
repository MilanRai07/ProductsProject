import { ReactComponent as Home } from '../../assets/svg/contact-home.svg';
import { ReactComponent as Call } from '../../assets/svg/contact-call.svg';
import { ReactComponent as Mail } from '../../assets/svg/contact-mail.svg';
import { contactUs } from '../../types/contactus/ContactInfoTypes';

export const ContactInfoItem: contactUs[] = [
    {
        img: <Home />,
        title: 'Visit Us',
        detail: 'We welcome you to our office for any queries, support, or collaboration opportunities. Our team is always ready to assist you in person during working hours.',
        footer: 'Balkumari,Lanthaa Galli, Nepal'
    },
    {
        img: <Mail />,
        title: 'Contact Us',
        detail: 'You can reach out to us via email for general inquiries, support requests, or business proposals. We aim to respond within 24 hours.',
        footer: 'stlinternationalnepal@gmail.com'
    },
    {
        img: <Call />,
        title: 'Call Us',
        detail: 'Need immediate assistance or have questions? Feel free to give us a call. Our support team is available to help you with your concerns and guide you accordingly.',
        footer: '+977 9851136771' 
    },

]