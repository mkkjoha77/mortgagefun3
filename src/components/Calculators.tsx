import { useState } from 'react';
import { Calculator, DollarSign, Percent, Calendar, TrendingDown } from 'lucide-react';
import { CurrencyInputField, PercentageInputField, SelectField } from './CalculatorFormFields';
import InvestmentCalculator from './InvestmentCalculator';

interface CalculatorsProps {
  onNavigate: (view: string) => void;
}

export default function Calculators({ onNavigate }: CalculatorsProps) {
  const [activeCalculator, setActiveCalculator] = useState<'payment' | 'affordability' | 'refinance' | 'investment'>('payment');

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Mortgage Calculators</h1>
          <p className="text-xl text-gray-600">
            Plan your property purchase with our easy-to-use calculators
          </p>
        </div>

        <div className="flex justify-center mb-8 space-x-4 flex-wrap gap-y-4">
          <button
            onClick={() => setActiveCalculator('payment')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeCalculator === 'payment'
                ? 'bg-gray-900 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Payment Calculator
          </button>
          <button
            onClick={() => setActiveCalculator('affordability')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeCalculator === 'affordability'
                ? 'bg-gray-900 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Affordability Calculator
          </button>
          <button
            onClick={() => setActiveCalculator('refinance')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeCalculator === 'refinance'
                ? 'bg-gray-900 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Refinance Calculator
          </button>
          <button
            onClick={() => setActiveCalculator('investment')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeCalculator === 'investment'
                ? 'bg-gray-900 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Investment Calculator
          </button>
        </div>

        {activeCalculator === 'payment' && <PaymentCalculator />}
        {activeCalculator === 'affordability' && <AffordabilityCalculator />}
        {activeCalculator === 'refinance' && <RefinanceCalculator />}
        {activeCalculator === 'investment' && <InvestmentCalculator />}

        <div className="mt-12 bg-gray-700 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Take the Next Step?</h2>
          <p className="text-lg mb-6 text-gray-300">
            Get pre-qualified today and see how much property you can afford
          </p>
          <button
            onClick={() => onNavigate('apply')}
            className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Your Application
          </button>
        </div>
      </div>
    </div>
  );
}

function PaymentCalculator() {
  const [loanAmount, setLoanAmount] = useState(350000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [downPayment, setDownPayment] = useState(Math.round(350000 * 0.1000));
  const [propertyTax, setPropertyTax] = useState(Math.round(350000 * 0.0169));
  const [insurance, setInsurance] = useState(Math.round(350000 * 0.0055));

  const updateHomePrice = (newPrice: number) => {
    setLoanAmount(newPrice);
    setPropertyTax(Math.round(newPrice * 0.0169));
    setInsurance(Math.round(newPrice * 0.0055));
  };

  const calculatePayment = () => {
    const principal = loanAmount - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const monthlyPrincipalAndInterest =
      principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const monthlyTax = propertyTax / 12;
    const monthlyInsurance = insurance / 12;
    const monthlyPMI = downPayment < loanAmount * 0.2 ? (principal * 0.005) / 12 : 0;

    return {
      principalAndInterest: monthlyPrincipalAndInterest,
      tax: monthlyTax,
      insurance: monthlyInsurance,
      pmi: monthlyPMI,
      total: monthlyPrincipalAndInterest + monthlyTax + monthlyInsurance + monthlyPMI,
    };
  };

  const payment = calculatePayment();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Loan Details</h3>
        <div className="space-y-6">
          <CurrencyInputField
            label="Property Price"
            value={loanAmount}
            onChange={updateHomePrice}
            min={50000}
            max={2000000}
            step={100}
            sliderStep={1000}
          />

          <CurrencyInputField
            label="Down Payment"
            value={downPayment}
            onChange={setDownPayment}
            min={0}
            max={loanAmount * 0.6}
            step={100}
            sliderStep={500}
            additionalInfo={`(${((downPayment / loanAmount) * 100).toFixed(1)}%)`}
          />

          <PercentageInputField
            label="Interest Rate"
            value={interestRate}
            onChange={setInterestRate}
            min={2}
            max={14}
            step={0.125}
          />

          <SelectField
            label={`Loan Term: ${loanTerm} years`}
            value={loanTerm}
            onChange={setLoanTerm}
            options={[
              { value: 15, label: '15 years' },
              { value: 20, label: '20 years' },
              { value: 30, label: '30 years' },
            ]}
          />

          <CurrencyInputField
            label="Annual Property Tax"
            value={propertyTax}
            onChange={setPropertyTax}
            showSlider={false}
            step={100}
          />

          <CurrencyInputField
            label="Annual Property Insurance"
            value={insurance}
            onChange={setInsurance}
            showSlider={false}
            step={100}
          />
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-gray-800 text-white rounded-xl shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-4">
            <DollarSign className="w-8 h-8 text-green-500" />
            <h3 className="text-2xl font-bold">Monthly Payment</h3>
          </div>
          <div className="text-5xl font-bold mb-2">
            ${Math.round(payment.total).toLocaleString()}
          </div>
          <p className="text-gray-300">Total estimated monthly payment</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Payment Breakdown</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-3 border-b">
              <span className="text-gray-600">Principal & Interest</span>
              <span className="font-semibold text-gray-900">
                ${Math.round(payment.principalAndInterest).toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b">
              <span className="text-gray-600">Property Tax</span>
              <span className="font-semibold text-gray-900">
                ${Math.round(payment.tax).toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b">
              <span className="text-gray-600">Property Insurance</span>
              <span className="font-semibold text-gray-900">
                ${Math.round(payment.insurance).toLocaleString()}
              </span>
            </div>
            {payment.pmi > 0 && (
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-gray-600">PMI</span>
                <span className="font-semibold text-gray-900">
                  ${Math.round(payment.pmi).toLocaleString()}
                </span>
              </div>
            )}
            <div className="flex justify-between items-center pt-3 text-lg">
              <span className="font-bold text-gray-900">Total Monthly Payment</span>
              <span className="font-bold text-gray-900">
                ${Math.round(payment.total).toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Loan Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Loan Amount</span>
              <span className="font-semibold">${(loanAmount - downPayment).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Interest Paid</span>
              <span className="font-semibold">
                ${Math.round(payment.principalAndInterest * loanTerm * 12 - (loanAmount - downPayment)).toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Amount Paid</span>
              <span className="font-semibold">
                ${Math.round(payment.total * loanTerm * 12).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AffordabilityCalculator() {
  const [annualIncome, setAnnualIncome] = useState(75000);
  const [monthlyDebts, setMonthlyDebts] = useState(500);
  const [downPayment, setDownPayment] = useState(15000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [propertyTax, setPropertyTax] = useState(5915);
  const [insurance, setInsurance] = useState(1925);

  const calculateAffordability = () => {
    const monthlyIncome = annualIncome / 12;
    const maxMonthlyPayment = monthlyIncome * 0.33;
    const maxTotalDebt = monthlyIncome * 0.45;
    const availableForHousing = Math.min(maxMonthlyPayment, maxTotalDebt - monthlyDebts);

    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    let estimatedHomePrice = 150000;
    let step = 50000;
    let iterations = 0;
    const maxIterations = 100;

    while (iterations < maxIterations) {
      const principal = estimatedHomePrice - downPayment;

      if (principal <= 0) {
        estimatedHomePrice += step;
        iterations++;
        continue;
      }

      const monthlyPrincipalAndInterest =
        principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

      const estimatedPropertyTax = estimatedHomePrice * 0.0169;
      const estimatedInsurance = estimatedHomePrice * 0.0055;
      const monthlyTax = estimatedPropertyTax / 12;
      const monthlyInsurance = estimatedInsurance / 12;
      const monthlyPMI = downPayment < estimatedHomePrice * 0.2 ? (principal * 0.005) / 12 : 0;

      const totalMonthlyPayment = monthlyPrincipalAndInterest + monthlyTax + monthlyInsurance + monthlyPMI;

      if (Math.abs(totalMonthlyPayment - availableForHousing) < 5) {
        break;
      }

      if (totalMonthlyPayment > availableForHousing) {
        estimatedHomePrice -= step;
      } else {
        estimatedHomePrice += step;
      }

      iterations++;
      if (iterations % 15 === 0 && step > 100) {
        step = Math.max(100, step / 2);
      }
    }

    const homePrice = Math.max(downPayment, estimatedHomePrice);
    const principal = homePrice - downPayment;

    const monthlyPrincipalAndInterest =
      principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const calculatedPropertyTax = homePrice * 0.0169;
    const calculatedInsurance = homePrice * 0.0055;
    const monthlyTax = calculatedPropertyTax / 12;
    const monthlyInsurance = calculatedInsurance / 12;
    const monthlyPMI = downPayment < homePrice * 0.2 ? (principal * 0.005) / 12 : 0;

    const totalMonthlyPayment = monthlyPrincipalAndInterest + monthlyTax + monthlyInsurance + monthlyPMI;

    return {
      homePrice,
      loanAmount: principal,
      monthlyPayment: totalMonthlyPayment,
      availableForHousing,
      monthlyIncome,
      principalAndInterest: monthlyPrincipalAndInterest,
      tax: monthlyTax,
      insurance: monthlyInsurance,
      pmi: monthlyPMI,
      housingRatio: (totalMonthlyPayment / monthlyIncome) * 100,
      debtRatio: ((totalMonthlyPayment + monthlyDebts) / monthlyIncome) * 100,
      calculatedPropertyTax,
      calculatedInsurance,
    };
  };

  const affordability = calculateAffordability();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Your Financial Information</h3>
        <div className="space-y-6">
          <CurrencyInputField
            label="Annual Income"
            value={annualIncome}
            onChange={setAnnualIncome}
            min={30000}
            max={699000}
            step={100}
            sliderStep={1000}
          />

          <CurrencyInputField
            label="Monthly Debts"
            value={monthlyDebts}
            onChange={setMonthlyDebts}
            min={0}
            max={5000}
            step={1}
            sliderStep={100}
          />

          <div className="border-t pt-6">
            <h4 className="font-semibold text-gray-900 mb-4">Loan Details</h4>

            <div className="space-y-4">
              <CurrencyInputField
                label="Down Payment"
                value={downPayment}
                onChange={setDownPayment}
                min={0}
                max={200000}
                step={100}
                sliderStep={1000}
              />

              <PercentageInputField
                label="Interest Rate"
                value={interestRate}
                onChange={setInterestRate}
                min={2}
                max={14}
                step={0.125}
              />

              <SelectField
                label={`Loan Term: ${loanTerm} years`}
                value={loanTerm}
                onChange={setLoanTerm}
                options={[
                  { value: 15, label: '15 years' },
                  { value: 20, label: '20 years' },
                  { value: 30, label: '30 years' },
                ]}
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Property Tax
                </label>
                <div className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700">
                  ${Math.round(affordability.calculatedPropertyTax).toLocaleString()}
                </div>
                <p className="text-xs text-gray-500 mt-1">Calculated at 1.69% of property price</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Home Insurance
                </label>
                <div className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700">
                  ${Math.round(affordability.calculatedInsurance).toLocaleString()}
                </div>
                <p className="text-xs text-gray-500 mt-1">Calculated at 0.55% of property price</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-gray-800 text-white rounded-xl shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-4">
            <Calculator className="w-8 h-8 text-blue-500" />
            <h3 className="text-2xl font-bold">You Can Afford</h3>
          </div>
          <div className="text-5xl font-bold mb-2">
            ${Math.round(affordability.homePrice).toLocaleString()}
          </div>
          <p className="text-gray-300">Maximum property price</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Payment Breakdown</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-3 border-b">
              <span className="text-gray-600">Principal & Interest</span>
              <span className="font-semibold text-gray-900">
                ${Math.round(affordability.principalAndInterest).toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b">
              <span className="text-gray-600">Property Tax</span>
              <span className="font-semibold text-gray-900">
                ${Math.round(affordability.tax).toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b">
              <span className="text-gray-600">Property Insurance</span>
              <span className="font-semibold text-gray-900">
                ${Math.round(affordability.insurance).toLocaleString()}
              </span>
            </div>
            {affordability.pmi > 0 && (
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-gray-600">PMI</span>
                <span className="font-semibold text-gray-900">
                  ${Math.round(affordability.pmi).toLocaleString()}
                </span>
              </div>
            )}
            <div className="flex justify-between items-center pt-3 text-lg">
              <span className="font-bold text-gray-900">Total Monthly Payment</span>
              <span className="font-bold text-gray-900">
                ${Math.round(affordability.monthlyPayment).toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Affordability Analysis</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Housing Ratio</span>
                <span className="font-semibold">
                  {affordability.housingRatio.toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${affordability.housingRatio <= 33 ? 'bg-green-600' : 'bg-red-600'}`}
                  style={{ width: `${Math.min(affordability.housingRatio, 100)}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">Recommended: 33% or less</p>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Total Debt Ratio</span>
                <span className="font-semibold">
                  {affordability.debtRatio.toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${affordability.debtRatio <= 45 ? 'bg-green-600' : 'bg-red-600'}`}
                  style={{ width: `${Math.min(affordability.debtRatio, 100)}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">Recommended: 45% or less</p>
            </div>

            <div className="pt-4 border-t">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Monthly Income</span>
                <span className="font-semibold text-gray-900">
                  ${Math.round(affordability.monthlyIncome).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Available for Housing</span>
                <span className="font-semibold text-gray-900">
                  ${Math.round(affordability.availableForHousing).toLocaleString()}
                </span>
              </div>
            </div>

            {affordability.monthlyPayment > affordability.availableForHousing && (
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <span className="font-semibold">Warning:</span> Your payment exceeds recommended guidelines. Consider a lower property price or larger down payment.
                </p>
              </div>
            )}

            {affordability.monthlyPayment <= affordability.availableForHousing && (
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-800">
                  <span className="font-semibold">Great!</span> This property price fits comfortably within your budget.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function RefinanceCalculator() {
  const [currentLoanBalance, setCurrentLoanBalance] = useState(250000);
  const [currentRate, setCurrentRate] = useState(7.5);
  const [payoffMonth, setPayoffMonth] = useState(new Date().getMonth() + 1);
  const [payoffYear, setPayoffYear] = useState(new Date().getFullYear() + 25);
  const [otherMonthlyDebts, setOtherMonthlyDebts] = useState(0);
  const [newRate, setNewRate] = useState(6.0);
  const [newLoanTerm, setNewLoanTerm] = useState(30);
  const [cashOut, setCashOut] = useState(0);
  const [closingCosts, setClosingCosts] = useState(5000);

  const calculateRefinance = () => {
    const currentDate = new Date();
    const payoffDate = new Date(payoffYear, payoffMonth - 1);
    const monthsToPayoff = Math.max(1, (payoffDate.getFullYear() - currentDate.getFullYear()) * 12 + (payoffDate.getMonth() - currentDate.getMonth()));
    const yearsToPayoff = monthsToPayoff / 12;

    const currentMonthlyRate = currentRate / 100 / 12;
    const currentMonthlyPayment = monthsToPayoff > 0
      ? currentLoanBalance * (currentMonthlyRate * Math.pow(1 + currentMonthlyRate, monthsToPayoff)) /
        (Math.pow(1 + currentMonthlyRate, monthsToPayoff) - 1)
      : 0;

    const newMonthlyRate = newRate / 100 / 12;
    const numberOfPayments = newLoanTerm * 12;

    const newLoanAmount = currentLoanBalance + cashOut;
    const newMonthlyPayment =
      newLoanAmount * (newMonthlyRate * Math.pow(1 + newMonthlyRate, numberOfPayments)) /
      (Math.pow(1 + newMonthlyRate, numberOfPayments) - 1);

    const totalCurrentPayment = currentMonthlyPayment + otherMonthlyDebts;
    const totalNewPayment = newMonthlyPayment;
    const monthlySavings = totalCurrentPayment - totalNewPayment;
    const breakEvenMonths = monthlySavings > 0 ? closingCosts / monthlySavings : 0;

    const totalCurrentLoanInterest = (currentMonthlyPayment * monthsToPayoff) - currentLoanBalance;

    let totalDebtInterestSavings = 0;
    if (otherMonthlyDebts > 0) {
      const numberOfDebts = otherMonthlyDebts / 100;
      const debtPrincipal = 5000;
      const debtRate = 9 / 100 / 12;
      const debtTerm = 7 * 12;

      const debtMonthlyPayment = debtPrincipal * (debtRate * Math.pow(1 + debtRate, debtTerm)) /
        (Math.pow(1 + debtRate, debtTerm) - 1);

      const totalDebtInterestPerDebt = (debtMonthlyPayment * debtTerm) - debtPrincipal;
      totalDebtInterestSavings = totalDebtInterestPerDebt * numberOfDebts;
    }

    const totalNewLoanInterest = (newMonthlyPayment * numberOfPayments) - newLoanAmount;

    const lifetimeSavings = (totalCurrentLoanInterest + totalDebtInterestSavings) - totalNewLoanInterest;

    const payoffDifference = newLoanTerm - yearsToPayoff;

    return {
      currentMonthlyPayment,
      newMonthlyPayment,
      monthlySavings,
      breakEvenMonths,
      lifetimeSavings,
      payoffDifference,
      newLoanAmount,
    };
  };

  const refinance = calculateRefinance();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Refinance Details</h3>
        <div className="space-y-6">
          <CurrencyInputField
            label="Current Loan Balance"
            value={currentLoanBalance}
            onChange={setCurrentLoanBalance}
            showSlider={true}
            min={0}
            max={1000000}
            step={100}
            sliderStep={1000}
          />

          <PercentageInputField
            label="Current Interest Rate"
            value={currentRate}
            onChange={setCurrentRate}
            showSlider={true}
            min={2}
            max={14}
            step={0.125}
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Loan Payoff Date
            </label>
            <div className="grid grid-cols-2 gap-2">
              <select
                value={payoffMonth}
                onChange={(e) => setPayoffMonth(Number(e.target.value))}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                  <option key={month} value={month}>
                    {new Date(2000, month - 1).toLocaleString('default', { month: 'long' })}
                  </option>
                ))}
              </select>
              <input
                type="number"
                value={payoffYear}
                onChange={(e) => setPayoffYear(Number(e.target.value))}
                min={new Date().getFullYear()}
                max={new Date().getFullYear() + 50}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Monthly Payment (Principal & Interest)
            </label>
            <div className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700">
              ${Math.round(refinance.currentMonthlyPayment).toLocaleString()}
            </div>
            <p className="text-xs text-gray-500 mt-1">Calculated from loan balance, interest rate, and payoff date</p>
          </div>

          <div className="border-t pt-6">
            <h4 className="font-semibold text-gray-900 mb-4">New Loan Terms</h4>

            <div className="space-y-4">
              <PercentageInputField
                label="New Interest Rate"
                value={newRate}
                onChange={setNewRate}
                showSlider={true}
                min={2}
                max={14}
                step={0.125}
              />

              <SelectField
                label={`New Loan Term: ${newLoanTerm} years`}
                value={newLoanTerm}
                onChange={setNewLoanTerm}
                options={[
                  { value: 15, label: '15 years' },
                  { value: 20, label: '20 years' },
                  { value: 30, label: '30 years' },
                ]}
              />

              <CurrencyInputField
                label="Extra Cash Out"
                value={cashOut}
                onChange={setCashOut}
                showSlider={true}
                min={0}
                max={500000}
                step={100}
                sliderStep={1000}
              />

              <CurrencyInputField
                label="Monthly Payments of any Debts Being Paid Off"
                value={otherMonthlyDebts}
                onChange={setOtherMonthlyDebts}
                showSlider={true}
                min={0}
                max={10000}
                step={1}
                sliderStep={100}
              />

              <CurrencyInputField
                label="Estimated Closing Costs"
                value={closingCosts}
                onChange={setClosingCosts}
                showSlider={true}
                min={0}
                max={25000}
                step={100}
                sliderStep={1000}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-gray-800 text-white rounded-xl shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-4">
            <TrendingDown className="w-8 h-8 text-green-500" />
            <h3 className="text-2xl font-bold">Monthly Savings</h3>
          </div>
          <div className={`text-5xl font-bold mb-2 ${refinance.monthlySavings >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            ${Math.round(refinance.monthlySavings).toLocaleString()}
          </div>
          <p className="text-gray-300">Save each month</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Refinance Analysis</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-3 border-b">
              <span className="text-gray-600">Current Payment</span>
              <span className="font-semibold text-gray-900">
                ${Math.round(refinance.currentMonthlyPayment).toLocaleString()}
              </span>
            </div>
            {otherMonthlyDebts > 0 && (
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-gray-600">Other Debts Being Paid Off</span>
                <span className="font-semibold text-gray-900">
                  ${Math.round(otherMonthlyDebts).toLocaleString()}
                </span>
              </div>
            )}
            <div className="flex justify-between items-center pb-3 border-b">
              <span className="text-gray-600">New Payment</span>
              <span className="font-semibold text-green-600">
                ${Math.round(refinance.newMonthlyPayment).toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b">
              <span className="text-gray-600">Monthly Savings</span>
              <span className={`font-semibold ${refinance.monthlySavings >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ${Math.round(refinance.monthlySavings).toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b">
              <span className="text-gray-600">New Loan Amount</span>
              <span className="font-semibold text-gray-900">
                ${Math.round(refinance.newLoanAmount).toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b">
              <span className="text-gray-600">Break-Even Point</span>
              <span className="font-semibold text-gray-900">
                {Math.round(refinance.breakEvenMonths)} months
              </span>
            </div>
            <div className="flex justify-between items-center pt-3">
              <span className="font-bold text-gray-900">Lifetime Savings</span>
              <span className={`font-bold ${refinance.lifetimeSavings >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ${Math.round(refinance.lifetimeSavings).toLocaleString()}
              </span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4 italic">**Taxes or Insurance are not considered for this calculation</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Refinance Summary</h3>
          <div className="space-y-3">
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• You'll save ${Math.round(refinance.monthlySavings)} per month</li>
              <li>• Break even in {Math.round(refinance.breakEvenMonths)} months</li>
              <li>• Total lifetime savings of ${Math.round(refinance.lifetimeSavings).toLocaleString()}</li>
              {refinance.payoffDifference > 0 && (
                <li>• Paying off {Math.abs(refinance.payoffDifference).toFixed(1)} years slower</li>
              )}
              {refinance.payoffDifference < 0 && (
                <li>• Paying off {Math.abs(refinance.payoffDifference).toFixed(1)} years faster</li>
              )}
              {cashOut > 0 && (
                <li>• Receiving ${cashOut.toLocaleString()} in cash out</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
