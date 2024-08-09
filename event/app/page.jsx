import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.center}>
                <Image className={styles.logo} src="/logo.svg" alt="Traino Logo" width={350} height={150} priority />
            </div>
            <div className={styles.center}>
                <h1>Events</h1>
                <p>
                    Traino anordnar egna events och första startar 2025 i Stockholm. Nedanför listar vi de events som
                    Traino arrangerar. Klicka vidare för mer information om eventet.
                </p>
            </div>

            <div className={styles.eventitems}>
                <a
                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className={styles.calendar}>16 Aug.</div>
                    <h2>
                        Triathalon <span>-&gt;</span>
                    </h2>
                    <p>Stockholm. Även ett mini olympiskt triathalon.</p>
                </a>

                <a
                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className={styles.calendar}>N/A</div>
                    <h2>
                        E-Sport Challange <span>-&gt;</span>
                    </h2>
                    <p>Detta event planeras fortfarande.</p>
                </a>
            </div>
            <div className={styles.video}>
                <video muted autoPlay loop>
                    <source src="/200323_AbLightLeakBlue02_1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </main>
    );
}
