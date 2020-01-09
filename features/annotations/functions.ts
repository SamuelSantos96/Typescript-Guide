// Arrow Function, inference will know the return type of the function but it's a good pratice to always indicate the return type
const add = (a: number, b: number) => {
    return a + b;
};

// Arrow Function
const subtract = (a: number, b: number): number => {
    return a - b;
};

// Named Function
function divide(a: number, b: number): number {
    return a / b;
}

// Anonymous Function
const multiply = function(a: number, b: number): number {
    return a * b;
};

// Use void when not returning anything
const logger = (message: string): void => {
    console.log(message);
};

// Use never when the function will not reach its end
const throwError = (message: string): never => {
    throw new Error(message);
};

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = ({
    date,
    weather
}: {
    date: Date;
    weather: string;
}): void => {
    console.log(date);
    console.log(weather);
};

logWeather(todaysWeather);
