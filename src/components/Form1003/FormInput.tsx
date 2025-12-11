import { useState } from 'react';
import { Eye, EyeOff, HelpCircle } from 'lucide-react';

interface FormInputProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'number' | 'date' | 'password' | 'ssn';
  value: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  helpText?: string;
  error?: string;
  prefix?: string;
  suffix?: string;
  maxLength?: number;
  pattern?: string;
  className?: string;
}

export function FormInput({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  helpText,
  error,
  prefix,
  suffix,
  maxLength,
  pattern,
  className = '',
}: FormInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isSSN = type === 'ssn';
  const inputType = isSSN ? (showPassword ? 'text' : 'password') : type;

  const formatSSN = (val: string) => {
    const numbers = val.replace(/\D/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 5) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 5)}-${numbers.slice(5, 9)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;

    if (isSSN) {
      val = formatSSN(val);
    }

    onChange(val);
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-center justify-between">
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        {helpText && (
          <div className="relative group">
            <div className="text-gray-400 hover:text-gray-600 cursor-help">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div className="absolute right-0 top-6 z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="bg-gray-900 text-white text-sm rounded-lg p-3 shadow-lg w-64">
                {helpText}
                <div className="absolute -top-1 right-2 w-2 h-2 bg-gray-900 transform rotate-45"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            {prefix}
          </span>
        )}

        <input
          id={name}
          name={name}
          type={inputType}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          maxLength={isSSN ? 11 : maxLength}
          pattern={pattern}
          required={required}
          className={`w-full ${prefix ? 'pl-8' : 'pl-4'} ${suffix || isSSN ? 'pr-12' : 'pr-4'} py-3 border ${
            error ? 'border-red-500' : 'border-gray-300'
          } rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors`}
        />

        {suffix && !isSSN && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
            {suffix}
          </span>
        )}

        {isSSN && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        )}
      </div>

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
