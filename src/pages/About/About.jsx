import AboutBanner from '../../components/Banner/AboutBanner';
import Dropdown from '../../components/Dropdown/Dropdown';
import './About.scss';

const About = () => {

    const fiability = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
    const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
    const service = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
    const security = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

    return (
        <div className='about-container'>
            <AboutBanner />
            <div className='dropdown-info'>
                <Dropdown title="Fiabilité">{fiability}</Dropdown>
                <Dropdown title="Respect">{respect}</Dropdown>
                <Dropdown title="Service">{service}</Dropdown>
                <Dropdown title="Sécurité">{security}</Dropdown>
            </div>
        </div>
    );
};

export default About;