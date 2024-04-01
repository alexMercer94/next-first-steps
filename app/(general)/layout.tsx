import Navbar from '@/components/navbar/Navbar';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center p-24">
                <span className="text-lg">Hi!!</span>
                {children}
            </div>
        </>
    );
}
