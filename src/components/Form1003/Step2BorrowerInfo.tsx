import { User, Users } from 'lucide-react';
import { BorrowerInfo, SubmissionType } from '../../types/form1003';
import { FormInput } from './FormInput';
import { FormSelect } from './FormSelect';
import { FormCheckbox } from './FormCheckbox';
import { CITIZENSHIP_OPTIONS, MARITAL_STATUS_OPTIONS, RESIDENCE_TYPE_OPTIONS, US_STATES } from '../../data/form1003Constants';

interface Step2Props {
  borrower: BorrowerInfo;
  submissionType: SubmissionType;
  hasCoBorrower: boolean;
  onChange: (field: keyof BorrowerInfo, value: string | number) => void;
  onCoBorrowerChange: (value: boolean) => void;
}

export function Step2BorrowerInfo({ borrower, submissionType, hasCoBorrower, onChange, onCoBorrowerChange }: Step2Props) {
  const isFullSubmission = submissionType === 'full_submission';

  return (
    <div>
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
          <User className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Borrower Information</h2>
          <p className="text-gray-600">Tell us about yourself</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            <FormInput
              label="First Name"
              name="borrower_firstName"
              value={borrower.firstName}
              onChange={(value) => onChange('firstName', value)}
              required
              placeholder="John"
            />
            <FormInput
              label="Middle Name"
              name="borrower_middleName"
              value={borrower.middleName}
              onChange={(value) => onChange('middleName', value)}
              placeholder="Michael"
            />
            <FormInput
              label="Last Name"
              name="borrower_lastName"
              value={borrower.lastName}
              onChange={(value) => onChange('lastName', value)}
              required
              placeholder="Smith"
            />
            <FormInput
              label="Suffix"
              name="borrower_suffix"
              value={borrower.suffix}
              onChange={(value) => onChange('suffix', value)}
              placeholder="Jr., Sr., III"
            />
          </div>
        </div>

        {isFullSubmission && (
          <>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
              <FormInput
                label="Social Security Number"
                name="borrower_ssn"
                type="ssn"
                value={borrower.ssn}
                onChange={(value) => onChange('ssn', value)}
                required
                placeholder="XXX-XX-XXXX"
                helpText="Your SSN is required for credit check and identity verification. It will be kept secure and confidential."
              />
              <FormInput
                label="Date of Birth"
                name="borrower_dob"
                type="date"
                value={borrower.dob}
                onChange={(value) => onChange('dob', value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormSelect
                label="Citizenship Status"
                name="borrower_citizenship"
                value={borrower.citizenship}
                onChange={(value) => onChange('citizenship', value)}
                options={CITIZENSHIP_OPTIONS}
                required
              />
              <FormSelect
                label="Marital Status"
                name="borrower_maritalStatus"
                value={borrower.maritalStatus}
                onChange={(value) => onChange('maritalStatus', value)}
                options={MARITAL_STATUS_OPTIONS}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput
                label="Number of Dependents"
                name="borrower_dependentsCount"
                type="number"
                value={borrower.dependentsCount}
                onChange={(value) => onChange('dependentsCount', value)}
                placeholder="0"
              />
              <FormInput
                label="Ages of Dependents"
                name="borrower_dependentsAges"
                value={borrower.dependentsAges}
                onChange={(value) => onChange('dependentsAges', value)}
                placeholder="e.g., 5, 8, 12"
                helpText="Enter ages separated by commas"
              />
            </div>
          </>
        )}

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormInput
              label="Email Address"
              name="borrower_email"
              type="email"
              value={borrower.email}
              onChange={(value) => onChange('email', value)}
              required
              placeholder="john.smith@example.com"
            />
            <FormInput
              label="Home Phone"
              name="borrower_phone"
              type="tel"
              value={borrower.phone}
              onChange={(value) => onChange('phone', value)}
              placeholder="(555) 123-4567"
            />
            <FormInput
              label="Cell Phone"
              name="borrower_cellPhone"
              type="tel"
              value={borrower.cellPhone}
              onChange={(value) => onChange('cellPhone', value)}
              required
              placeholder="(555) 987-6543"
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Address</h3>
          <div className="space-y-4">
            <FormInput
              label="Street Address"
              name="borrower_currentAddress"
              value={borrower.currentAddress}
              onChange={(value) => onChange('currentAddress', value)}
              required
              placeholder="123 Main Street"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormInput
                label="City"
                name="borrower_currentCity"
                value={borrower.currentCity}
                onChange={(value) => onChange('currentCity', value)}
                required
                placeholder="New York"
              />
              <FormSelect
                label="State"
                name="borrower_currentState"
                value={borrower.currentState}
                onChange={(value) => onChange('currentState', value)}
                options={US_STATES}
                required
              />
              <FormInput
                label="ZIP Code"
                name="borrower_currentZip"
                value={borrower.currentZip}
                onChange={(value) => onChange('currentZip', value)}
                required
                placeholder="10001"
                maxLength={5}
                pattern="[0-9]{5}"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput
                label="Years at Current Address"
                name="borrower_yearsAtAddress"
                type="number"
                value={borrower.yearsAtAddress}
                onChange={(value) => onChange('yearsAtAddress', value)}
                required
                placeholder="0"
                helpText="Use decimals for partial years (e.g., 1.5 for 1 year 6 months)"
              />
              {isFullSubmission && (
                <FormSelect
                  label="Residence Type"
                  name="borrower_residenceType"
                  value={borrower.residenceType}
                  onChange={(value) => onChange('residenceType', value)}
                  options={RESIDENCE_TYPE_OPTIONS}
                  required
                />
              )}
            </div>
          </div>
        </div>

        {isFullSubmission && borrower.yearsAtAddress < 2 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Former Address
              <span className="text-sm font-normal text-gray-500 ml-2">
                (Required if less than 2 years at current address)
              </span>
            </h3>
            <div className="space-y-4">
              <FormInput
                label="Street Address"
                name="borrower_formerAddress"
                value={borrower.formerAddress}
                onChange={(value) => onChange('formerAddress', value)}
                required
                placeholder="456 Oak Avenue"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormInput
                  label="City"
                  name="borrower_formerCity"
                  value={borrower.formerCity}
                  onChange={(value) => onChange('formerCity', value)}
                  required
                  placeholder="Boston"
                />
                <FormSelect
                  label="State"
                  name="borrower_formerState"
                  value={borrower.formerState}
                  onChange={(value) => onChange('formerState', value)}
                  options={US_STATES}
                  required
                />
                <FormInput
                  label="ZIP Code"
                  name="borrower_formerZip"
                  value={borrower.formerZip}
                  onChange={(value) => onChange('formerZip', value)}
                  required
                  placeholder="02101"
                  maxLength={5}
                />
              </div>
              <FormInput
                label="Years at Former Address"
                name="borrower_yearsAtFormerAddress"
                type="number"
                value={borrower.yearsAtFormerAddress}
                onChange={(value) => onChange('yearsAtFormerAddress', value)}
                required
                placeholder="0"
              />
            </div>
          </div>
        )}

        <div className="mt-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-lg">
          <div className="flex items-start space-x-3">
            <Users className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <FormCheckbox
                label="I am applying with a co-borrower"
                name="has_co_borrower"
                checked={hasCoBorrower}
                onChange={onCoBorrowerChange}
                helpText="A co-borrower is another person who will be equally responsible for the loan. This is common for married couples or when buying property with another person."
              />
              {hasCoBorrower && (
                <div className="mt-3 p-3 bg-white rounded border border-blue-300">
                  <p className="text-sm text-gray-700">
                    <strong>Co-Borrower Information:</strong> You'll provide complete information
                    about your co-borrower in the next step, including their personal details,
                    employment, and income information.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
