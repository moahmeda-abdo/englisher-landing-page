'use client';
import { cn } from "@/lib/classnames/cn"; 
import {
    InputHTMLAttributes,
    forwardRef,
    useState,
    useId,
} from "react";
import { Eye, EyeOff } from "lucide-react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: React.ReactNode;
    name?: string; 

}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
    ({ label, error, icon, className, type, ...props }, ref) => {
        const [showPassword, setShowPassword] = useState(false);
        const isPassword = type === "password";
        const inputId = useId();

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
                        "flex items-center border-2 rounded-md px-3 py-2 gap-2 bg-white transition-all group focus-within:border-[#3182CE]",
                        error ? "border-red-500" : "border-gray-300"
                    )}
                >
                    {icon && <div className=" text-gray-500">{icon}</div>}

                    <input
                        id={inputId}
                        ref={ref}
                        {...props}
                        type={isPassword ? (showPassword ? "text" : "password") : type}
                        className={cn(
                            "flex-1 bg-transparent outline-none text-sm text-gray-900 placeholder-gray-400 p-1",
                            className
                        )}
                    />

                    {isPassword && (
                        <button
                            type="button"
                            onClick={() => setShowPassword(prev => !prev)}
                            className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                            tabIndex={-1}
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    )}
                </div>

                {error && <p className="text-sm text-red-500">{error}</p>}
            </div>
        );
    }
);

TextInput.displayName = "TextInput";
