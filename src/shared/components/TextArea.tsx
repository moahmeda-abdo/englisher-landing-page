'use client';

import {
    TextareaHTMLAttributes,
    forwardRef,
    useId,
    useState,
    useEffect,
} from "react";
import { cn } from "@/lib/classnames/cn";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    icon?: React.ReactNode;
    maxLength?: number;
    showCounter?: boolean;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    (
        {
            label,
            error,
            icon,
            className,
            maxLength = 400,
            showCounter = true,
            value,
            onChange,
            ...props
        },
        ref
    ) => {
        const inputId = useId();
        const [charCount, setCharCount] = useState(0);

        useEffect(() => {
            if (typeof value === "string") {
                setCharCount(value.length);
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setCharCount(e.target.value.length);
            onChange?.(e);
        };

        const isOverLimit = charCount > maxLength;

        return (
            <div className="space-y-1 w-full group">
                {label && (
                    <label
                        htmlFor={inputId}
                        className={cn(
                            "block text-sm font-medium transition-colors",
                            error
                                ? "text-red-500"
                                : "text-gray-400 group-focus-within:text-[#3182CE]"
                        )}
                    >
                        {label}
                    </label>
                )}

                <div
                    className={cn(
                        "flex border-2 rounded-md px-3 py-2 gap-2 bg-white transition-all group focus-within:border-[#3182CE]",
                        error ? "border-red-500" : "border-gray-300"
                    )}
                >
                    {icon && <div className="text-gray-500 mt-1">{icon}</div>}

                    <textarea
                        id={inputId}
                        ref={ref}
                        maxLength={maxLength}
                        value={value}
                        onChange={handleChange}
                        {...props}
                        rows={4}
                        className={cn(
                            "flex-1 bg-transparent outline-none text-sm text-gray-900 placeholder-gray-400 resize-none w-full",
                            className
                        )}
                    />
                </div>

                <div className="flex items-center justify-between">
                    {error && <p className="text-sm text-red-500">{error}</p>}
                    <div className="flex justify-between items-center">
                        {showCounter && (
                            <div
                                className={cn(
                                    "text-xs text-right w-full",
                                    isOverLimit ? "text-red-500" : "text-gray-400"
                                )}
                            >
                                {charCount}/{maxLength}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        );
    }
);

TextArea.displayName = "TextArea";
