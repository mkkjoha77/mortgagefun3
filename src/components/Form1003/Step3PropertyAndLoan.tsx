import { useEffect } from 'react';
import { Home, Building } from 'lucide-react';
import { PropertyInfo, LoanInfo, RefinanceInfo, SubmissionType, LoanType } from '../../types/form1003';
import { FormInput } from './FormInput';
import { FormSelect } from './FormSelect';
import {
  PROPERTY_TYPE_OPTIONS,
  PROPERTY_OCCUPANCY_OPTIONS,
  TITLE_HOLDER_OPTIONS,
  ESTATE_TYPE_OPTIONS,
  REFINANCE_PURPOSE_OPTIONS,
  US_STATES
} from '../../data/form1003Constants';

interface Step3Props {
  property: PropertyInfo;
  loan: LoanInfo;
  refinance: RefinanceInfo;
  applicationType: LoanType;
  submissionType: SubmissionType;
  onPropertyChange: (field: keyof PropertyInfo, value: string | number) => void;
  onLoanChange: (field: keyof LoanInfo, value: string | number) => void;
  onRefinanceChange: (field: keyof RefinanceInfo, value: string | number) => void;
}

export function Step3PropertyAndLoan({
  property,
  loan,
  refinance,
  applicationType,
  submissionType,
  onPropertyChange,
  onLoanChange,
  onRefinanceChange,
}: Step3Props) {
  const isFullSubmission = submissionType === 'full_submission';
  const isRefinance = applicationType === 'refinance' || applicationType === 'cashout';
  const isPreApproval = submissionType === 'preapproval';

  useEffect(() => {
    if (isPreApproval && property.propertyAddress !== 'TBD') {
      onPropertyChange('propertyAddress', 'TBD');
    }
  }, [isPreApproval]);

  return (
    <div>
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
          <Building className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Property & Loan Information</h2>
          <p className="text-gray-600">Tell us about the property and loan details</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Property Address</h3>
          {isPreApproval && (
            <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                For pre-approval applications, the property address is set to "TBD" as you are exploring your options. Once you have a specific property, you can submit a full application.
              </p>
            </div>
          )}
          <div className="space-y-4">
            <FormInput
              label="Street Address"
              name="property_address"
              value={isPreApproval ? 'TBD' : property.propertyAddress}
              onChange={(value) => onPropertyChange('propertyAddress', value)}
              required
              placeholder={isPreApproval ? 'TBD' : '123 Main Street'}
              className={isPreApproval ? 'opacity-60 pointer-events-none' : ''}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormInput
                label="City"
                name="property_city"
                value={property.propertyCity}
                onChange={(value) => onPropertyChange('propertyCity', value)}
                required
                placeholder="New York"
              />
              <FormSelect
                label="State"
                name="property_state"
                value={property.propertyState}
                onChange={(value) => onPropertyChange('propertyState', value)}
                options={US_STATES}
                required
              />
              <FormInput
                label="ZIP Code"
                name="property_zip"
                value={property.propertyZip}
                onChange={(value) => onPropertyChange('propertyZip', value)}
                required
                placeholder="10001"
                maxLength={5}
                pattern="[0-9]{5}"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Property Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              label="Property Value"
              name="property_value"
              type="number"
              value={property.propertyValue}
              onChange={(value) => onPropertyChange('propertyValue', value)}
              required
              placeholder="350000"
              prefix="$"
              helpText="The current market value or purchase price of the property"
            />
            <FormSelect
              label="Property Type"
              name="property_type"
              value={property.propertyType}
              onChange={(value) => onPropertyChange('propertyType', value)}
              options={PROPERTY_TYPE_OPTIONS}
              required
            />
            <FormSelect
              label="Property Will Be"
              name="property_occupancy"
              value={property.propertyOccupancy}
              onChange={(value) => onPropertyChange('propertyOccupancy', value)}
              options={PROPERTY_OCCUPANCY_OPTIONS}
              required
              helpText="How will you use this property?"
            />
            <FormInput
              label="Number of Units"
              name="property_units"
              type="number"
              value={property.propertyUnits}
              onChange={(value) => onPropertyChange('propertyUnits', value)}
              required
              placeholder="1"
              helpText="1 for single family, 2-4 for multi-unit"
            />
          </div>

          {isFullSubmission && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <FormInput
                label="Year Built"
                name="property_year_built"
                value={property.propertyYearBuilt}
                onChange={(value) => onPropertyChange('propertyYearBuilt', value)}
                placeholder="2020"
                maxLength={4}
              />
              <FormInput
                label="Lot Size"
                name="property_lot_size"
                value={property.propertyLotSize}
                onChange={(value) => onPropertyChange('propertyLotSize', value)}
                placeholder="e.g., 0.25 acres or 10,890 sq ft"
              />
            </div>
          )}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Loan Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              label="Loan Amount"
              name="loan_amount"
              type="number"
              value={loan.loanAmount}
              onChange={(value) => onLoanChange('loanAmount', value)}
              required
              placeholder="300000"
              prefix="$"
            />
            <FormInput
              label="Down Payment"
              name="down_payment"
              type="number"
              value={loan.downPayment}
              onChange={(value) => onLoanChange('downPayment', value)}
              required
              placeholder="60000"
              prefix="$"
            />
          </div>

          {isFullSubmission && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <FormSelect
                label="Title Will Be Held"
                name="title_holder"
                value={loan.titleHolder}
                onChange={(value) => onLoanChange('titleHolder', value)}
                options={TITLE_HOLDER_OPTIONS}
                required
                helpText="How will the property title be held?"
              />
              <FormSelect
                label="Estate Type"
                name="estate_type"
                value={loan.estateType}
                onChange={(value) => onLoanChange('estateType', value)}
                options={ESTATE_TYPE_OPTIONS}
                required
              />
            </div>
          )}
        </div>

        {isRefinance && isFullSubmission && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Refinance Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormSelect
                label="Purpose of Refinance"
                name="refinance_purpose"
                value={refinance.refinancePurpose}
                onChange={(value) => onRefinanceChange('refinancePurpose', value)}
                options={REFINANCE_PURPOSE_OPTIONS}
                required
              />
              <FormInput
                label="Year Acquired"
                name="refinance_year_acquired"
                value={refinance.yearAcquired}
                onChange={(value) => onRefinanceChange('yearAcquired', value)}
                placeholder="2018"
                maxLength={4}
              />
              <FormInput
                label="Original Cost"
                name="refinance_original_cost"
                type="number"
                value={refinance.originalCost}
                onChange={(value) => onRefinanceChange('originalCost', value)}
                placeholder="280000"
                prefix="$"
              />
              <FormInput
                label="Existing Liens"
                name="refinance_existing_liens"
                type="number"
                value={refinance.existingLiens}
                onChange={(value) => onRefinanceChange('existingLiens', value)}
                placeholder="200000"
                prefix="$"
                helpText="Total amount owed on existing mortgages"
              />
              <FormInput
                label="Amount of Improvements"
                name="refinance_improvements"
                type="number"
                value={refinance.improvements}
                onChange={(value) => onRefinanceChange('improvements', value)}
                placeholder="25000"
                prefix="$"
                helpText="Cost of improvements made to the property"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
