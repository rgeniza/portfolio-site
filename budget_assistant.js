let startupName = "Quant";
let initialCap = 1000000;
let monthlyRev = 250000;
let monthlyExp = 200000;
let netCashFlow = monthlyRev-monthlyExp;
let currentBalance = initialCap + netCashFlow;
let isProfitable = netCashFlow > 0;
console.log(startupName)
console.log(netCashFlow)
console.log(currentBalance)
console.log(isProfitable)
