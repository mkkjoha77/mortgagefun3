import { Briefcase, Plus } from 'lucide-react';
import { EmploymentInfo, PreviousEmploymentInfo, SecondJobInfo, SubmissionType } from '../../types/form1003';
import { FormInput } from './FormInput';
import { FormSelect } from './FormSelect';
import { FormCheckbox } from './FormCheckbox';
import { EMPLOYMENT_TYPE_OPTIONS, US_STATES } from '../../data/form1003Constants';

interface Step4Props {
  employment: EmploymentInfo;
  previousEmployment: PreviousEmploymentInfo;
  hasSecondJob: boolean;
  secondJob: SecondJobInfo;
  hasCoBorrower: boolean;
  coEmployment: EmploymentInfo;
  coPreviousEmployment: PreviousEmploymentInfo;
  coHasSecondJob: boolean;
  coSecondJob: SecondJobInfo;
  submissionType: SubmissionType;
  onChange: (field: keyof EmploymentInfo, value: string | number) => void;
  onPreviousChange: (field: keyof PreviousEmploymentInfo, value: string | number) => void;
  onSecondJobToggle: (value: boolean) => void;
  onSecondJobChange: (field: keyof SecondJobInfo, value: string | number) => void;
  onCoEmploymentChange: (field: keyof EmploymentInfo, value: string | number) => void;
  onCoPreviousChange: (field: keyof PreviousEmploymentInfo, value: string | number) => void;
  onCoSecondJobToggle: (value: boolean) => void;
  onCoSecondJobChange: (field: keyof SecondJobInfo, value: string | number) => void;
}

