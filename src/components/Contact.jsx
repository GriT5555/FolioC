export default function ContactBlock() {
    const mymail = "MathiasSupnCo@gmail.com";
    const subject ="Project inquiry";
    const body = "Hello,\n\nI visited your portfolio and I'm interested in discussing a potential collaboration.\n\nBest regards,";
    const mailtoLink = `mailto:${mymail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return(
        <section className="ContactBlock" id="Contact">
            <h1>Me contacter</h1>
            <div>
                <div>
                    <h2>Ouvert aux opportunités</h2>
                    <br/>
                    <p className="CTAtext">
                        À ce jour, je suis disponible et prèt à répondre a toute offre qui correspondrai a un service ou domaine compétence présenté, mais également à apprendre.
                        <br/><br/>
                        En locurence on parlera d'applications web partielle ou complètes, mono ou multi pages incluant des services nécessitant une OU plusieurs API tierces.
                        <br /><br/>
                        Les dépots de codes, ou repos, des projets en cours sont actualisés. Je développe, par passion et par un certain utilitarisme, paradoxalement également personnel, les compétences dans divers domaines mentionnés <a href="#InProgress">ici</a>
                        <br/><br/>
                    </p>
                </div>
                <a href={mailtoLink} className="CTAbtn">
                    Alors ? Quels sont vos projets ? 
                </a>
            </div>
        </section>
    )
}