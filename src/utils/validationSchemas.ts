import * as Yup from "yup";

export const AuthValidationSchema= Yup.object({
    email: Yup.string()
        .email('Неверный адрес электронной почты')
        .required('Введите адрес электронной почты'),
    password: Yup.string()
        .min(8, 'Длина пароля не может быть меньше 8 символов')
        .max(20, 'Длина пароля не может превышать 20 символов')
        .required('Введите пароль')
});

export const RegValidationSchema= Yup.object({
    email: Yup.string()
        .email('Неверный адрес электронной почты')
        .required('Введите адрес электронной почты'),
    password: Yup.string()
        .min(8, 'Длина пароля не может быть меньше 8 символов')
        .max(20, 'Длина пароля не может превышать 20 символов')
        .required('Введите пароль')
})
