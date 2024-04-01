import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pricing Title',
    description: 'Pricing Desc',
    keywords: ['Pricing Page', 'Test', 'Info', '...'],
};

const PricingPage = () => {
    return (
        <>
            <div>Pricing Page</div>
        </>
    );
};

export default PricingPage;
