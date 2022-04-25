import styles from './index.module.sass';
import {FC} from "react";
import logo from "../../assets/logo-simplified.svg";
import {AuthForm} from "../../components/Forms/Authentication";
import {RegisterForm} from "../../components/Forms/Register";
import {Anchor} from "../../components/ui/Anchor";


export const RegAuthPages: FC<{isAuth: boolean}> = ({isAuth}) => {
    return (
        <div className={styles.bg}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <img className={styles.logo} src={logo} alt='лого' />
                    <h1 className={styles.heading}>
                        {
                            isAuth
                            ? <> Войти на lovely Pets </>
                            : <> Создать аккаунт на Lovely Pets </>
                        }
                    </h1>
                </div>
                {
                    isAuth
                    ? <AuthForm />
                    : <RegisterForm />
                }
                <div className={styles.bottom}>
                    {
                        isAuth
                        ? <> Нет аккаунта? <Anchor href='/register'> Создать </Anchor> </>
                        : <> Есть аккаунт? <Anchor href='/login'> Войти </Anchor> </>
                    }
                </div>
            </div>
        </div>
    )
}
