import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Title',
    description: 'Contact Desc',
    keywords: ['Contact Page', 'Test', 'Info', '...'],
};

const ContactPage = () => {
    return (
        <>
            <div>Contact Page</div>
        </>
    );
};

export default ContactPage;
