import Link from 'next/link';
import footer from './footer.module.css';

export const Footer = () => {
    return (
    <footer className={footer.wrapper}>
        <Link href='/q-a'>Вопросы-ответы</Link>
        <Link href ='/about'>О нас</Link>
    </footer>
    );
}