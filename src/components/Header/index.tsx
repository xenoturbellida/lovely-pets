import logo from '../../assets/logo.svg';
import {Anchor} from "../ui/Anchor";


export const Header = () => {
    return (
        <header>
            <img src={logo} alt='лого' />
            <nav>
                <ul>
                    <li>
                        <Anchor href={'#'}>Главная</Anchor>
                    </li>
                    <li>
                        <Anchor href={'#'}>Все анкеты</Anchor>
                    </li>
                    <li>
                        <Anchor href={'#'}>Составить анкету</Anchor>
                    </li>
                </ul>
            </nav>
            <Anchor href={'#'} img='account'>Войти</Anchor>
        </header>
    )
}