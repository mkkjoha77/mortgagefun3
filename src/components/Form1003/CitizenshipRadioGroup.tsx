import { HelpCircle } from 'lucide-react';

interface CitizenshipOption {
  value: string;
  label: string;
}

interface CitizenshipRadioGroupProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: CitizenshipOption[];
  required?: boolean;
  helpText?: string;
}

export function CitizenshipRadioGroup({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
  helpText,
}: CitizenshipRadioGroupProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-gray-700">
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

      <div className="border border-gray-200 rounded-lg p-4 bg-white space-y-3">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              required={required}
              className="w-4 h-4 text-gray-900 border-gray-300 focus:ring-2 focus:ring-gray-900"
            />
            <span className="text-sm text-gray-700 font-medium">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
