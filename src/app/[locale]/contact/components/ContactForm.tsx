'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormValues } from "../validation/contact.schema";
import { TextInput } from '@/shared/components/TextInput';
import { TextArea } from '@/shared/components/TextArea';
import { useTranslations } from "use-intl";

export const ContactForm = () => {
    const t = useTranslations();
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
                <span className="text-[#E50616] ">{t("contactTitle")}</span> {t("contactSubtitle")}
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center w-full gap-5'>
                <TextInput
                    type="text"
                    placeholder={t("contactNamePlaceHolder")}
                    {...register("name")}
                    error={errors.name?.message}
                />
                <TextInput
                    type="text"
                    placeholder={t("contactPhonePlaceHolder")}
                    {...register("phone")}
                    error={errors.phone?.message}
                />
                <TextInput
                    type="text"
                    placeholder={t("contactEmailPlaceHolder")}
                    {...register("email")}
                    error={errors.email?.message}
                />
                <TextArea
                    maxLength={1200}
                    placeholder={t("contactMessagePlaceHolder")}
                    showCounter={true}
                    className='h-[400px]'
                    {...register("message")}
                    error={errors.message?.message}
                />
                <button type="submit" className="bg-[#000000] text-white py-3 px-6 rounded-md w-full">
                    {t("contactSubmit")}
                </button>
            </form>
        </div>
    );
};
