import React, { useState } from 'react';

function App() {
  const [primeInput, setPrimeInput] = useState('');
  const [primeResult, setPrimeResult] = useState('');
  const [factorialInput, setFactorialInput] = useState('');
  const [factorialResult, setFactorialResult] = useState('');

  //Function to check if number is prime
  const checkPrime = () => {
    //Converts the input from string to integer and stores result in variable 'num'.
    const num = parseInt(primeInput, 10);

    //Checks if inputted number is not a valid number & if its less than or equal to 1 as numbers less than 2 are not prime.
    if (isNaN(num) || num <= 1) {
      setPrimeResult('Invalid input!');
      return;
    }

    //Checks if the inputted number is 2, which is the only even prime number. This is handled directly as it is a special case.
    if (num === 2) {
      setPrimeResult("Prime number!");
      return;
    }

    //Checks if the number is even as all prime numbers are odd, aside from 2.
    if (num % 2 === 0) {
      setPrimeResult("Not a prime number.");
      return;
    }

    //Iterates through the odd numbers starting from 3 up to the square root of the number.
    //Checks if the number has any other divisors other than 1 and itself.
    //Number is then checked if 'i' is its divisor. If true, then number is not a prime.
    for (let i = 3; i <= Math.sqrt(num); i +=2) {
      if (num % i === 0) {
        setPrimeResult("Not a prime number.");
        return;
      }
    }

    //Return result
    setPrimeResult("Prime number!");
  }

  //Function to give number's factorial
  const calcFactorial = () => {
    //Converts the input from string to integer and stores result in variable 'num'.
    const num = parseInt(factorialInput, 10);

    //Checks if inputted number is not a valid number and if the number is non-negative
    if (isNaN(num) || num < 0) {
      setFactorialResult('Invalid input!');
      return;
    }

    //Initializes variable 'factorial' which will hold the computed factorial value
    //Iterates and multiplies the 'factoiral' with the value of 'i' which will add up the product of all integers from 1 up to 'num'. 
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }

    //Return result
    setFactorialResult(`The factorial of ${num} is ${factorial}.`);
  }

  return (
    <div className="w-screen h-screen flex font-raleway bg-gradient-to-br from-slate-50 via-amber-50 to-slate-400 animate-small-fade-in-down">
      <div className='flex w-[100rem] h-[40rem] mx-36 mt-36 border-4 border-[#c0d6df] bg-[#4f6d7a] rounded-2xl shadow-lg'>
        {/* 1st Col - Prime Check */}
        <div className='w-[50%] p-12 border-r-4 border-[#c0d6df] rounded-l-2xl group hover:bg-[#4B6976] transition-colors delay-250 duration-[3000] ease-in animate-small-fade-in-down '>
          <div className='flex flex-col text-[#4F6D7A]'>
            <div className='w-[12rem] text-lg p-1 pl-5 font-medium bg-[#c0d6df] rounded-full uppercase drop-shadow-md group-hover:drop-shadow-xl'>
              <span>Prime Checker</span>
            </div>
            <div className='text-[30px] mt-12 text-white'>
                <p>Find out if a given number is a prime or not.</p>
            </div>
          </div>
          <div className='flex flex-col py-6 mt-14'>
            <input 
              type="number" 
              value={primeInput} 
              onChange={(e) =>setPrimeInput(e.target.value)}
              className='w-[15rem] text-[21px] p-2 pl-4 bg-gray-100 border border-gray-300 text-black focus:outline-[#E8DAB2] rounded-lg'></input>
            <button 
              onClick={checkPrime}
              className='w-[6rem] h-[2.5rem] text-[18px] text-[#4F6D7A] bg-[#E8DAB2] font-medium mt-4 uppercase rounded-lg shadow-lg hover:bg-[#DCCDA1] group-hover:drop-shadow-xl transition-colors delay-250 duration-[3000] ease-in'>
              Submit</button>
          </div>
          {/* Result */}
          <div className={`w-[17rem] mt-20 rounded-lg shadow-md group-hover:shadow-lg ${primeResult === 'Prime number!' ? 'text-[#E8DAB2] bg-[#e8dab236]' : 'text-[#c0d6df] bg-[#c0d6df36]'}`}>
            <div className='flex h-[60px] border-l-[6px] items-center border-white'>
              <span className='ml-4 text-[23px]  underline underline-offset-4 font-semibold'>
                {primeResult}</span>
            </div>
          </div>
        </div>

        {/* 2nd Col - Factorial */}
        <div className='w-[50%] p-12 rounded-r-2xl group hover:bg-[#4B6976] transition-colors delay-250 duration-[3000] ease-in animate-small-fade-in-down'>
          <div className='flex flex-col text-[#4F6D7A]'>
            <div className='w-[16.5rem] text-lg p-1 pr-5 font-medium text-right bg-[#c0d6df] ml-auto rounded-full uppercase drop-shadow-md group-hover:drop-shadow-xl'>
              <span>Factorial Calculator</span>
            </div>
            <div className='text-[30px] mt-12 text-right text-white'>
                <p>Find out the factorial of a given number.</p>
            </div>
          </div>
          <div className='flex flex-col py-6 mt-14'>
            <input 
              type="number" 
              value={factorialInput}
              onChange={(e) => setFactorialInput(e.target.value)}
              className='w-[15rem] text-[21px] p-2 pl-4 ml-auto bg-gray-100 border border-gray-300 text-black focus:outline-[#E8DAB2] rounded-lg'></input>
            <button 
              onClick={calcFactorial}
              className='w-[6rem] h-[2.5rem] text-[18px] text-[#4F6D7A] bg-[#E8DAB2] font-medium mt-4 ml-auto uppercase rounded-lg shadow-lg hover:bg-[#DCCDA1] group-hover:drop-shadow-xl transition-colors delay-250 duration-[3000] ease-in'>
              Submit</button>
          </div>
          {/* Result */}
          <div className='flex justify-end mt-20'>
            <div className={`inline-flex rounded-lg shadow-md group-hover:shadow-lg ${factorialResult !== 'Invalid input!' ? 'text-[#E8DAB2] bg-[#e8dab236]' : 'text-[#c0d6df] bg-[#c0d6df36]'}`}>
              <div className='flex h-[60px] border-r-[6px] items-center border-white'>
                <span className='ml-auto text-[23px] px-4 underline underline-offset-4 font-semibold'>
                  {factorialResult}</span>
              </div>
            </div>
          </div>
          </div>
        </div>
    </div>
  );
}

export default App;
