import { Home, FileText, CheckCircle } from 'lucide-react';
import { LoanType, SubmissionType } from '../../types/form1003';

interface Step1Props {
  submissionType: SubmissionType;
  applicationType: LoanType;
  onSubmissionTypeChange: (value: SubmissionType) => void;
  onApplicationTypeChange: (value: LoanType) => void;
}

export function Step1ApplicationType({
  submissionType,
  applicationType,
  onSubmissionTypeChange,
  onApplicationTypeChange,
}: Step1Props) {
  return (
    <div>
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
          <FileText className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Application Type</h2>
          <p className="text-gray-600">Choose your application path</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Submission Type</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label
              className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                submissionType === 'preapproval'
                  ? 'border-gray-900 bg-gray-100'
                  : 'border-gray-200 hover:border-gray-400'
              }`}
            >
              <input
                type="radio"
                name="submissionType"
                value="preapproval"
                checked={submissionType === 'preapproval'}
                onChange={(e) => onSubmissionTypeChange(e.target.value as SubmissionType)}
                className="sr-only"
              />
              <div className="flex items-start space-x-3">
                <CheckCircle className={`w-6 h-6 flex-shrink-0 ${submissionType === 'preapproval' ? 'text-green-600' : 'text-gray-300'}`} />
                <div>
                  <div className="font-semibold text-gray-900 mb-2">Pre-Approval</div>
                  <div className="text-sm text-gray-600 mb-3">
                    Get pre-approved quickly with basic information. Perfect for house hunting.
                  </div>
                  <div className="text-xs text-gray-500 space-y-1">
                    <div>✓ Basic personal information</div>
                    <div>✓ Income estimate</div>
                    <div>✓ Credit authorization</div>
                    <div>✓ Faster process (15-20 minutes)</div>
                  </div>
                </div>
              </div>
            </label>

            <label
              className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                submissionType === 'full_submission'
                  ? 'border-gray-900 bg-gray-100'
                  : 'border-gray-200 hover:border-gray-400'
              }`}
            >
              <input
                type="radio"
                name="submissionType"
                value="full_submission"
                checked={submissionType === 'full_submission'}
                onChange={(e) => onSubmissionTypeChange(e.target.value as SubmissionType)}
                className="sr-only"
              />
              <div className="flex items-start space-x-3">
                <CheckCircle className={`w-6 h-6 flex-shrink-0 ${submissionType === 'full_submission' ? 'text-green-600' : 'text-gray-300'}`} />
                <div>
                  <div className="font-semibold text-gray-900 mb-2">Full Application</div>
                  <div className="text-sm text-gray-600 mb-3">
                    Complete application with detailed information. Required for final approval.
                  </div>
                  <div className="text-xs text-gray-500 space-y-1">
                    <div>✓ Comprehensive details</div>
                    <div>✓ Employment history</div>
                    <div>✓ Assets and liabilities</div>
                    <div>✓ Complete process (30-45 minutes)</div>
                  </div>
                </div>
              </div>
            </label>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Loan Type</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                value: 'purchase' as LoanType,
                label: 'Purchase',
                description: 'Buy a new home',
                icon: Home
              },
              {
                value: 'refinance' as LoanType,
                label: 'Refinance',
                description: 'Refinance existing loan',
                icon: Home
              },
              {
                value: 'cashout' as LoanType,
                label: 'Cash-Out Refinance',
                description: 'Take cash from equity',
                icon: Home
              },
              {
                value: 'heloc' as LoanType,
                label: 'HELOC',
                description: 'Home equity line of credit',
                icon: Home
              },
            ].map((type) => (
              <label
                key={type.value}
                className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                  applicationType === type.value
                    ? 'border-gray-900 bg-gray-100'
                    : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                <input
                  type="radio"
                  name="applicationType"
                  value={type.value}
                  checked={applicationType === type.value}
                  onChange={(e) => onApplicationTypeChange(e.target.value as LoanType)}
                  className="sr-only"
                />
                <div className="flex items-center space-x-3">
                  <type.icon className={`w-5 h-5 ${applicationType === type.value ? 'text-blue-600' : 'text-gray-400'}`} />
                  <div>
                    <div className="font-semibold text-gray-900">{type.label}</div>
                    <div className="text-sm text-gray-600">{type.description}</div>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
