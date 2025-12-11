import { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { CurrencyInputField, PercentageInputField } from './CalculatorFormFields';

export default function InvestmentCalculator() {
  const [purchasePrice, setPurchasePrice] = useState(550000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(7);
  const [loanTerm, setLoanTerm] = useState(20);
  const [closingCost, setClosingCost] = useState(12000);

  const [monthlyRent, setMonthlyRent] = useState(5000);
  const [rentIncrease, setRentIncrease] = useState(4);
  const [otherMonthlyIncome, setOtherMonthlyIncome] = useState(0);
  const [otherIncomeIncrease, setOtherIncomeIncrease] = useState(4);
  const [vacancyRate, setVacancyRate] = useState(5);
  const [managementFee, setManagementFee] = useState(6);

  const [propertyTax, setPropertyTax] = useState(9000);
  const [propertyTaxIncrease, setPropertyTaxIncrease] = useState(4);
  const [totalInsurance, setTotalInsurance] = useState(5000);
  const [insuranceIncrease, setInsuranceIncrease] = useState(4);
  const [hoaFee, setHoaFee] = useState(0);
  const [hoaIncrease, setHoaIncrease] = useState(4);
  const [maintenance, setMaintenance] = useState(17000);
  const [maintenanceIncrease, setMaintenanceIncrease] = useState(4);
  const [otherCosts, setOtherCosts] = useState(2500);
  const [otherCostsIncrease, setOtherCostsIncrease] = useState(4);

  const [valueAppreciation, setValueAppreciation] = useState(3);
  const [holdingLength, setHoldingLength] = useState(10);

  const calculateInvestment = () => {
    const downPayment = (purchasePrice * downPaymentPercent) / 100;
    const loanAmount = purchasePrice - downPayment;
    const totalInitialInvestment = downPayment + closingCost;

    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const monthlyMortgagePayment = loanAmount > 0
      ? loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
      : 0;

    let totalRentalIncome = 0;
    let totalMortgagePayments = 0;
    let totalExpenses = 0;
    let currentPropertyValue = purchasePrice;

    for (let year = 1; year <= holdingLength; year++) {
      const yearMultiplier = year - 1;

      const annualRent = monthlyRent * 12 * Math.pow(1 + rentIncrease / 100, yearMultiplier);
      const annualOtherIncome = otherMonthlyIncome * 12 * Math.pow(1 + otherIncomeIncrease / 100, yearMultiplier);
      const grossIncome = annualRent + annualOtherIncome;
      const vacancyLoss = grossIncome * (vacancyRate / 100);
      const managementFeeCost = grossIncome * (managementFee / 100);
      const effectiveIncome = grossIncome - vacancyLoss - managementFeeCost;

      totalRentalIncome += effectiveIncome;

      const yearPropertyTax = propertyTax * Math.pow(1 + propertyTaxIncrease / 100, yearMultiplier);
      const yearInsurance = totalInsurance * Math.pow(1 + insuranceIncrease / 100, yearMultiplier);
      const yearHoa = hoaFee * Math.pow(1 + hoaIncrease / 100, yearMultiplier);
      const yearMaintenance = maintenance * Math.pow(1 + maintenanceIncrease / 100, yearMultiplier);
      const yearOtherCosts = otherCosts * Math.pow(1 + otherCostsIncrease / 100, yearMultiplier);

      const annualExpenses = yearPropertyTax + yearInsurance + yearHoa + yearMaintenance + yearOtherCosts;
      totalExpenses += annualExpenses;

      totalMortgagePayments += monthlyMortgagePayment * 12;

      currentPropertyValue = purchasePrice * Math.pow(1 + valueAppreciation / 100, year);
    }

    const totalNetOperatingIncome = totalRentalIncome - totalExpenses;
    const totalCashFlow = totalNetOperatingIncome - totalMortgagePayments;

    const remainingBalance = loanAmount > 0 ? calculateRemainingBalance(
      loanAmount,
      monthlyRate,
      numberOfPayments,
      holdingLength * 12
    ) : 0;

    const equityAtSale = currentPropertyValue - remainingBalance;
    const totalProfit = equityAtSale - totalInitialInvestment;

    const irr = calculateIRR(totalInitialInvestment, totalCashFlow, holdingLength, equityAtSale);
    const cashOnCashReturn = (totalCashFlow / totalInitialInvestment / holdingLength) * 100;

    const principalPaid = totalMortgagePayments - (totalRentalIncome - totalNetOperatingIncome);
    const capitalizationRate = totalNetOperatingIncome > 0
      ? (totalNetOperatingIncome / holdingLength) / purchasePrice * 100
      : 0;

    return {
      irr,
      totalProfit,
      cashOnCashReturn,
      capitalizationRate,
      totalRentalIncome,
      totalMortgagePayments,
      totalExpenses,
      totalNetOperatingIncome,
      totalCashFlow,
      currentPropertyValue,
      remainingBalance,
      equityAtSale,
      totalInitialInvestment,
    };
  };

  const calculateRemainingBalance = (
    principal: number,
    monthlyRate: number,
    totalPayments: number,
    paymentsMade: number
  ) => {
    if (monthlyRate === 0) return 0;

    const remaining = principal * (
      (Math.pow(1 + monthlyRate, totalPayments) - Math.pow(1 + monthlyRate, paymentsMade)) /
      (Math.pow(1 + monthlyRate, totalPayments) - 1)
    );

    return Math.max(0, remaining);
  };

  const calculateIRR = (
    initialInvestment: number,
    totalCashFlow: number,
    years: number,
    finalValue: number
  ) => {
    const annualCashFlow = totalCashFlow / years;
    const totalReturn = finalValue + totalCashFlow - initialInvestment;

    let irr = 0.05;
    for (let i = 0; i < 100; i++) {
      let npv = -initialInvestment;

      for (let year = 1; year <= years; year++) {
        if (year === years) {
          npv += (annualCashFlow + finalValue) / Math.pow(1 + irr, year);
        } else {
          npv += annualCashFlow / Math.pow(1 + irr, year);
        }
      }

      if (Math.abs(npv) < 1) break;

      const delta = npv > 0 ? 0.001 : -0.001;
      irr += delta;

      if (irr < -0.99 || irr > 2) break;
    }

    return irr * 100;
  };

  const results = calculateInvestment();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6 bg-blue-900 text-white p-3 -m-6 mb-6 rounded-t-xl">
            Purchase
          </h3>
          <div className="space-y-6">
            <CurrencyInputField
              label="Purchase Price"
              value={purchasePrice}
              onChange={setPurchasePrice}
              min={50000}
              max={5000000}
              step={1000}
              sliderStep={10000}
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Down Payment
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  min="0"
                  max="100"
                  className="w-full px-4 py-2 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
                <span className="absolute right-3 top-2 text-gray-500">%</span>
              </div>
              <div className="text-sm text-gray-600 mt-1">
                ${((purchasePrice * downPaymentPercent) / 100).toLocaleString()}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interest Rate
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  min="2"
                  max="15"
                  step="0.125"
                  className="w-full px-4 py-2 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
                <span className="absolute right-3 top-2 text-gray-500">%</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Term: {loanTerm} years
              </label>
              <select
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              >
                <option value={10}>10 years</option>
                <option value={15}>15 years</option>
                <option value={20}>20 years</option>
                <option value={25}>25 years</option>
                <option value={30}>30 years</option>
              </select>
            </div>

            <CurrencyInputField
              label="Closing Cost"
              value={closingCost}
              onChange={setClosingCost}
              min={0}
              max={100000}
              step={100}
              sliderStep={1000}
              showSlider={false}
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6 bg-blue-900 text-white p-3 -m-6 mb-6">
            Recurring Operating Expenses
          </h3>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <CurrencyInputField
                label="Property Tax"
                value={propertyTax}
                onChange={setPropertyTax}
                min={0}
                max={50000}
                step={100}
                showSlider={false}
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Annual Increase</label>
                <div className="relative">
                  <input
                    type="number"
                    value={propertyTaxIncrease}
                    onChange={(e) => setPropertyTaxIncrease(Number(e.target.value))}
                    className="w-full px-4 py-2 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                  <span className="absolute right-3 top-2 text-gray-500">%</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <CurrencyInputField
                label="Total Insurance"
                value={totalInsurance}
                onChange={setTotalInsurance}
                min={0}
                max={50000}
                step={100}
                showSlider={false}
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Annual Increase</label>
                <div className="relative">
                  <input
                    type="number"
                    value={insuranceIncrease}
                    onChange={(e) => setInsuranceIncrease(Number(e.target.value))}
                    className="w-full px-4 py-2 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                  <span className="absolute right-3 top-2 text-gray-500">%</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <CurrencyInputField
                label="HOA Fee"
                value={hoaFee}
                onChange={setHoaFee}
                min={0}
                max={20000}
                step={100}
                showSlider={false}
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Annual Increase</label>
                <div className="relative">
                  <input
                    type="number"
                    value={hoaIncrease}
                    onChange={(e) => setHoaIncrease(Number(e.target.value))}
                    className="w-full px-4 py-2 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                  <span className="absolute right-3 top-2 text-gray-500">%</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <CurrencyInputField
                label="Maintenance"
                value={maintenance}
                onChange={setMaintenance}
                min={0}
                max={100000}
                step={100}
                showSlider={false}
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Annual Increase</label>
                <div className="relative">
                  <input
                    type="number"
                    value={maintenanceIncrease}
                    onChange={(e) => setMaintenanceIncrease(Number(e.target.value))}
                    className="w-full px-4 py-2 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                  <span className="absolute right-3 top-2 text-gray-500">%</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <CurrencyInputField
                label="Other Costs"
                value={otherCosts}
                onChange={setOtherCosts}
                min={0}
                max={50000}
                step={100}
                showSlider={false}
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Annual Increase</label>
                <div className="relative">
                  <input
                    type="number"
                    value={otherCostsIncrease}
                    onChange={(e) => setOtherCostsIncrease(Number(e.target.value))}
                    className="w-full px-4 py-2 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                  <span className="absolute right-3 top-2 text-gray-500">%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6 bg-blue-900 text-white p-3 -m-6 mb-6">
            Income
          </h3>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <CurrencyInputField
                label="Monthly Rent"
                value={monthlyRent}
                onChange={setMonthlyRent}
                min={0}
                max={50000}
                step={100}
                showSlider={false}
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Annual Increase</label>
                <div className="relative">
                  <input
                    type="number"
                    value={rentIncrease}
                    onChange={(e) => setRentIncrease(Number(e.target.value))}
                    className="w-full px-4 py-2 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                  <span className="absolute right-3 top-2 text-gray-500">%</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <CurrencyInputField
                label="Other Monthly Income"
                value={otherMonthlyIncome}
                onChange={setOtherMonthlyIncome}
                min={0}
                max={50000}
                step={100}
                showSlider={false}
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Annual Increase</label>
                <div className="relative">
                  <input
                    type="number"
                    value={otherIncomeIncrease}
                    onChange={(e) => setOtherIncomeIncrease(Number(e.target.value))}
                    className="w-full px-4 py-2 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                  <span className="absolute right-3 top-2 text-gray-500">%</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vacancy Rate
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={vacancyRate}
                  onChange={(e) => setVacancyRate(Number(e.target.value))}
                  min="0"
                  max="50"
                  step="1"
                  className="w-full px-4 py-2 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
                <span className="absolute right-3 top-2 text-gray-500">%</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Management Fee
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={managementFee}
                  onChange={(e) => setManagementFee(Number(e.target.value))}
                  min="0"
                  max="20"
                  step="1"
                  className="w-full px-4 py-2 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
                <span className="absolute right-3 top-2 text-gray-500">%</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Value Appreciation (per year)
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={valueAppreciation}
                  onChange={(e) => setValueAppreciation(Number(e.target.value))}
                  min="0"
                  max="15"
                  step="0.5"
                  className="w-full px-4 py-2 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
                <span className="absolute right-3 top-2 text-gray-500">%</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Holding Length
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={holdingLength}
                  onChange={(e) => setHoldingLength(Number(e.target.value))}
                  min="1"
                  max="30"
                  step="1"
                  className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
                <span className="absolute right-3 top-2 text-gray-500">years</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 text-white rounded-xl shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <TrendingUp className="w-8 h-8 text-green-500" />
            <h3 className="text-2xl font-bold">For the {holdingLength} Years Invested</h3>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-700">
              <span className="text-gray-300">Return (IRR):</span>
              <span className="font-bold text-green-400">{results.irr.toFixed(2)}% per year</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-700">
              <span className="text-gray-300">Cash on Cash Return:</span>
              <span className="font-bold">{results.cashOnCashReturn.toFixed(2)}%</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-700">
              <span className="text-gray-300">Capitalization Rate:</span>
              <span className="font-bold">{results.capitalizationRate.toFixed(2)}%</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-700">
              <span className="text-gray-300">Total Rental Income:</span>
              <span className="font-bold">${results.totalRentalIncome.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-700">
              <span className="text-gray-300">Total Mortgage Payments:</span>
              <span className="font-bold">${results.totalMortgagePayments.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-700">
              <span className="text-gray-300">Total Expenses:</span>
              <span className="font-bold">${results.totalExpenses.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-700">
              <span className="text-gray-300">Total Cash Flow:</span>
              <span className={`font-bold ${results.totalCashFlow >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                ${results.totalCashFlow.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-300">Total Net Operating Income:</span>
              <span className="font-bold">${results.totalNetOperatingIncome.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
            </div>
            <p className="text-xs text-gray-400 italic -mt-1">
              NOI does not consider financing payments in its calculation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
