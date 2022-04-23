import { Formik, Field } from "formik"
import {Input} from "../../ui/Input";
import {RegValidationSchema} from "../../../utils/validationSchemas";
import {observer} from "mobx-react";
import {useStores} from "../../../utils/store-utils";
import {Button} from "../../ui/Button";

export const RegisterForm = observer(() => {

    const {authStore: {register}} = useStores();

    return (
        <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={(values, {setSubmitting}) => {
                setSubmitting(false);
                register(values.email, values.password);
            }}
            validationSchema={RegValidationSchema}
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
                            Создать аккаунт
                        </Button>
                    </form>
                )
            }}
        </Formik>
    )
})