export function Step4EmploymentIncome({
  employment,
  previousEmployment,
  hasSecondJob,
  secondJob,
  hasCoBorrower,
  coEmployment,
  coPreviousEmployment,
  coHasSecondJob,
  coSecondJob,
  submissionType,
  onChange,
  onPreviousChange,
  onSecondJobToggle,
  onSecondJobChange,
  onCoEmploymentChange,
  onCoPreviousChange,
  onCoSecondJobToggle,
  onCoSecondJobChange,
}: Step4Props) {
  const isFullSubmission = submissionType === 'full_submission';
  const needsPreviousEmployment = employment.yearsEmployed < 2;
  const coNeedsPreviousEmployment = coEmployment.yearsEmployed < 2;

  return (
    <div>
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
          <Briefcase className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Employment & Income</h2>
          <p className="text-gray-600">Tell us about your current employment</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Employment</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormInput
                label="Employer Name"
                name="employer_name"
                value={employment.employerName}
                onChange={(value) => onChange('employerName', value)}
                required
                placeholder="ABC Corporation"
              />
              <FormInput
                label="Position/Title"
                name="position"
                value={employment.position}
                onChange={(value) => onChange('position', value)}
                required
                placeholder="Software Engineer"
              />
            </div>
            {isFullSubmission && (
              <>
                <FormInput
                  label="Employer Address"
                  name="employer_address"
                  value={employment.employerAddress}
                  onChange={(value) => onChange('employerAddress', value)}
                  placeholder="456 Business Blvd"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormInput
                    label="City"
                    name="employer_city"
                    value={employment.employerCity}
                    onChange={(value) => onChange('employerCity', value)}
                    placeholder="New York"
                  />
                  <FormSelect
                    label="State"
                    name="employer_state"
                    value={employment.employerState}
                    onChange={(value) => onChange('employerState', value)}
                    options={US_STATES}
                  />
                  <FormInput
                    label="ZIP Code"
                    name="employer_zip"
                    value={employment.employerZip}
                    onChange={(value) => onChange('employerZip', value)}
                    placeholder="10001"
                    maxLength={5}
                  />
                </div>
              </>
            )}
            <div className="grid grid-cols-2 gap-4">
              <FormInput
                label="Employer Phone"
                name="employer_phone"
                type="tel"
                value={employment.employerPhone}
                onChange={(value) => onChange('employerPhone', value)}
                placeholder="(555) 123-4567"
              />            
              <FormSelect
                label="Employment Type"
                name="employment_type"
                value={employment.employmentType}
                onChange={(value) => onChange('employmentType', value)}
                options={EMPLOYMENT_TYPE_OPTIONS}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormInput
                label="Start Date"
                name="employment_start_date"
                type="date"
                value={employment.employmentStartDate}
                onChange={(value) => onChange('employmentStartDate', value)}
                required
              />
              <FormInput
                label="Years at This Job"
                name="years_employed"
                type="number"
                value={employment.yearsEmployed}
                onChange={(value) => onChange('yearsEmployed', value)}
                required
                placeholder="0"
                helpText="Use decimals for partial years (e.g., 1.5 for 1 year 6 months)"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Income</h3>
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              label="Base Income"
              name="base_income"
              type="number"
              value={employment.baseIncome}
              onChange={(value) => onChange('baseIncome', value)}
              required
              placeholder="5000"
              prefix="$"
              helpText="Monthly base salary or hourly wages"
            />
            <FormInput
              label="Overtime"
              name="overtime"
              type="number"
              value={employment.overtime}
              onChange={(value) => onChange('overtime', value)}
              placeholder="0"
              prefix="$"
              helpText="Average monthly overtime (if applicable)"
            />
            <FormInput
              label="Bonus"
              name="bonus"
              type="number"
              value={employment.bonus}
              onChange={(value) => onChange('bonus', value)}
              placeholder="0"
              prefix="$"
              helpText="Average monthly bonus income"
            />
            <FormInput
              label="Commission"
              name="commission"
              type="number"
              value={employment.commission}
              onChange={(value) => onChange('commission', value)}
              placeholder="0"
              prefix="$"
              helpText="Average monthly commission"
            />
          </div>

          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-blue-900">Total Monthly Income:</span>
              <span className="text-lg font-bold text-blue-900">
                ${(
                  (Number(employment.baseIncome) || 0) +
                  (Number(employment.overtime) || 0) +
                  (Number(employment.bonus) || 0) +
                  (Number(employment.commission) || 0)
                ).toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {isFullSubmission && needsPreviousEmployment && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Previous Employment
              <span className="text-sm font-normal text-gray-500 ml-2">
                (Required if less than 2 years at current job)
              </span>
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormInput
                  label="Previous Employer Name"
                  name="prev_employer_name"
                  value={previousEmployment.employerName}
                  onChange={(value) => onPreviousChange('employerName', value)}
                  required
                  placeholder="XYZ Company"
                />
                <FormInput
                  label="Position/Title"
                  name="prev_position"
                  value={previousEmployment.position}
                  onChange={(value) => onPreviousChange('position', value)}
                  required
                  placeholder="Junior Developer"
                />
              </div>

              <FormInput
                label="Employer Address"
                name="prev_employer_address"
                value={previousEmployment.employerAddress}
                onChange={(value) => onPreviousChange('employerAddress', value)}
                placeholder="789 Corporate Dr"
              />

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <FormInput
                  label="Start Date"
                  name="prev_employment_start_date"
                  type="date"
                  value={previousEmployment.employmentStartDate}
                  onChange={(value) => onPreviousChange('employmentStartDate', value)}
                  required
                />
                <FormInput
                  label="End Date"
                  name="prev_employment_end_date"
                  type="date"
                  value={previousEmployment.employmentEndDate}
                  onChange={(value) => onPreviousChange('employmentEndDate', value)}
                  required
                />
                <FormInput
                  label="Monthly Income"
                  name="prev_monthly_income"
                  type="number"
                  value={previousEmployment.monthlyIncome}
                  onChange={(value) => onPreviousChange('monthlyIncome', value)}
                  required
                  placeholder="4000"
                  prefix="$"
                />
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 p-6 bg-purple-50 border-2 border-purple-200 rounded-lg">
          <div className="flex items-start space-x-3">
            <Plus className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <FormCheckbox
                label="I have a second job"
                name="has_second_job"
                checked={hasSecondJob}
                onChange={onSecondJobToggle}
                helpText="Check this if you have additional employment beyond your primary job"
              />
              {hasSecondJob && (
                <div className="mt-4 p-4 bg-white rounded border border-purple-300 space-y-4">
                  <h4 className="font-semibold text-gray-900">Second Job Information</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <FormInput
                      label="Employer Name"
                      name="second_employer_name"
                      value={secondJob.employerName}
                      onChange={(value) => onSecondJobChange('employerName', value)}
                      required
                      placeholder="Part-Time Employer"
                    />
                    <FormInput
                      label="Position"
                      name="second_position"
                      value={secondJob.position}
                      onChange={(value) => onSecondJobChange('position', value)}
                      required
                      placeholder="Part-Time Position"
                    />
                    <FormInput
                        label="Employer Phone"
                        name="second_employer_phone"
                        type="tel"
                        value={secondJob.employerPhone}
                        onChange={(value) => onSecondJobChange('employerPhone', value)}
                        placeholder="(555) 123-4567"
                      />
                     <FormInput
                        label="Start Date"
                        name="second_employment_start_date"
                        type="date"
                        value={secondJob.employmentStartDate}
                        onChange={(value) => onSecondJobChange('employmentStartDate', value)}
                      />
                    <FormInput
                      label="Hours Per Week"
                      name="second_hours_per_week"
                      type="number"
                      value={secondJob.hoursPerWeek}
                      onChange={(value) => onSecondJobChange('hoursPerWeek', value)}
                      placeholder="20"
                      helpText="Average hours per week"
                    />
                    <FormInput
                      label="Monthly Income"
                      name="second_monthly_income"
                      type="number"
                      value={secondJob.monthlyIncome}
                      onChange={(value) => onSecondJobChange('monthlyIncome', value)}
                      required
                      placeholder="1500"
                      prefix="$"
                    />
                  </div>
                  {isFullSubmission && (
                    <>
                      
                     
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {hasCoBorrower && (
          <div className="mt-8 p-6 bg-indigo-50 border-2 border-indigo-300 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Co-Borrower Employment & Income</h3>

            <div className="space-y-6 bg-white p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900">Current Employment</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormInput
                  label="Employer Name"
                  name="co_employer_name"
                  value={coEmployment.employerName}
                  onChange={(value) => onCoEmploymentChange('employerName', value)}
                  required
                  placeholder="ABC Corporation"
                />
                <FormInput
                  label="Position/Title"
                  name="co_position"
                  value={coEmployment.position}
                  onChange={(value) => onCoEmploymentChange('position', value)}
                  required
                  placeholder="Marketing Manager"
                />
                <FormInput
                  label="Start Date"
                  name="co_employment_start_date"
                  type="date"
                  value={coEmployment.employmentStartDate}
                  onChange={(value) => onCoEmploymentChange('employmentStartDate', value)}
                  required
                />
                <FormInput
                  label="Years at This Job"
                  name="co_years_employed"
                  type="number"
                  value={coEmployment.yearsEmployed}
                  onChange={(value) => onCoEmploymentChange('yearsEmployed', value)}
                  required
                  placeholder="0"
                />
              </div>

              <h5 className="text-md font-semibold text-gray-900 mt-6">Monthly Income</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormInput
                  label="Base Income"
                  name="co_base_income"
                  type="number"
                  value={coEmployment.baseIncome}
                  onChange={(value) => onCoEmploymentChange('baseIncome', value)}
                  required
                  placeholder="4000"
                  prefix="$"
                />
                <FormInput
                  label="Overtime"
                  name="co_overtime"
                  type="number"
                  value={coEmployment.overtime}
                  onChange={(value) => onCoEmploymentChange('overtime', value)}
                  placeholder="0"
                  prefix="$"
                />
                <FormInput
                  label="Bonus"
                  name="co_bonus"
                  type="number"
                  value={coEmployment.bonus}
                  onChange={(value) => onCoEmploymentChange('bonus', value)}
                  placeholder="0"
                  prefix="$"
                />
                <FormInput
                  label="Commission"
                  name="co_commission"
                  type="number"
                  value={coEmployment.commission}
                  onChange={(value) => onCoEmploymentChange('commission', value)}
                  placeholder="0"
                  prefix="$"
                />
              </div>

              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-blue-900">Co-Borrower Total Monthly Income:</span>
                  <span className="text-lg font-bold text-blue-900">
                    ${(
                      (Number(coEmployment.baseIncome) || 0) +
                      (Number(coEmployment.overtime) || 0) +
                      (Number(coEmployment.bonus) || 0) +
                      (Number(coEmployment.commission) || 0)
                    ).toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <FormCheckbox
                  label="Co-borrower has a second job"
                  name="co_has_second_job"
                  checked={coHasSecondJob}
                  onChange={onCoSecondJobToggle}
                />
                {coHasSecondJob && (
                  <div className="mt-4 p-4 bg-white rounded border border-purple-300 space-y-4">
                    <h5 className="font-semibold text-gray-900">Co-Borrower Second Job Information</h5>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <FormInput
                        label="Employer Name"
                        name="co_second_employer_name"
                        value={coSecondJob.employerName}
                        onChange={(value) => onCoSecondJobChange('employerName', value)}
                        required
                        placeholder="Part-Time Employer"
                      />
                      <FormInput
                        label="Position"
                        name="co_second_position"
                        value={coSecondJob.position}
                        onChange={(value) => onCoSecondJobChange('position', value)}
                        required
                        placeholder="Part-Time Position"
                      />
                      <FormInput
                        label="Employer Phone"
                        name="co_second_employer_phone"
                        type="tel"
                        value={coSecondJob.employerPhone}
                        onChange={(value) => onCoSecondJobChange('employerPhone', value)}
                        placeholder="(555) 123-4567"
                      />
                      <FormInput
                        label="Start Date"
                        name="co_second_employment_start_date"
                        type="date"
                        value={coSecondJob.employmentStartDate}
                        onChange={(value) => onCoSecondJobChange('employmentStartDate', value)}
                      />
                      <FormInput
                        label="Hours Per Week"
                        name="co_second_hours_per_week"
                        type="number"
                        value={coSecondJob.hoursPerWeek}
                        onChange={(value) => onCoSecondJobChange('hoursPerWeek', value)}
                        placeholder="20"
                        helpText="Average hours per week"
                      />
                      <FormInput
                        label="Monthly Income"
                        name="co_second_monthly_income"
                        type="number"
                        value={coSecondJob.monthlyIncome}
                        onChange={(value) => onCoSecondJobChange('monthlyIncome', value)}
                        required
                        placeholder="1500"
                        prefix="$"
                      />
                    </div>
                    {isFullSubmission && (
                      <>


                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 p-6 bg-green-50 border-2 border-green-300 rounded-lg">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Combined Household Income Summary</h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Primary Borrower Employment:</span>
              <span className="font-medium">
                ${(
                  (Number(employment.baseIncome) || 0) +
                  (Number(employment.overtime) || 0) +
                  (Number(employment.bonus) || 0) +
                  (Number(employment.commission) || 0)
                ).toLocaleString()}
              </span>
            </div>
            {hasSecondJob && (
              <div className="flex justify-between text-sm">
                <span>Primary Borrower Second Job:</span>
                <span className="font-medium">${(Number(secondJob.monthlyIncome) || 0).toLocaleString()}</span>
              </div>
            )}
            {hasCoBorrower && (
              <>
                <div className="flex justify-between text-sm">
                  <span>Co-Borrower Employment:</span>
                  <span className="font-medium">
                    ${(
                      (Number(coEmployment.baseIncome) || 0) +
                      (Number(coEmployment.overtime) || 0) +
                      (Number(coEmployment.bonus) || 0) +
                      (Number(coEmployment.commission) || 0)
                    ).toLocaleString()}
                  </span>
                </div>
                {coHasSecondJob && (
                  <div className="flex justify-between text-sm">
                    <span>Co-Borrower Second Job:</span>
                    <span className="font-medium">${(Number(coSecondJob.monthlyIncome) || 0).toLocaleString()}</span>
                  </div>
                )}
              </>
            )}
            <div className="pt-2 border-t-2 border-green-400">
              <div className="flex justify-between">
                <span className="font-bold text-gray-900">Total Employment Income:</span>
                <span className="text-xl font-bold text-green-700">
                  ${(
                    (Number(employment.baseIncome) || 0) +
                    (Number(employment.overtime) || 0) +
                    (Number(employment.bonus) || 0) +
                    (Number(employment.commission) || 0) +
                    (hasSecondJob ? (Number(secondJob.monthlyIncome) || 0) : 0) +
                    (hasCoBorrower ? (
                      (Number(coEmployment.baseIncome) || 0) +
                      (Number(coEmployment.overtime) || 0) +
                      (Number(coEmployment.bonus) || 0) +
                      (Number(coEmployment.commission) || 0) +
                      (coHasSecondJob ? (Number(coSecondJob.monthlyIncome) || 0) : 0)
                    ) : 0)
                  ).toLocaleString()}
                </span>
              </div>
              <p className="text-xs text-gray-600 mt-1">Other income sources will be added in the next step</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
