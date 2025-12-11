import { useState } from 'react';
import { DollarSign, Plus, Trash2, PiggyBank, CreditCard, Home } from 'lucide-react';
import { Asset, Liability, RealEstateProperty, SubmissionType } from '../../types/form1003';
import { FormInput } from './FormInput';
import { FormSelect } from './FormSelect';
import { FormCheckbox } from './FormCheckbox';
import {
  ASSET_TYPE_OPTIONS,
  LIABILITY_TYPE_OPTIONS,
  US_STATES,
  UNIT_DESIGNATOR_OPTIONS,
  PROPERTY_STATUS_OPTIONS,
  OCCUPANCY_OPTIONS
} from '../../data/form1003Constants';

interface Step5Props {
  assets: Asset[];
  liabilities: Liability[];
  realEstateOwned: RealEstateProperty[];
  submissionType: SubmissionType;
  onAssetsChange: (assets: Asset[]) => void;
  onLiabilitiesChange: (liabilities: Liability[]) => void;
  onRealEstateChange: (properties: RealEstateProperty[]) => void;
}

export function Step5AssetsLiabilities({
  assets,
  liabilities,
  realEstateOwned,
  submissionType,
  onAssetsChange,
  onLiabilitiesChange,
  onRealEstateChange,
}: Step5Props) {
  const isFullSubmission = submissionType === 'full_submission';

  const addAsset = () => {
    onAssetsChange([
      ...assets,
      {
        id: `asset_${Date.now()}`,
        accountType: '',
        institutionName: '',
        accountNumber: '',
        balance: 0,
      },
    ]);
  };

  const removeAsset = (id: string) => {
    onAssetsChange(assets.filter((a) => a.id !== id));
  };

  const updateAsset = (id: string, field: keyof Asset, value: string | number) => {
    onAssetsChange(
      assets.map((a) => (a.id === id ? { ...a, [field]: value } : a))
    );
  };

  const addLiability = () => {
    onLiabilitiesChange([
      ...liabilities,
      {
        id: `liability_${Date.now()}`,
        liabilityType: '',
        creditorName: '',
        accountNumber: '',
        monthlyPayment: 0,
        unpaidBalance: 0,
        toBePaidOff: false,
      },
    ]);
  };

  const removeLiability = (id: string) => {
    onLiabilitiesChange(liabilities.filter((l) => l.id !== id));
  };

  const updateLiability = (id: string, field: keyof Liability, value: string | number | boolean) => {
    onLiabilitiesChange(
      liabilities.map((l) => (l.id === id ? { ...l, [field]: value } : l))
    );
  };

  const addRealEstate = () => {
    onRealEstateChange([
      ...realEstateOwned,
      {
        id: `property_${Date.now()}`,
        address: '',
        unitDesignator: '',
        unitNumber: '',
        city: '',
        state: '',
        zip: '',
        numberOfUnits: 1,
        propertyValue: 0,
        status: '',
        intendedOccupancy: '',
        currentOccupancy: '',
        grossMonthlyRent: 0,
      },
    ]);
  };

  const removeRealEstate = (id: string) => {
    onRealEstateChange(realEstateOwned.filter((p) => p.id !== id));
  };

  const updateRealEstate = (id: string, field: keyof RealEstateProperty, value: string | number) => {
    onRealEstateChange(
      realEstateOwned.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  };

  const totalAssets = assets.reduce((sum, a) => sum + (Number(a.balance) || 0), 0);
  const totalLiabilities = liabilities.reduce((sum, l) => sum + (Number(l.unpaidBalance) || 0), 0);
  const netWorth = totalAssets - totalLiabilities;

  return (
    <div>
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
          <DollarSign className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Assets & Liabilities</h2>
          <p className="text-gray-600">List your financial accounts and debts</p>
        </div>
      </div>

      {!isFullSubmission && (
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            For pre-approval, you can provide summary information. Detailed account information will be required for full submission.
          </p>
        </div>
      )}

      <div className="space-y-8">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <PiggyBank className="w-5 h-5 text-green-600" />
              <h3 className="text-lg font-semibold text-gray-900">Assets</h3>
            </div>
            <button
              type="button"
              onClick={addAsset}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Add Asset</span>
            </button>
          </div>

          {assets.length === 0 && (
            <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
              <PiggyBank className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">No assets added yet</p>
              <button
                type="button"
                onClick={addAsset}
                className="mt-2 text-sm text-blue-600 hover:text-blue-700"
              >
                Add your first asset
              </button>
            </div>
          )}

          <div className="space-y-4">
            {assets.map((asset, index) => (
              <div key={asset.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-700">Asset #{index + 1}</span>
                  <button
                    type="button"
                    onClick={() => removeAsset(asset.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormSelect
                    label="Account Type"
                    name={`asset_type_${asset.id}`}
                    value={asset.accountType}
                    onChange={(value) => updateAsset(asset.id, 'accountType', value)}
                    options={ASSET_TYPE_OPTIONS}
                    required
                  />
                  <FormInput
                    label="Institution Name"
                    name={`asset_institution_${asset.id}`}
                    value={asset.institutionName}
                    onChange={(value) => updateAsset(asset.id, 'institutionName', value)}
                    required
                    placeholder="Bank of America"
                  />
                  {isFullSubmission && (
                    <FormInput
                      label="Account Number"
                      name={`asset_account_${asset.id}`}
                      value={asset.accountNumber}
                      onChange={(value) => updateAsset(asset.id, 'accountNumber', value)}
                      placeholder="Last 4 digits: XXXX1234"
                      helpText="Last 4 digits are sufficient"
                    />
                  )}
                  <FormInput
                    label="Current Balance"
                    name={`asset_balance_${asset.id}`}
                    type="number"
                    value={asset.balance}
                    onChange={(value) => updateAsset(asset.id, 'balance', value)}
                    required
                    placeholder="25000"
                    prefix="$"
                  />
                </div>
              </div>
            ))}
          </div>

          {assets.length > 0 && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-green-900">Total Assets:</span>
                <span className="text-lg font-bold text-green-900">
                  ${totalAssets.toLocaleString()}
                </span>
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Home className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Other Real Estate Owned</h3>
            </div>
            <button
              type="button"
              onClick={addRealEstate}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Add Property</span>
            </button>
          </div>

          {realEstateOwned.length === 0 && (
            <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
              <Home className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">No other properties added yet</p>
              <button
                type="button"
                onClick={addRealEstate}
                className="mt-2 text-sm text-blue-600 hover:text-blue-700"
              >
                Add your first property
              </button>
            </div>
          )}

          <div className="space-y-4">
            {realEstateOwned.map((property, index) => (
              <div key={property.id} className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-700">Property #{index + 1}</span>
                  <button
                    type="button"
                    onClick={() => removeRealEstate(property.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <FormInput
                      label="Address"
                      name={`property_address_${property.id}`}
                      value={property.address}
                      onChange={(value) => updateRealEstate(property.id, 'address', value)}
                      required
                      placeholder="123 Main Street"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormSelect
                      label="Unit Designator"
                      name={`property_unit_designator_${property.id}`}
                      value={property.unitDesignator}
                      onChange={(value) => updateRealEstate(property.id, 'unitDesignator', value)}
                      options={UNIT_DESIGNATOR_OPTIONS}
                    />
                    <FormInput
                      label="Number"
                      name={`property_unit_number_${property.id}`}
                      value={property.unitNumber}
                      onChange={(value) => updateRealEstate(property.id, 'unitNumber', value)}
                      placeholder="101"
                    />
                    <FormInput
                      label="Number of Units"
                      name={`property_num_units_${property.id}`}
                      type="number"
                      value={property.numberOfUnits}
                      onChange={(value) => updateRealEstate(property.id, 'numberOfUnits', value)}
                      placeholder="1"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormInput
                      label="City"
                      name={`property_city_${property.id}`}
                      value={property.city}
                      onChange={(value) => updateRealEstate(property.id, 'city', value)}
                      required
                      placeholder="Los Angeles"
                    />
                    <FormSelect
                      label="State"
                      name={`property_state_${property.id}`}
                      value={property.state}
                      onChange={(value) => updateRealEstate(property.id, 'state', value)}
                      options={US_STATES}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormInput
                      label="Zip"
                      name={`property_zip_${property.id}`}
                      value={property.zip}
                      onChange={(value) => updateRealEstate(property.id, 'zip', value)}
                      required
                      placeholder="90001"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormInput
                      label="Property Value"
                      name={`property_value_${property.id}`}
                      type="number"
                      value={property.propertyValue}
                      onChange={(value) => updateRealEstate(property.id, 'propertyValue', value)}
                      required
                      placeholder="250000"
                      prefix="$"
                    />
                    <FormSelect
                      label="Status"
                      name={`property_status_${property.id}`}
                      value={property.status}
                      onChange={(value) => updateRealEstate(property.id, 'status', value)}
                      options={PROPERTY_STATUS_OPTIONS}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormSelect
                      label="Intended Occupancy"
                      name={`property_intended_occupancy_${property.id}`}
                      value={property.intendedOccupancy}
                      onChange={(value) => updateRealEstate(property.id, 'intendedOccupancy', value)}
                      options={OCCUPANCY_OPTIONS}
                      required
                    />
                    <FormSelect
                      label="Current Occupancy"
                      name={`property_current_occupancy_${property.id}`}
                      value={property.currentOccupancy}
                      onChange={(value) => updateRealEstate(property.id, 'currentOccupancy', value)}
                      options={OCCUPANCY_OPTIONS}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormInput
                      label="Gross Monthly Rent"
                      name={`property_rent_${property.id}`}
                      type="number"
                      value={property.grossMonthlyRent}
                      onChange={(value) => updateRealEstate(property.id, 'grossMonthlyRent', value)}
                      placeholder="2000"
                      prefix="$"
                      helpText="Monthly rental income received"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <CreditCard className="w-5 h-5 text-red-600" />
              <h3 className="text-lg font-semibold text-gray-900">Liabilities</h3>
            </div>
            <button
              type="button"
              onClick={addLiability}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Add Liability</span>
            </button>
          </div>

          {liabilities.length === 0 && (
            <div className="p-6 border-2 border-gray-300 rounded-lg bg-blue-50">
              <FormCheckbox
                label="I acknowledge that my liabilities will be automatically added from my credit report"
                name="liabilities_acknowledgement"
                checked={true}
                onChange={() => {}}
              />
              <p className="text-sm text-gray-600 mt-3 ml-7">
                **If you have unreported debts you wish to add, click <strong>Add Liability</strong> above.
              </p>
            </div>
          )}

          <div className="space-y-4">
            {liabilities.map((liability, index) => (
              <div key={liability.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-700">Liability #{index + 1}</span>
                  <button
                    type="button"
                    onClick={() => removeLiability(liability.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormSelect
                    label="Liability Type"
                    name={`liability_type_${liability.id}`}
                    value={liability.liabilityType}
                    onChange={(value) => updateLiability(liability.id, 'liabilityType', value)}
                    options={LIABILITY_TYPE_OPTIONS}
                    required
                  />
                  <FormInput
                    label="Creditor Name"
                    name={`liability_creditor_${liability.id}`}
                    value={liability.creditorName}
                    onChange={(value) => updateLiability(liability.id, 'creditorName', value)}
                    required
                    placeholder="Chase Bank"
                  />
                  {isFullSubmission && (
                    <FormInput
                      label="Account Number"
                      name={`liability_account_${liability.id}`}
                      value={liability.accountNumber}
                      onChange={(value) => updateLiability(liability.id, 'accountNumber', value)}
                      placeholder="Last 4 digits: XXXX5678"
                      helpText="Last 4 digits are sufficient"
                    />
                  )}
                  <FormInput
                    label="Monthly Payment"
                    name={`liability_payment_${liability.id}`}
                    type="number"
                    value={liability.monthlyPayment}
                    onChange={(value) => updateLiability(liability.id, 'monthlyPayment', value)}
                    required
                    placeholder="250"
                    prefix="$"
                  />
                  <FormInput
                    label="Unpaid Balance"
                    name={`liability_balance_${liability.id}`}
                    type="number"
                    value={liability.unpaidBalance}
                    onChange={(value) => updateLiability(liability.id, 'unpaidBalance', value)}
                    required
                    placeholder="5000"
                    prefix="$"
                  />
                  <div className="md:col-span-2">
                    <FormCheckbox
                      label="This liability will be paid off at or before closing"
                      name={`liability_payoff_${liability.id}`}
                      checked={liability.toBePaidOff}
                      onChange={(value) => updateLiability(liability.id, 'toBePaidOff', value)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {liabilities.length > 0 && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-red-900">Total Liabilities:</span>
                <span className="text-lg font-bold text-red-900">
                  ${totalLiabilities.toLocaleString()}
                </span>
              </div>
            </div>
          )}
        </div>

        {(assets.length > 0 || liabilities.length > 0) && (
          <div className="p-6 bg-gray-100 border-2 border-gray-300 rounded-lg">
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-700">Total Assets:</span>
                <span className="font-semibold text-gray-900">
                  ${totalAssets.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-700">Total Liabilities:</span>
                <span className="font-semibold text-gray-900">
                  ${totalLiabilities.toLocaleString()}
                </span>
              </div>
              <div className="pt-2 border-t-2 border-gray-400">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Net Worth:</span>
                  <span className={`text-xl font-bold ${netWorth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    ${netWorth.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
