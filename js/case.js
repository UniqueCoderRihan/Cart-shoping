// Btn-case-Plus
document.getElementById('btn-case-plus').addEventListener('click', function(){
    const caseNumberFiled = document.getElementById('case-number-filed');
    const caseNumberString = caseNumberFiled.value;
    const previousCaseNumber = parseInt(caseNumberString);
    const newCaseNumber = previousCaseNumber+ 1;
    caseNumberFiled.value = newCaseNumber;
})
// btn-case-minus
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const caseNumberMinusFiled = document.getElementById('case-number-filed');
    const caseNumberMinusString = caseNumberMinusFiled.value;
    const previousCaseMinusNumber = parseInt(caseNumberMinusString);
    const newCaseMinus = previousCaseMinusNumber-1;
    caseNumberMinusFiled.value = newCaseMinus;
    
})