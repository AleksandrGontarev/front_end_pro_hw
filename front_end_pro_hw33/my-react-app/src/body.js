import './body.css';
import { LoremIpsum } from 'react-lorem-ipsum';
 
const Body = () => {
    return (
        <div className='main-body'>
            <div className='main-body__item'>
                <LoremIpsum />
            </div>
        </div>
    );
}

export default Body;