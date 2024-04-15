const er_1 = document.querySelector("#error-1"); //error symbol for annual
const er_2 = document.querySelector("#error-2"); //error symbol for extra
const er_3 = document.querySelector("#error-3"); //error symbol for age
const er_4 = document.querySelector("#error-4"); //error symbol for deduct

let submit = document.querySelector("#submit"); // the submit button

let result=document.querySelector("#result-container");
let finalAmt=document.querySelector("#final-value");
let close = document.querySelector("#close");

let check = true;

//validation

const validate = (annual, extra, age, deduct) => {
  if (annual=="" || isNaN(annual) || annual < 0) {
    er_1.style.display = "flex";
    check=false
  }
  if (extra=="" || isNaN(extra) || extra < 0) {
    er_2.style.display = "flex";
    check=false
  }
  if (age == "") {
    er_3.style.display = "flex";
    check=false
  }
  if (deduct=="" || isNaN(deduct) || deduct < 0) {
    er_4.style.display = "flex";
    check=false
  }
};

//calculation

const calc = (annual, extra, age, deduct) => {
  let totalInc = annual + extra - deduct;
  if (totalInc > 800000) {
    if (age == "< 40") {
      totalInc = totalInc - 0.3 * (totalInc - 800000);
      return totalInc;
    } else if (age == "≥ 40 & < 60 ") {
      totalInc = totalInc - 0.4 * (totalInc - 800000);
      return totalInc;
    } else {
      totalInc = totalInc - 0.1 * (totalInc - 800000);
      return totalInc;
    }
  }
  return totalInc;
};

//submitting the values

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let annual =document.querySelector("#annual-income").value; //value of annual income field
  let extra = document.querySelector("#extra-income").value; //value of extra income field
  let age = document.querySelector("#age-group").value; //value of age group selected
  let deduct = document.querySelector("#total-deductions").value; //value of total deductions

  check=true;

  validate(annual, extra, age, deduct);


  if(check==true){
    let finalValue = calc(annual, extra, age, deduct);
    result.style.display="flex";
    finalAmt.innerHTML=finalValue;
  }
});

//closing the result 

close.addEventListener("click",()=>{
  window.location.reload();
})
