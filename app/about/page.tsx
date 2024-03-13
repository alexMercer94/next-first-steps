import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SEO Title',
    description: 'SEO Desc',
    keywords: ['About Page', 'Test', 'Info', '...'],
};

const AboutPage = () => {
    return (
        <>
            <div>About Page</div>
        </>
    );
};

export default AboutPage;
