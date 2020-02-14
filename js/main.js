//Global variables
//const fullDate = new Date(); bad practice to use global vars?

//Call functions
displayTime();
displayDate();

//Declare function that grabs time & displays it in proper notation
function displayTime(){
    const fullDate = new Date();
    let hours = fullDate.getHours();
    let minutes = fullDate.getMinutes();
    
    //Step 2: Display Date as hours and minutes
    const time = document.getElementById('current-time');
    time.innerHTML = `${hours}:${minutes}`;

    //Step 3: display hours using 12h clock
    if(hours > 12 ) {
        hours = hours - 12 ;
        time.innerHTML = `${hours}:${minutes}`;
    }
    //Step 4: Display minutes less than 10 as 2 digits
    if(minutes < 10) {
        time.innerHTML = `${hours}:0${minutes}`;
    }

    //Update every second
    setTimeout(displayTime, 1000);
}

//Dec. function that grabs date & displays it properly
function displayDate(){
    const fullDate = new Date();
    //weekday returned as #, 0 for Sunday etc
    const weekdayAsNumber = fullDate.getDay();
    //mnth returned as #, 0 for January etc
    const monthAsNumber = fullDate.getMonth();
    const date = fullDate.getDate();

    const weekdayArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    //Step 1: convert weekday Number to actual day of the week
    const weekdayName = weekdayArray[weekdayAsNumber];

    //Step 2: convert month number to actual day
    const monthName = monthArray[monthAsNumber];

    //Step 3: Grab element & display date
    const dateUI = document.getElementById('current-date');
    dateUI.innerHTML = `${weekdayName} ${monthName} ${date}`;
    console.log(dateUI);
    
    //Update every minute
    setTimeout(displayDate, 60000);

}
