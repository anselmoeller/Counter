
function displayStatusInfoHowToUse(){
    if (document.querySelector('.howToUse').hidden){
        document.querySelector('.howToUse').hidden = false;
        document.querySelector('.onlyStyleBackground').hidden = false;
    } else {
        document.querySelector('.howToUse').hidden = true;
    } 
};

function closeHowtoUse(){
    document.querySelector('.howToUse').hidden = true;
    document.querySelector('.onlyStyleBackground').hidden = true;
};

/* ------------Main functions to count -------------------- */
let counter = 0;
let typeOfCounter = '';
let timeIntervalCounter = ()=>{};
let reserOrStopCounter = false;

function execSumNum(){
    setVisibleOptions();
    clearInterval(timeIntervalCounter);
    if(activeMode === 'Manual Mode'){
        reserOrStopCounter = false;
        counter+=1;
        colorMode();
        document.querySelector('#showNumbers').innerHTML = counter; 
    } else {
            timeIntervalCounter = setInterval(() => {
            reserOrStopCounter = true;
            counter+=1;
            colorMode();
            document.querySelector('#showNumbers').innerHTML = counter; 
        }, '1000');
    };
}

function execDecreseNum(){
    setVisibleOptions();
    clearInterval(timeIntervalCounter);
    if(activeMode === 'Manual Mode'){
        reserOrStopCounter = false;
        counter-=1;
        colorMode();
        document.querySelector('#showNumbers').innerHTML = counter; 
    } else {
            timeIntervalCounter = setInterval(() => {
            reserOrStopCounter = true;
            counter-=1;
            colorMode();
            document.querySelector('#showNumbers').innerHTML = counter; 
        }, '1000');
    };
}

function execResetNum(){
    if (!reserOrStopCounter){
        clearInterval(timeIntervalCounter);
        counter = 0;
        document.querySelector('#showNumbers').innerHTML = counter;
        document.querySelector('#showNumbers').style.color = 'black';
        typeOfCounter = '';
        document.querySelector('.btnReset').hidden = true;
    } else {
        clearInterval(timeIntervalCounter);
        reserOrStopCounter = false;
        document.querySelector('.btnReset').innerText = 'Reset';
    }
}

/*------------------------- checking the mode active to count numbers  from buttons  by onclick-----------------------*/
let activeMode = 'Manual Mode'

function manualAutoMode(){
    if(activeMode === 'Auto Mode'){
        activeMode = 'Manual Mode';
        clearInterval(timeIntervalCounter);
        reserOrStopCounter = false;
        document.querySelector('.btnReset').innerText = 'Reset';
    } else {
        activeMode = 'Auto Mode';
    };
    document.querySelector('.btnManualAutoMode').innerHTML = activeMode;
}


function colorMode(){
    if(counter > 0){
        document.querySelector('#showNumbers').style.color = 'green';
    } else if(counter < 0){
        document.querySelector('#showNumbers').style.color = 'red';
    } else {
        document.querySelector('#showNumbers').style.color = 'black';
    }    
}

function setVisibleOptions(){
    if(activeMode === 'Manual Mode'){
        document.querySelector('.btnReset').innerText = 'Reset';
        document.querySelector('.btnReset').hidden = false;
    } else {        
        document.querySelector('.btnReset').innerText = 'Stop';
        document.querySelector('.btnReset').hidden = false;

    }
}


