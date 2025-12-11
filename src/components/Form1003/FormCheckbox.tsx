import { HelpCircle } from 'lucide-react';

interface FormCheckboxProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  required?: boolean;
  helpText?: string;
  error?: string;
  className?: string;
}

export function FormCheckbox({
  label,
  name,
  checked,
  onChange,
  required = false,
  helpText,
  error,
  className = '',
}: FormCheckboxProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-start space-x-3">
        <input
          id={name}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          required={required}
          className="mt-1 w-5 h-5 text-gray-900 border-gray-300 rounded focus:ring-2 focus:ring-gray-900"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <label htmlFor={name} className="text-sm font-medium text-gray-700 cursor-pointer">
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
        </div>
      </div>

      {error && (
        <p className="text-sm text-red-600 ml-8">{error}</p>
      )}
    </div>
  );
}
