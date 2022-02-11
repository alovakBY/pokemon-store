import { memo } from "react";

export const ButtonSubmit = memo(
    ({ text, disabled, type, callback, className }) => {
        return (
            <button
                className={className}
                disabled={disabled}
                type={type}
                onClick={callback}
            >
                {text}
            </button>
        );
    }
);
