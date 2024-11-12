'use client';

import { useRouter } from 'next/navigation';
import "./page.css";

export default function ConfirmationPage() {
    const router = useRouter();

    const handleNavigate = () => {
        router.push('/triathlon/participants');
    };

    return (
        <main id="confirmationpage" className="gap">
            <figure className='box-shadow '>
                <img src={'/checkmark.png'} alt="confirmation checkmark" />
            </figure>

            <div>
                <h3>Tack!</h3>
                <p className='max-width'>
                    Du har nu blivit anmäld till tävlingen. Du kommer att
                    få en bekräftelse skickad till den angivna mailen.
                </p>
            </div>
            
            <button onClick={handleNavigate}>
                Visa deltagare
            </button>
        </main>
    );
}
