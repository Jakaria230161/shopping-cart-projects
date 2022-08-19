// console.log("connected your js file"); for test

document.getElementById("btn-case-plus").addEventListener("click", function () {
    // console.log("case button clicked"); for test

    const caseNumberField = document.getElementById("case-number-field");
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseFloat(caseNumberString);
    const newCaseNumber = previousCaseNumber + 1;
    caseNumberField.value = newCaseNumber;
    console.log(previousCaseNumber);
})