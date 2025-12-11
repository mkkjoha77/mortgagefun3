import { HelpCircle } from 'lucide-react';

interface DeclarationQuestionProps {
  question: string;
  borrowerAnswer: boolean | null;
  coBorrowerAnswer?: boolean | null;
  hasCoBorrower: boolean;
  onBorrowerChange: (value: boolean) => void;
  onCoBorrowerChange?: (value: boolean) => void;
  helpText?: string;
}

export function DeclarationQuestion({
  question,
  borrowerAnswer,
  coBorrowerAnswer,
  hasCoBorrower,
  onBorrowerChange,
  onCoBorrowerChange,
  helpText,
}: DeclarationQuestionProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white">
      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
        <div className="flex items-start flex-1">
          <p className="text-sm font-medium text-gray-900">{question}</p>
          {helpText && (
            <div className="relative group ml-2 flex-shrink-0">
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

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 md:flex-shrink-0">
          <div className="min-w-[140px]">
            <p className="text-xs font-semibold text-gray-700 mb-2 uppercase text-center">Borrower</p>
            <div className="flex space-x-4 justify-center">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name={`borrower_${question}`}
                  checked={borrowerAnswer === true}
                  onChange={() => onBorrowerChange(true)}
                  className="w-4 h-4 text-gray-900 border-gray-300 focus:ring-2 focus:ring-gray-900"
                />
                <span className="text-sm text-gray-700">Yes</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name={`borrower_${question}`}
                  checked={borrowerAnswer === false}
                  onChange={() => onBorrowerChange(false)}
                  className="w-4 h-4 text-gray-900 border-gray-300 focus:ring-2 focus:ring-gray-900"
                />
                <span className="text-sm text-gray-700">No</span>
              </label>
            </div>
          </div>

          {hasCoBorrower && onCoBorrowerChange && (
            <div className="min-w-[140px]">
              <p className="text-xs font-semibold text-gray-700 mb-2 uppercase text-center">Co-Borrower</p>
              <div className="flex space-x-4 justify-center">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name={`coborrower_${question}`}
                    checked={coBorrowerAnswer === true}
                    onChange={() => onCoBorrowerChange(true)}
                    className="w-4 h-4 text-gray-900 border-gray-300 focus:ring-2 focus:ring-gray-900"
                  />
                  <span className="text-sm text-gray-700">Yes</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name={`coborrower_${question}`}
                    checked={coBorrowerAnswer === false}
                    onChange={() => onCoBorrowerChange(false)}
                    className="w-4 h-4 text-gray-900 border-gray-300 focus:ring-2 focus:ring-gray-900"
                  />
                  <span className="text-sm text-gray-700">No</span>
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
