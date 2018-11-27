/*======================================
    Show and hide different sections
======================================*/

window.onload = function() {
    travellersDetails.style.display = 'block';
    childrensDetails.style.display = "none";
    contactDetails.style.display = "none";
    travelDetails.style.display = "none";
    coverRequired.style.display = "none";    
    planSelected.style.display = "none";
    additionalCosts.style.display = "none";
}
function f1() {   
    travellersDetails.style.display = 'block';
    childrensDetails.style.display = "none";
    contactDetails.style.display = "none";
    travelDetails.style.display = "none";
    coverRequired.style.display = "none";    
    planSelected.style.display = "none";
    additionalCosts.style.display = "none";
}

function f2() {   
    travellersDetails.style.display = "none";
    childrensDetails.style.display = "block";
    contactDetails.style.display = "none";
    travelDetails.style.display = "none";
    coverRequired.style.display = "none";    
    planSelected.style.display = "none";
    additionalCosts.style.display = "none";
}

function f3() {   
    travellersDetails.style.display = "none";
    childrensDetails.style.display = "none";
    contactDetails.style.display = "block";
    travelDetails.style.display = "none";
    coverRequired.style.display = "none";    
    planSelected.style.display = "none";
    additionalCosts.style.display = "none";
}

function f4() {   
    travellersDetails.style.display = "none";
    childrensDetails.style.display = "none";
    contactDetails.style.display = "none";
    travelDetails.style.display = "block";
    coverRequired.style.display = "none";    
    planSelected.style.display = "none";
    additionalCosts.style.display = "none";
}

function f5() {   
    travellersDetails.style.display = "none";
    childrensDetails.style.display = "none";
    contactDetails.style.display = "none";
    travelDetails.style.display = "none";
    coverRequired.style.display = "block";   
    planSelected.style.display = "none";
    additionalCosts.style.display = "none";
}

function f6() {   
    travellersDetails.style.display = "none";
    childrensDetails.style.display = "none";
    contactDetails.style.display = "none";
    travelDetails.style.display = "none";
    coverRequired.style.display = "none";    
    planSelected.style.display = "block";
    additionalCosts.style.display = "none";
}

function f7() {   
    travellersDetails.style.display = "none";
    childrensDetails.style.display = "none";
    contactDetails.style.display = "none";
    travelDetails.style.display = "none";
    coverRequired.style.display = "none";    
    planSelected.style.display = "none";
    additionalCosts.style.display = "block";
}


/*============================================
    Clicking the drop-down menu items will 
    focus on the corresponding input field
============================================*/

function focust1() {
    document.getElementById("ts1").focus();
}

function focust2() {
    document.getElementById("ts2").focus();
}

function focusc1() {
    document.getElementById("cs1").focus();
}

function focusc2() {
    document.getElementById("cs2").focus();
}

function focusc3() {
    document.getElementById("cs3").focus();
}

function focusc4() {
    document.getElementById("cs4").focus();
}

function focuscd1() {
    document.getElementById("address").focus();
}

function focuscd2() {
    document.getElementById("email").focus();
}

function focuscd3() {
    document.getElementById("phone3").focus();
}


function focustd1() {
    document.getElementById("dd").focus();
}

function focustd2() {
    document.getElementById("rd").focus();
}

function focustd3() {
    document.getElementById("pt").focus();
}

function focustd4() {
    document.getElementById("md").focus();
}

function focustc() {
    document.getElementById("tc").focus();
}

function focusp1() {
    document.getElementById("premium1").focus();
}

function focusp2() {
    document.getElementById("premium2").focus();
}

function focusp3() {
    document.getElementById("premium3").focus();
}

function focusp4() {
    document.getElementById("premium4").focus();
}

function focusp5() {
    document.getElementById("premium5").focus();
}

function focusac() {
    document.getElementById("condition1").focus();
}

/*===================================
    Check validity for section 1 
===================================*/

function validity1() {      
    errort1.innerHTML = '';
    errort2.innerHTML = '';
    errort3.innerHTML = '';
    errort4.innerHTML = '';
    errort5.innerHTML = '';
    errort6.innerHTML = '';
    errort7.innerHTML = '';
    errort8.innerHTML = '';

    if (!ts1.checkValidity()) {
        document.getElementById("errort1").innerHTML = ts1.validationMessage;    
    } else {
        errort1.innerHTML = "Input OK";
    }
    if (!tf1.checkValidity()) {
        document.getElementById("errort2").innerHTML = tf1.validationMessage;    
    } else {
        errort2.innerHTML = "Input OK";
    }
    if (!tt1.checkValidity()) {
        document.getElementById("errort3").innerHTML = tt1.validationMessage;    
    } else {
        errort3.innerHTML = "Input OK";
    }
    if (!tb1.checkValidity()) {
        document.getElementById("errort4").innerHTML = tb1.validationMessage;    
    } else {
        errort4.innerHTML = "Input OK";
    }
    if (!ts2.checkValidity()) {
        document.getElementById("errort5").innerHTML = ts2.validationMessage;    
    } else {
        errort5.innerHTML = "Input OK";
    }
    if (!tf2.checkValidity()) {
        document.getElementById("errort6").innerHTML = tf2.validationMessage;    
    } else {
        errort6.innerHTML = "Input OK";
    }
    if (!tt2.checkValidity()) {
        document.getElementById("errort7").innerHTML = tt2.validationMessage;    
    } else {
        errort7.innerHTML = "Input OK";
    }
    if (!tb2.checkValidity()) {
        document.getElementById("errort8").innerHTML = tb2.validationMessage;  
    } else {
        errort8.innerHTML = "Input OK";
    }
}


