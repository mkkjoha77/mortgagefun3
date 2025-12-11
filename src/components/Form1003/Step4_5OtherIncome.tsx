import { DollarSign, Plus, Trash2, TrendingUp } from 'lucide-react';
import { OtherIncomeSource, SubmissionType } from '../../types/form1003';
import { FormInput } from './FormInput';
import { FormSelect } from './FormSelect';
import { INCOME_TYPE_OPTIONS } from '../../data/form1003Constants';

interface Step4_5Props {
  otherIncomeSources: OtherIncomeSource[];
  submissionType: SubmissionType;
  onChange: (sources: OtherIncomeSource[]) => void;
}

export function Step4_5OtherIncome({ otherIncomeSources, submissionType, onChange }: Step4_5Props) {
  const addIncomeSource = () => {
    onChange([
      ...otherIncomeSources,
      {
        id: `income_${Date.now()}`,
        type: '',
        monthlyAmount: 0,
        description: '',
      },
    ]);
  };

  const removeIncomeSource = (id: string) => {
    onChange(otherIncomeSources.filter((s) => s.id !== id));
  };

  const updateIncomeSource = (id: string, field: keyof OtherIncomeSource, value: string | number) => {
    onChange(
      otherIncomeSources.map((s) => (s.id === id ? { ...s, [field]: value } : s))
    );
  };

  const totalOtherIncome = otherIncomeSources.reduce(
    (sum, s) => sum + (Number(s.monthlyAmount) || 0),
    0
  );

  return (
    <div>
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
          <TrendingUp className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Other Income Sources</h2>
          <p className="text-gray-600">List any additional sources of income</p>
        </div>
      </div>

      <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="text-sm font-semibold text-blue-900 mb-2">About Other Income</h3>
        <div className="text-sm text-blue-800 space-y-2">
          <p>
            Include any regular income you receive from sources other than employment, such as:
            Social Security, disability, pension, rental income, child support, alimony, investment income, etc.
          </p>
          <p>
            <strong>Important:</strong> You don't need to disclose alimony, child support, or
            separate maintenance income unless you want it considered for qualifying for this loan.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Income Sources</h3>
          <button
            type="button"
            onClick={addIncomeSource}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Income Source</span>
          </button>
        </div>

        {otherIncomeSources.length === 0 && (
          <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
            <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-600 mb-2">No other income sources added</p>
            <p className="text-sm text-gray-500 mb-4">
              Add any regular income besides your employment salary
            </p>
            <button
              type="button"
              onClick={addIncomeSource}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              Add your first income source
            </button>
          </div>
        )}

        {otherIncomeSources.map((source, index) => (
          <div key={source.id} className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                <span className="text-sm font-semibold text-gray-700">Income Source #{index + 1}</span>
              </div>
              <button
                type="button"
                onClick={() => removeIncomeSource(source.id)}
                className="text-red-600 hover:text-red-700 p-2 hover:bg-red-50 rounded transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormSelect
                label="Income Type"
                name={`income_type_${source.id}`}
                value={source.type}
                onChange={(value) => updateIncomeSource(source.id, 'type', value)}
                options={INCOME_TYPE_OPTIONS}
                required
                helpText="Select the category that best describes this income"
              />
              <FormInput
                label="Monthly Amount"
                name={`income_amount_${source.id}`}
                type="number"
                value={source.monthlyAmount}
                onChange={(value) => updateIncomeSource(source.id, 'monthlyAmount', value)}
                required
                placeholder="1000"
                prefix="$"
                helpText="Enter the average monthly amount you receive"
              />
            </div>

            {['alimony', 'child_support'].includes(source.type) && (
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
                <p className="text-xs text-yellow-800">
                  <strong>Note:</strong> Alimony and child support income does not need to be disclosed
                  unless you want it considered for qualifying.
                </p>
              </div>
            )}
          </div>
        ))}

        {otherIncomeSources.length > 0 && (
          <div className="mt-6 p-6 bg-green-50 border-2 border-green-200 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm font-medium text-green-900">Total Other Monthly Income:</span>
                <p className="text-xs text-green-700 mt-1">
                  This amount will be added to your employment income for qualification
                </p>
              </div>
              <span className="text-2xl font-bold text-green-900">
                ${totalOtherIncome.toLocaleString()}
              </span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
