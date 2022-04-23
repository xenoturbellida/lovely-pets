import { Formik, Field } from "formik"
import {Input} from "../../ui/Input";
import {AuthValidationSchema} from "../../../utils/validationSchemas";
import {observer} from "mobx-react";
import {useStores} from "../../../utils/store-utils";
import {Button} from "../../ui/Button";

export const AuthForm = observer(() => {

    const {authStore: {logIn}} = useStores();

    return (
        <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={(values, {setSubmitting}) => {
                alert('Submit');
                setSubmitting(false);
                logIn(values.email, values.password);
            }}
            validationSchema={AuthValidationSchema}
        >
            {props => {
                const {
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                } = props;
                return (
                    <form onSubmit={handleSubmit}>
                        <Field
                            label='Email'
                            id='email'
                            name='email'
                            component={Input}
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder='email'
                        />
                        <Field
                            label='Пароль'
                            id='password'
                            name='password'
                            component={Input}
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder='Пароль'
                        />
                        <Button type="submit">
                            Войти
                        </Button>
                    </form>
                )
            }}
        </Formik>
    )
})