/*===================================
    Check validity for section 2 
===================================*/

function validity2() {      
    errorc1.innerHTML = '';
    errorc2.innerHTML = '';
    errorc3.innerHTML = '';
    errorc4.innerHTML = '';
    errorc5.innerHTML = '';
    errorc6.innerHTML = '';
    errorc7.innerHTML = '';
    errorc8.innerHTML = '';
    errorc9.innerHTML = '';
    errorc10.innerHTML = '';
    errorc11.innerHTML = '';
    errorc12.innerHTML = '';
    errorc13.innerHTML = '';
    errorc14.innerHTML = '';
    errorc15.innerHTML = '';
    errorc16.innerHTML = '';

    if (!cs1.checkValidity()) {
        document.getElementById("errorc1").innerHTML = cs1.validationMessage;    
    } else {
        errorc1.innerHTML = "Input OK";
    }
    if (!cf1.checkValidity()) {
        document.getElementById("errorc2").innerHTML = cf1.validationMessage;    
    } else {
        errorc2.innerHTML = "Input OK";
    }
    if (!ct1.checkValidity()) {
        document.getElementById("errorc3").innerHTML = ct1.validationMessage;    
    } else {
        errorc3.innerHTML = "Input OK";
    }
    if (!cb1.checkValidity()) {
        document.getElementById("errorc4").innerHTML = cb1.validationMessage;    
    } else {
        errorc4.innerHTML = "Input OK";
    }
    if (!cs2.checkValidity()) {
        document.getElementById("errorc5").innerHTML = cs2.validationMessage;    
    } else {
        errorc5.innerHTML = "Input OK";
    }
    if (!cf2.checkValidity()) {
        document.getElementById("errorc6").innerHTML = cf2.validationMessage;    
    } else {
        errorc6.innerHTML = "Input OK";
    }
    if (!ct2.checkValidity()) {
        document.getElementById("errorc7").innerHTML = ct2.validationMessage;    
    } else {
        errorc7.innerHTML = "Input OK";
    }
    if (!cb2.checkValidity()) {
        document.getElementById("errorc8").innerHTML = cb2.validationMessage;  
    } else {
        errorc8.innerHTML = "Input OK";
    }
    if (!cs3.checkValidity()) {
        document.getElementById("errorc9").innerHTML = cs1.validationMessage;    
    } else {
        errorc9.innerHTML = "Input OK";
    }
    if (!cf3.checkValidity()) {
        document.getElementById("errorc10").innerHTML = cf1.validationMessage;    
    } else {
        errorc10.innerHTML = "Input OK";
    }
    if (!ct3.checkValidity()) {
        document.getElementById("errorc11").innerHTML = ct1.validationMessage;    
    } else {
        errorc11.innerHTML = "Input OK";
    }
    if (!cb3.checkValidity()) {
        document.getElementById("errorc12").innerHTML = cb1.validationMessage;    
    } else {
        errorc12.innerHTML = "Input OK";
    }
    if (!cs4.checkValidity()) {
        document.getElementById("errorc13").innerHTML = cs2.validationMessage;    
    } else {
        errorc13.innerHTML = "Input OK";
    }
    if (!cf4.checkValidity()) {
        document.getElementById("errorc14").innerHTML = cf2.validationMessage;    
    } else {
        errorc14.innerHTML = "Input OK";
    }
    if (!ct4.checkValidity()) {
        document.getElementById("errorc15").innerHTML = ct2.validationMessage;    
    } else {
        errorc15.innerHTML = "Input OK";
    }
    if (!cb4.checkValidity()) {
        document.getElementById("errorc16").innerHTML = cb2.validationMessage;  
    } else {
        errorc16.innerHTML = "Input OK";
    }   
}

/*===================================
    Check validity for section 3 
===================================*/

