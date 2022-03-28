import logo from '../../assets/logo.svg';
import {Anchor} from "../ui/Anchor";
import account_icon from '../../assets/icons/account.svg';

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
            <Anchor href={'#'} img={account_icon}>Войти</Anchor>
        </header>
    )
}