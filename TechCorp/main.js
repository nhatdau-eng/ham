
    function calculateBonus(globalBaseSalary,globalPerformanceScore){
    return globalBaseSalary * (globalPerformanceScore - 1);
    }
    function calculateTax(totalIncome){
    let tax = 0;
    if (totalIncome > 10000000) {
        tax = totalIncome * 0.1;
    }
    return tax;
    }
     function calculateNetSalary(tatalIncome,tax){
    return totalIncome - tax;
     }
    function formattedSalary (netSalary){
    let formattedSalary = netSalary.toLocaleString('vi-VN') + " VNĐ";
    console.log("Lương thực nhận của nhân viên là: " + formattedSalary);
    }
    function processSalary(baseSalary, performanceScore){
    let bonus = calculateBonus(
        baseSalary,
        performanceScore
    );
    let totalIncome = baseSalary + bonus;
    let tax = calculateTax(totalIncome);
    let salary = netSalary(
        totalIncome,
        tax
    );
    formattedSalary(salary);
}