function validity3() {      
    errorcd1.innerHTML = '';
    errorcd2.innerHTML = '';
    errorcd3.innerHTML = '';
    errorcd4.innerHTML = '';
    errorcd5.innerHTML = '';
    errorcd6.innerHTML = '';
    errorcd7.innerHTML = '';
    errorcd8.innerHTML = '';

    if (!address.checkValidity()) {
        document.getElementById("errorcd1").innerHTML = address.validationMessage;    
    } else {
        errorcd1.innerHTML = "Input OK";
    } 
    if (!suburb.checkValidity()) {
        document.getElementById("errorcd2").innerHTML = suburb.validationMessage;    
    } else {
        errorcd2.innerHTML = "Input OK";
    } 
    if (!state.checkValidity()) {
        document.getElementById("errorcd3").innerHTML = state.validationMessage;    
    } else {
        errorcd3.innerHTML = "Input OK";
    } 
    if (!postcode.checkValidity()) {
        document.getElementById("errorcd4").innerHTML = postcode.validationMessage;    
    } else {
        errorcd4.innerHTML = "Input OK";
    } 
    if (!email.checkValidity()) {
        document.getElementById("errorcd5").innerHTML = email.validationMessage;    
    } else {
        errorcd5.innerHTML = "Input OK";
    } 
    if (!phone1.checkValidity()) {
        document.getElementById("errorcd6").innerHTML = phone1.validationMessage;    
    } else {
        errorcd6.innerHTML = "Input OK";
    } 
    if (!phone2.checkValidity()) {
        document.getElementById("errorcd7").innerHTML = phone2.validationMessage;    
    } else {
        errorcd7.innerHTML = "Input OK";
    } 
    if (!phone3.checkValidity()) {
        document.getElementById("errorcd8").innerHTML = phone3.validationMessage;  
    } else {
        errorcd8.innerHTML = "Input OK";
    }    
}

/*===================================
    Check validity for section 4 
===================================*/

function validity4() {      
    errortd1.innerHTML = '';
    errortd2.innerHTML = '';
    errortd3.innerHTML = '';
    errortd4.innerHTML = '';

    if (!dd.checkValidity()) {
        document.getElementById("errortd1").innerHTML = dd.validationMessage;    
    } else {
        errortd1.innerHTML = "Input OK";
    } 
    if (!rd.checkValidity()) {
        document.getElementById("errortd2").innerHTML = rd.validationMessage;    
    } else {
        errortd2.innerHTML = "Input OK";
    } 
    if (!pt.checkValidity()) {
        document.getElementById("errortd3").innerHTML = pt.validationMessage;    
    } else {
        errortd3.innerHTML = "Input OK";
    } 
    if (!md.checkValidity()) {
        document.getElementById("errortd4").innerHTML = md.validationMessage;  
    } else {
        errortd4.innerHTML = "Input OK";
    }    
}

/*===================================
    Check validity for section 5 
===================================*/

function validity5() {      
    errorcr.innerHTML = '';

    if (!covertype.checkValidity()) {
        document.getElementById("errorcr").innerHTML = covertype.validationMessage;  
    } else {
        errorcr.innerHTML = "Input OK";
    }    
}

/*===================================
    Check validity for section 6 
===================================*/

function validity6() {      
    errorp1.innerHTML = '';
    errorp2.innerHTML = '';
    errorp3.innerHTML = '';
    errorp4.innerHTML = '';
    errorp5.innerHTML = '';

    if (!premium1.checkValidity()) {
        document.getElementById("errorp1").innerHTML = premium1.validationMessage;    
    }     else {
        errorp1.innerHTML = "Input OK";
    }
    
    if (!premium2.checkValidity()) {
        document.getElementById("errorp2").innerHTML = premium2.validationMessage;    
    }     else {
        errorp2.innerHTML = "Input OK";
    }
    
    if (!premium3.checkValidity()) {
        document.getElementById("errorp3").innerHTML = premium3.validationMessage;    
    }     else {
        errorp3.innerHTML = "Input OK";
    }
    
    if (!premium4.checkValidity()) {
        document.getElementById("errorp4").innerHTML = premium4.validationMessage;    
    }     else {
        errorp4.innerHTML = "Input OK";
    }
    
    if (!premium5.checkValidity()) {
        document.getElementById("errorp5").innerHTML = premium5.validationMessage;    
    }     else {
        errorp5.innerHTML = "Input OK";
    }    
}

/*===================================
    Check validity for section 7 
===================================*/

function validity7() {      
    errorac1.innerHTML = '';
    errorac2.innerHTML = '';
    errorac3.innerHTML = '';

    if (!condition1.checkValidity()) {
        document.getElementById("errorac1").innerHTML = condition1.validationMessage;    
    }     else {
        errorac1.innerHTML = "Input OK";
    }
    if (!condition2.checkValidity()) {
        document.getElementById("errorac2").innerHTML = condition2.validationMessage;    
    }     else {
        errorac2.innerHTML = "Input OK";
    }
    if (!condition3.checkValidity()) {
        document.getElementById("errorac3").innerHTML = condition3.validationMessage;    
    }     else {
        errorac3.innerHTML = "Input OK";
    }    
}

/*======================================
    Checkbox enables submit button 
======================================*/

function enabler() {
    if (checkit.checked == true) {
        submitme.disabled = false;
        submitme.style.background = "orange"
        submitme.style.cursor = "pointer";
    } else {
        submitme.disabled = true;
        submitme.style.background = "grey"
        submitme.style.cursor = "auto";
    }
}


