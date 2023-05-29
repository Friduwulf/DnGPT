'use client';
import React, { useState } from 'react';

export default function Pirate() {

    const [inputValue1, setInputValue1] = useState(0);
    const [inputValue2, setInputValue2] = useState(0);
    const [inputValue3, setInputValue3] = useState(0);
    const [inputValue4, setInputValue4] = useState(0);
    const [inputValue5, setInputValue5] = useState(0);
    const [inputValue6, setInputValue6] = useState(0);

    const maxValue = 36;

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        const remainingValue = maxValue - getSkillSum() + inputValue1;
        console.log(`remaining value: ${remainingValue}`)
        if (value <= remainingValue) {
            setInputValue1(value);
        } else {
            setInputValue1(remainingValue)
        };
    }
    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        const remainingValue = maxValue - getSkillSum() + inputValue2;
        console.log(`remaining value: ${remainingValue}`)
        if (value <= remainingValue) {
            setInputValue2(value)
        } else {
            setInputValue2(remainingValue)
        };
    }
    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        const remainingValue = maxValue - getSkillSum() + inputValue3;
        console.log(`remaining value: ${remainingValue}`)
        if (value <= remainingValue) {
            setInputValue3(value)
        } else {
            setInputValue3(remainingValue)
        };
    }
    const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        const remainingValue = maxValue - getSkillSum() + inputValue4;
        console.log(`remaining value: ${remainingValue}`)
        if (value <= remainingValue) {
            setInputValue4(value)
        } else {
            setInputValue4(remainingValue)
        };
    }
    const handleChange5 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        const remainingValue = maxValue - getSkillSum() + inputValue5;
        console.log(`remaining value: ${remainingValue}`)
        if (value <= remainingValue) {
            setInputValue5(value)
        } else {
            setInputValue5(remainingValue)
        };
    }
    const handleChange6 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        const remainingValue = maxValue - getSkillSum() + inputValue6;
        console.log(`remaining value: ${remainingValue}`)
        if (value <= remainingValue) {
            setInputValue6(value)
        } else {
            setInputValue6(remainingValue)
        };
    }

    
    function getSkillSum()  {
        let strengthValue = Number(inputValue1)
        let speedValue = Number(inputValue2)
        let intelligenceValue = Number(inputValue3)
        let magicValue = Number(inputValue4)
        let stealthValue = Number(inputValue5)
        let dexterityValue = Number(inputValue6)

        let skillArr: number[] =
        [
            Number(strengthValue),
            Number(speedValue),
            Number(intelligenceValue),
            Number(magicValue),
            Number(stealthValue),
            Number(dexterityValue)
        ];
            let total = 0;
            for (let i = 0; i < skillArr.length; i++) {
                total += skillArr[i];
            }
            console.log(`skillsum: ${total}`);
            return total;
        }

    return (
    <div className='flex flex-col items-center justify-center pt-5 pb-5 bg-secondary'>
        <h1 className='text-2xl'>You Have {maxValue - getSkillSum()} Skill Points Remaining</h1>
        <div className='bg-secondary w-6/12 pb-5'>
            <h1 className='flex justify-center text-2xl'>Strength</h1>
            <input id='Strength' type="range" min="0" max="10" value={inputValue1} onChange={handleChange1} className="range bg-secondary range-primary" step="1" />
            <div className="w-full flex justify-between text-xs px-2 bg-secondary">
            <span>0</span>    
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            </div>
        </div>
        <div className='bg-secondary w-6/12 pb-5'>
            <h1 className='flex justify-center text-2xl'>Speed</h1>
            <input id='Speed' type="range" min="0" max="10" value={inputValue2} onChange={handleChange2} className="range bg-secondary range-primary" step="1" />
            <div className="w-full flex justify-between text-xs px-2 bg-secondary">
            <span>0</span> 
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            </div>
        </div>
        <div className='bg-secondary w-6/12 pb-5'>
            <h1 className='flex justify-center text-2xl'>Intelligence</h1>
            <input id='Intelligence' type="range" min="0" max="10" value={inputValue3} onChange={handleChange3} className="range bg-secondary range-primary" step="1" />
            <div className="w-full flex justify-between text-xs px-2 bg-secondary">
            <span>0</span> 
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            </div>
        </div>
        <div className='bg-secondary w-6/12 pb-5'>
            <h1 className='flex justify-center text-2xl'>Magic</h1>
            <input id='Magic' type="range" min="0" max="10" value={inputValue4} onChange={handleChange4} className="range bg-secondary range-primary" step="1" />
            <div className="w-full flex justify-between text-xs px-2 bg-secondary">
            <span>0</span> 
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            </div>
        </div>
        <div className='bg-secondary w-6/12 pb-5'>
            <h1 className='flex justify-center text-2xl'>Stealth</h1>
            <input id='Stealth' type="range" min="0" max="10" value={inputValue5} onChange={handleChange5} className="range bg-secondary range-primary" step="1" />
            <div className="w-full flex justify-between text-xs px-2 bg-secondary">
            <span>0</span> 
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            </div>
        </div>
        <div className='bg-secondary w-6/12 pb-5'>
            <h1 className='flex justify-center text-2xl'>Dexterity</h1>
            <input id='Dexterity' type="range" min="0" max="10" value={inputValue6} onChange={handleChange6} className="range bg-secondary range-primary" step="1" />
            <div className="w-full flex justify-between text-xs px-2 bg-secondary">
            <span>0</span> 
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            </div>
        </div>
    </div>
    );
};