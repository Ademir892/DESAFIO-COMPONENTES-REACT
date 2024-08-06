import './styles.css';
import carImg from '../../../assets/car.png';

export default function Card() {

    return (
        <div className="dcr-card-container">
            <h2>Venha nos visitar</h2>
            <div className="dcr-card">
                <img src={carImg} alt="Carro" />
                <p>Lorem ipsum dolor</p>
            </div>
            <div className="dcr-card">
                <img src={carImg} alt="Carro" />
                <p>Lorem ipsum dolor</p>
            </div>
        </div>
    );
}