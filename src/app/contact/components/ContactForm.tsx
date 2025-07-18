'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormValues } from "../validation/contact.schema";
import { TextInput } from '@/shared/components/TextInput';
import { TextArea } from '@/shared/components/TextArea';

export const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = (data: ContactFormValues) => {
        console.log(data);
    };

    return (
        <div className='w-full'>
            <h1 className="text-[32px] font-bold text-[#0C0C0C] mb-4 capitalize">
                <span className="text-[#E50616] ">Contact</span> form
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center w-full gap-5'>
                <TextInput
                    type="text"
                    placeholder="Your Name*"
                    {...register("name")}
                    error={errors.name?.message}
                />
                <TextInput
                    type="text"
                    placeholder="Phone Number*"
                    {...register("phone")}
                    error={errors.phone?.message}
                />
                <TextInput
                    type="text"
                    placeholder="Email*"
                    {...register("email")}
                    error={errors.email?.message}
                />
                <TextArea
                    maxLength={1200}
                    placeholder="Message*"
                    showCounter={true}
                    className='h-[400px]'
                    {...register("message")}
                    error={errors.message?.message}
                />
                <button type="submit" className="bg-[#000000] text-white py-3 px-6 rounded-md w-full">
                    Send Message
                </button>
            </form>
        </div>
    );
};
