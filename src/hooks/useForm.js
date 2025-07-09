import { useState } from "react";




export const useForm = (initialForm = {}) => {

    const [formState, setForState] = useState(initialForm)


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setForState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => {

        setForState(initialForm)

    }



    return {
        ...formState,// si queremos desestructurar todos las propiedades de formState y usarlas al crear el objeto
        formState,
        onInputChange,
        onResetForm
    }
}
