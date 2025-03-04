// code your solution here
// Function declaration for saturdayFun
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Function expression for mondayWork
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  // Higher-order function wrapAdjective
  const wrapAdjective = function(wrapper = "*") {
    return function(adjective = "special") {
      return `You are ${wrapper}${adjective}${wrapper}!`;
    };
  };
  
 