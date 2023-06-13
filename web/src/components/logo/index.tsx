import Image from 'next/image';

const Logo = () => (
    <div className="relative h-[15px]">
        <Image src="/logo.svg" alt="Climatic Logo" fill />
    </div>
)