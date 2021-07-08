import { object, string, ref } from "yup";

export const createUserSchema = object({
    body: object({
        firstName: string().required('First name is required!'),
        lastName: string().required('Last name is required!'),
        password: string()
            .required('Password is required!')
            .min(8, 'Password is too short - should be 8 chars minimum!')
            .matches(/^[a-zA-Z0-9_.-]*$/, "Password can only contain Latin letters!"),
        passwordConfirmation: string().oneOf(
            [ref("password"), null],
            "Password must match!"
        ),
        email: string()
            .email('Must be a valid email!')
            .required('Email is required!')
    })
})

export const createUserSessionSchema = object({
    body: object({
        password: string()
            .required('Password is required!')
            .min(8, 'Password is too short - should be 8 chars minimum!')
            .matches(/^[a-zA-Z0-9_.-]*$/, "Password can only contain Latin letters!"),
        email: string()
            .email('Must be a valid email!')
            .required('Email is required!')
    })
})