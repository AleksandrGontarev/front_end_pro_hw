import './body.css';
import { LoremIpsum } from 'react-lorem-ipsum';
 
const Body = () => {
    return (
        <div className='main-body'>
            <p className='main-body__item'><LoremIpsum p={10} /></p>
        </div>
    );
}

export default Body;