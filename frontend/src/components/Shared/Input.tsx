interface InputProps {
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    required?: boolean;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
    error?: string | undefined;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export const Input = (
    { name, label, type, placeholder, required, value, onChange, onBlur, onFocus, onInput, error }: InputProps
) => {
    return (
        <label htmlFor="">
            <p className="label">{label}</p>
            <input 
                placeholder={placeholder} 
                type={type} 
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                onInput={onInput}
                value={value}
                name={name}
                required={required}
                className="border-2" 
            />
            <p className="text-red-500 text-sm">{error}</p>
        </label>
    )
}