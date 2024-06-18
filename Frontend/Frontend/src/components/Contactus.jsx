import React from 'react'
import { useForm } from "react-hook-form";

const Contactus = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data)
    return (
        <>
            <div className="flex justify-center items-center h-screen bg-white dark:bg-slate-800 dark:text-white">
                <div className="card w-full max-w-md bg-white dark:bg-slate-800 dark:text-white p-6 rounded-md">
                    <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input
                            type="text"
                            placeholder="Enter your name"
                            className="input input-bordered w-full"
                            {...register("name", { required: "Name is required" })}
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                            type="email"
                            placeholder="Email address"
                            className="input input-bordered w-full"
                            {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Message</label>
                            <textarea
                            placeholder="Type your message"
                            className="textarea textarea-bordered w-full"
                            {...register("message", { required: "Message is required" })}
                            />
                            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                        </div>
                        <div className="flex justify-start">
                            <button type="submit" className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contactus
