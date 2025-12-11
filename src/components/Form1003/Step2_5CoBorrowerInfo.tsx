import { Users } from 'lucide-react';
import { BorrowerInfo, SubmissionType } from '../../types/form1003';
import { FormInput } from './FormInput';
import { FormSelect } from './FormSelect';
import { CITIZENSHIP_OPTIONS, MARITAL_STATUS_OPTIONS, RESIDENCE_TYPE_OPTIONS, US_STATES } from '../../data/form1003Constants';

interface Step2_5Props {
  coBorrower: BorrowerInfo;
  submissionType: SubmissionType;
  onChange: (field: keyof BorrowerInfo, value: string | number) => void;
}

export function Step2_5CoBorrowerInfo({ coBorrower, submissionType, onChange }: Step2_5Props) {
  const isFullSubmission = submissionType === 'full_submission';

  return (
    <div>
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
          <Users className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Co-Borrower Information</h2>
          <p className="text-gray-600">Tell us about your co-borrower</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
            <FormInput
              label="First Name"
              name="co_borrower_firstName"
              value={coBorrower.firstName}
              onChange={(value) => onChange('firstName', value)}
              required
              placeholder="Jane"
            />
            <FormInput
              label="Middle Name"
              name="co_borrower_middleName"
              value={coBorrower.middleName}
              onChange={(value) => onChange('middleName', value)}
              placeholder="Marie"
            />
            <FormInput
              label="Last Name"
              name="co_borrower_lastName"
              value={coBorrower.lastName}
              onChange={(value) => onChange('lastName', value)}
              required
              placeholder="Smith"
            />
            <FormInput
              label="Suffix"
              name="co_borrower_suffix"
              value={coBorrower.suffix}
              onChange={(value) => onChange('suffix', value)}
              placeholder="Jr., Sr., III"
            />
          </div>
        </div>

        {isFullSubmission && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <FormInput
                label="Social Security Number"
                name="co_borrower_ssn"
                type="ssn"
                value={coBorrower.ssn}
                onChange={(value) => onChange('ssn', value)}
                required
                placeholder="XXX-XX-XXXX"
                helpText="Your SSN is required for credit check and identity verification. It will be kept secure and confidential."
              />
              <FormInput
                label="Date of Birth"
                name="co_borrower_dob"
                type="date"
                value={coBorrower.dob}
                onChange={(value) => onChange('dob', value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormSelect
                label="Citizenship Status"
                name="co_borrower_citizenship"
                value={coBorrower.citizenship}
                onChange={(value) => onChange('citizenship', value)}
                options={CITIZENSHIP_OPTIONS}
                required
              />
              <FormSelect
                label="Marital Status"
                name="co_borrower_maritalStatus"
                value={coBorrower.maritalStatus}
                onChange={(value) => onChange('maritalStatus', value)}
                options={MARITAL_STATUS_OPTIONS}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput
                label="Number of Dependents"
                name="co_borrower_dependentsCount"
                type="number"
                value={coBorrower.dependentsCount}
                onChange={(value) => onChange('dependentsCount', value)}
                placeholder="0"
              />
              <FormInput
                label="Ages of Dependents"
                name="co_borrower_dependentsAges"
                value={coBorrower.dependentsAges}
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
              name="co_borrower_email"
              type="email"
              value={coBorrower.email}
              onChange={(value) => onChange('email', value)}
              required
              placeholder="jane.smith@example.com"
            />
            <FormInput
              label="Home Phone"
              name="co_borrower_phone"
              type="tel"
              value={coBorrower.phone}
              onChange={(value) => onChange('phone', value)}
              placeholder="(555) 123-4567"
            />
            <FormInput
              label="Cell Phone"
              name="co_borrower_cellPhone"
              type="tel"
              value={coBorrower.cellPhone}
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
              name="co_borrower_currentAddress"
              value={coBorrower.currentAddress}
              onChange={(value) => onChange('currentAddress', value)}
              required
              placeholder="123 Main Street"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormInput
                label="City"
                name="co_borrower_currentCity"
                value={coBorrower.currentCity}
                onChange={(value) => onChange('currentCity', value)}
                required
                placeholder="New York"
              />
              <FormSelect
                label="State"
                name="co_borrower_currentState"
                value={coBorrower.currentState}
                onChange={(value) => onChange('currentState', value)}
                options={US_STATES}
                required
              />
              <FormInput
                label="ZIP Code"
                name="co_borrower_currentZip"
                value={coBorrower.currentZip}
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
                name="co_borrower_yearsAtAddress"
                type="number"
                value={coBorrower.yearsAtAddress}
                onChange={(value) => onChange('yearsAtAddress', value)}
                required
                placeholder="0"
                helpText="Use decimals for partial years (e.g., 1.5 for 1 year 6 months)"
              />
              {isFullSubmission && (
                <FormSelect
                  label="Residence Type"
                  name="co_borrower_residenceType"
                  value={coBorrower.residenceType}
                  onChange={(value) => onChange('residenceType', value)}
                  options={RESIDENCE_TYPE_OPTIONS}
                  required
                />
              )}
            </div>
          </div>
        </div>

        {isFullSubmission && coBorrower.yearsAtAddress < 2 && (
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
                name="co_borrower_formerAddress"
                value={coBorrower.formerAddress}
                onChange={(value) => onChange('formerAddress', value)}
                required
                placeholder="456 Oak Avenue"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormInput
                  label="City"
                  name="co_borrower_formerCity"
                  value={coBorrower.formerCity}
                  onChange={(value) => onChange('formerCity', value)}
                  required
                  placeholder="Boston"
                />
                <FormSelect
                  label="State"
                  name="co_borrower_formerState"
                  value={coBorrower.formerState}
                  onChange={(value) => onChange('formerState', value)}
                  options={US_STATES}
                  required
                />
                <FormInput
                  label="ZIP Code"
                  name="co_borrower_formerZip"
                  value={coBorrower.formerZip}
                  onChange={(value) => onChange('formerZip', value)}
                  required
                  placeholder="02101"
                  maxLength={5}
                />
              </div>
              <FormInput
                label="Years at Former Address"
                name="co_borrower_yearsAtFormerAddress"
                type="number"
                value={coBorrower.yearsAtFormerAddress}
                onChange={(value) => onChange('yearsAtFormerAddress', value)}
                required
                placeholder="0"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
