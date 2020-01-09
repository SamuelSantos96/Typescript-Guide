// Arrow Function, inference will know the return type of the function but it's a good pratice to always indicate the return type
var add = function (a, b) {
    return a + b;
};
// Arrow Function
var subtract = function (a, b) {
    return a - b;
};
// Named Function
function divide(a, b) {
    return a / b;
}
// Anonymous Function
var multiply = function (a, b) {
    return a * b;
};
// Use void when not returning anything
var logger = function (message) {
    console.log(message);
};
// Use never when the function will not reach its end
var throwError = function (message) {
    throw new Error(message);
};
var todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};
var logWeather = function (_a) {
    var date = _a.date, weather = _a.weather;
    console.log(date);
    console.log(weather);
};
logWeather(todaysWeather);
