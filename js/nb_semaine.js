var ladate = new Date();
var oneJan = new Date(ladate.getFullYear(),0,4);
var numberOfDays = Math.floor((ladate - oneJan) / (24 * 60 * 60 * 1000))
var result = Math.ceil((numberOfDays + 1) / 7);
document.write(result);