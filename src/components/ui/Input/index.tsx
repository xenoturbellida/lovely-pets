import {FC} from "react";
import {FieldProps} from "formik";
import styles from './index.module.sass';


interface IInput {
    type?: string,
    label?: string,
    id?: string,
}

export const Input: FC<IInput & FieldProps> = ({
        field,
        form:
            {
                touched,
                errors
            },
        type='text',
        label='',
        id='',
        ...props
    }) => {
    return (
        <div>
            {
                label !== ''
                && id !== ''
                && <label htmlFor={id} className={styles.label}>{label}</label>
            }
                <input
                    type='text'
                    {...field}
                    {...props}
                    className={styles.input}
                />
            {
                touched[field.name]
                && errors[field.name]
                && <div>{ errors[field.name] }</div>
            }
        </div>
    )
}
