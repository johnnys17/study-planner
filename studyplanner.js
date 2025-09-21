// study lesson planner - practicing javascript functions, variables, and conditionals

/* this program plans a study session by storing
its topic and duration, calculating time 
with functions, assigning priority with conditionals, and
displaying a plan */

const study = {
    topic: 'JavaScript',
    duration: 2.5
};

let missingStudy = undefined;

// function to assign study priority based on duration
function assignPriority(hours) {
    switch (true) {
        case hours <= 1:
            return 'Low';
            break;
        case hours <= 3:
            return 'Medium';
            break;
        default:
            return "High";
    }
};


// validate study duration with a function expression
const isValidDuration = function(value){
    if (typeof value !== "number" || value <= 0) {
        return false;
    } else {
        return true;
    }
};


// calculate total study time with an arrow function
const calculateTotalTime = (hours, breakTime = 0.5) => {
    let total = hours + breakTime;
    total *= 1.2;
    return total;
};


// round total time for display
const roundedTotalTime = Math.round(calculateTotalTime(study.duration));


/* display the study plan
with formatted output
using a function */

const showPlan = () => {
    console.log(`Study topic: ${study.topic.toUpperCase()}`);
    console.log(`Duration: ${study.duration}`);
    console.log("Priority: " + assignPriority(study.duration));
    console.log(`Valid duration: ${isValidDuration(study.duration) ? "Yes" : "No"}`);
    console.log(`Total Time(hours): ${roundedTotalTime}`);
};


showPlan();

// check for missing study data
console.log("Missing Study: " + missingStudy);



