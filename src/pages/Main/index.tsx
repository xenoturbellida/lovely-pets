import {Header} from "../../components/Header";
import {Button} from "../../components/ui/Button";
import styles from './index.module.sass';
import {AuthForm} from "../../components/Forms/Authentication";
import {RegisterForm} from "../../components/Forms/Register";

export const MainPage = () => {
    return (
        <>
            <Header />
            <div className={styles.test}>
                <Button>Hello</Button>
                <Button mode='secondary'>Hi</Button>
                <Button mode='alternative'>Love</Button>
            </div>
            <RegisterForm />
            <AuthForm />
        </>

    )
}

// User:
// lena@gmail.com
// 12345678