var ladate = new Date()
var oneJan = new Date(ladate.getFullYear(),0,1);
var numberOfDays = Math.floor((ladate - oneJan) / (24 * 60 * 60 * 1000));
var result = Math.ceil((ladate.getDay() + 1 + numberOfDays) / 7);
document.write(Math.ceil((ladate.getDay() + 1 + numberOfDays) / 7) - 1)
