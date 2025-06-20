import React from 'react'
import { useForm, } from "react-hook-form"
import { useNavigate } from 'react-router';


const HookForm = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid, isDirty },
    } = useForm({ defaultValues: { Age: 20 } });
    console.log(errors);
    const firstName = watch("Age")
    console.log(firstName);
    function onSubmit(data) {
        console.log("Form was Submitted", data);
    }
    function handelBack() {
        navigate(-1)
    }
    return (
        <>
            <button onClick={handelBack}>
                Go To Back

            </button>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label> First Name:</label>
                    <input {...register("FirstName", { required: "first Name is required" })} />
                    {errors?.FirstName?.message}
                </div>
                <br />
                <div>
                    <label> Last Name:</label>
                    <input {...register("LastName", { required: true })} />
                </div>
                <br />
                <div>
                    <label> Age:</label>
                    <input {...register("Age", { required: true })} />
                </div>
                <input disabled={!isDirty || !isValid} type="submit" />
            </form>
        </>
    )
}

export default HookForm