// run with: ts-node src/fund.ts
import Decimal from "decimal.js";

const holdingCostPrice = 0;
const holdingShare = 0;
const currentValuation = 0;

const holdingCostPriceDecimal = new Decimal(holdingCostPrice);
const holdingShareDecimal = new Decimal(holdingShare);
const currentValuationDecimal = new Decimal(currentValuation);

const amountHeldDecimal = holdingCostPriceDecimal.mul(holdingShareDecimal);
const balanceDecimal = currentValuationDecimal.minus(holdingCostPriceDecimal);
const absoluteBalanceDecimal = balanceDecimal.abs();
const percentageDifferenceDecimal = absoluteBalanceDecimal.div(holdingCostPriceDecimal);
const finalAmountDecimal = amountHeldDecimal.mul(percentageDifferenceDecimal).round();

if (balanceDecimal.isNegative()) {
  console.log("Buy: ", finalAmountDecimal.toNumber());
} else {
  console.log("Sell: ", finalAmountDecimal.toNumber());
}
