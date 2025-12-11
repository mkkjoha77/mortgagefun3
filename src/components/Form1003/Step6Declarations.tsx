import { AlertCircle, Shield } from 'lucide-react';
import { Declarations, MilitaryServiceInfo, SubmissionType } from '../../types/form1003';
import { FormCheckbox } from './FormCheckbox';
import { FormSelect } from './FormSelect';
import { DeclarationQuestion } from './DeclarationQuestion';
import { MILITARY_STATUS_OPTIONS, MILITARY_BRANCH_OPTIONS } from '../../data/form1003Constants';

interface Step6Props {
  declarations: Declarations;
  militaryService: MilitaryServiceInfo;
  submissionType: SubmissionType;
  hasCoBorrower: boolean;
  onDeclarationChange: (party: 'borrower' | 'coBorrower', field: string, value: boolean) => void;
  onMilitaryChange: (field: keyof MilitaryServiceInfo, value: boolean | string) => void;
}

export function Step6Declarations({
  declarations,
  militaryService,
  submissionType,
  hasCoBorrower,
  onDeclarationChange,
  onMilitaryChange,
}: Step6Props) {
  const isFullSubmission = submissionType === 'full_submission';

  return (
    <div>
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
          <Shield className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Declarations</h2>
          <p className="text-gray-600">Please answer these required questions honestly</p>
        </div>
      </div>

      <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start space-x-3">
        <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-yellow-800">
          <p className="font-medium mb-1">Important Notice</p>
          <p>
            All questions must be answered truthfully. False statements or omissions may result in
            denial of your application or legal consequences.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Property and Loan Questions</h3>
          <div className="space-y-3">
            <DeclarationQuestion
              question="Will you occupy the property as your primary residence?"
              borrowerAnswer={declarations.borrower.primaryResidence}
              coBorrowerAnswer={declarations.coBorrower.primaryResidence}
              hasCoBorrower={hasCoBorrower}
              onBorrowerChange={(value) => onDeclarationChange('borrower', 'primaryResidence', value)}
              onCoBorrowerChange={(value) => onDeclarationChange('coBorrower', 'primaryResidence', value)}
              helpText="A primary residence is a property you will live in for 6 months and 1 day each year or more"
            />

            <DeclarationQuestion
              question="Have you had an ownership interest in another property in the last three years?"
              borrowerAnswer={declarations.borrower.ownershipInterest}
              coBorrowerAnswer={declarations.coBorrower.ownershipInterest}
              hasCoBorrower={hasCoBorrower}
              onBorrowerChange={(value) => onDeclarationChange('borrower', 'ownershipInterest', value)}
              onCoBorrowerChange={(value) => onDeclarationChange('coBorrower', 'ownershipInterest', value)}
            />

            <DeclarationQuestion
              question="Is any part of the down payment borrowed?"
              borrowerAnswer={declarations.borrower.downPaymentBorrowed}
              coBorrowerAnswer={declarations.coBorrower.downPaymentBorrowed}
              hasCoBorrower={hasCoBorrower}
              onBorrowerChange={(value) => onDeclarationChange('borrower', 'downPaymentBorrowed', value)}
              onCoBorrowerChange={(value) => onDeclarationChange('coBorrower', 'downPaymentBorrowed', value)}
              helpText="Such as from a DPA loan, personal loan, community second, or forgivable grant"
            />

            <DeclarationQuestion
              question="Are you a co-signer or guarantor on any debt or loan that is not disclosed on this application?"
              borrowerAnswer={declarations.borrower.endorserOnNote}
              coBorrowerAnswer={declarations.coBorrower.endorserOnNote}
              hasCoBorrower={hasCoBorrower}
              onBorrowerChange={(value) => onDeclarationChange('borrower', 'endorserOnNote', value)}
              onCoBorrowerChange={(value) => onDeclarationChange('coBorrower', 'endorserOnNote', value)}
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Financial History</h3>
          <div className="space-y-3">
            <DeclarationQuestion
              question="Are there any outstanding judgments against you?"
              borrowerAnswer={declarations.borrower.outstandingJudgments}
              coBorrowerAnswer={declarations.coBorrower.outstandingJudgments}
              hasCoBorrower={hasCoBorrower}
              onBorrowerChange={(value) => onDeclarationChange('borrower', 'outstandingJudgments', value)}
              onCoBorrowerChange={(value) => onDeclarationChange('coBorrower', 'outstandingJudgments', value)}
            />

            <DeclarationQuestion
              question="Have you declared bankruptcy within the past 7 years?"
              borrowerAnswer={declarations.borrower.bankruptcy}
              coBorrowerAnswer={declarations.coBorrower.bankruptcy}
              hasCoBorrower={hasCoBorrower}
              onBorrowerChange={(value) => onDeclarationChange('borrower', 'bankruptcy', value)}
              onCoBorrowerChange={(value) => onDeclarationChange('coBorrower', 'bankruptcy', value)}
            />

            <DeclarationQuestion
              question="Have you had property foreclosed upon or given title or deed in lieu thereof in the last 7 years?"
              borrowerAnswer={declarations.borrower.foreclosure}
              coBorrowerAnswer={declarations.coBorrower.foreclosure}
              hasCoBorrower={hasCoBorrower}
              onBorrowerChange={(value) => onDeclarationChange('borrower', 'foreclosure', value)}
              onCoBorrowerChange={(value) => onDeclarationChange('coBorrower', 'foreclosure', value)}
            />

            <DeclarationQuestion
              question="Are you a party to a lawsuit in which you potentially have any personal financial liability?"
              borrowerAnswer={declarations.borrower.lawsuit}
              coBorrowerAnswer={declarations.coBorrower.lawsuit}
              hasCoBorrower={hasCoBorrower}
              onBorrowerChange={(value) => onDeclarationChange('borrower', 'lawsuit', value)}
              onCoBorrowerChange={(value) => onDeclarationChange('coBorrower', 'lawsuit', value)}
            />

            <DeclarationQuestion
              question="Are you currently delinquent or in default on a Federal debt?"
              borrowerAnswer={declarations.borrower.loanForeclosure}
              coBorrowerAnswer={declarations.coBorrower.loanForeclosure}
              hasCoBorrower={hasCoBorrower}
              onBorrowerChange={(value) => onDeclarationChange('borrower', 'loanForeclosure', value)}
              onCoBorrowerChange={(value) => onDeclarationChange('coBorrower', 'loanForeclosure', value)}
              helpText="Such as FHA, VA, or SBA loans"
            />

            <DeclarationQuestion
              question="Are you obligated to pay alimony, child support, or separate maintenance?"
              borrowerAnswer={declarations.borrower.alimonyChildSupport}
              coBorrowerAnswer={declarations.coBorrower.alimonyChildSupport}
              hasCoBorrower={hasCoBorrower}
              onBorrowerChange={(value) => onDeclarationChange('borrower', 'alimonyChildSupport', value)}
              onCoBorrowerChange={(value) => onDeclarationChange('coBorrower', 'alimonyChildSupport', value)}
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Military Service</h3>
          <div className="space-y-4">
            <FormCheckbox
              label="Have you or your spouse served, or are you currently serving, in the United States Armed Forces?"
              name="military_service"
              checked={militaryService.hasServed}
              onChange={(value) => onMilitaryChange('hasServed', value)}
            />

            {militaryService.hasServed && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <FormSelect
                  label="Military Status"
                  name="military_status"
                  value={militaryService.status}
                  onChange={(value) => onMilitaryChange('status', value)}
                  options={MILITARY_STATUS_OPTIONS}
                  required
                />
                <FormSelect
                  label="Branch of Service"
                  name="military_branch"
                  value={militaryService.branch}
                  onChange={(value) => onMilitaryChange('branch', value)}
                  options={MILITARY_BRANCH_OPTIONS}
                  required
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
