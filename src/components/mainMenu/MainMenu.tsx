import './mainMenu.scss';
import bubble from '../../resources/img/bubble.png'
import ship from '../../resources/img/ship_green.png';
import { useDispatch } from 'react-redux';
import { appDispatch } from '../../store/store';
import { tutorialStarted } from '../../store/gameSlice';


const MainMenu = () => {
    const dispatch: appDispatch = useDispatch();
    const clickHandler = () => {
        dispatch(tutorialStarted());
    }
    
    return (
        <div className="menu__layout">
            <div className='menu__alien'>
                <img className='menu__bubble' src={bubble} alt="Bubble"/>
                <img className='menu__ship' src={ship} alt="Alien ship"></img>       
            </div>
            <h1 className='menu__heading'>Поймай пришельца!</h1>
            <button className='menu__start' onClick={clickHandler}>НАЧАТЬ</button>
        </div>
    );
}

export default MainMenu;