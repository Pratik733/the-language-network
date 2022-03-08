import React from 'react';
import { useState } from 'react';
import PricingTable from './PricingTable';


export default function LearningPrices(props) {

    const [Opt, setOpt] = useState(1)
    const LearningPrices = () => {
        switch (Opt) {
            case 1:
                //put prices for 1:1
                return <PricingTable A1price={props.price} A1priceOG={900} A2price={700} A2priceOG={1200} B1price={1000} B1priceOG={1500} B2price={1700} B2priceOG={2000}/>;
                break;
            case 2:
                //put prices for 1:2
                return <PricingTable A1price={500} A1priceOG={900} A2price={700} A2priceOG={1200} B1price={1000} B1priceOG={1500} B2price={1700} B2priceOG={2000} />;
                break;  
            case 3:
                //put prices for 1:4
                return <PricingTable A1price={500} A1priceOG={900} A2price={700} A2priceOG={1200} B1price={1000} B1priceOG={1500} B2price={1700} B2priceOG={2000} />;
                break;
            default:
                break;
        }
    };


    return <div>
        <div className='w-full flex justify-center fadeIN'>
            <a onClick={() => setOpt(1)} id={Opt === 1 ? 'btnP' : ''} class="flex flex-row text-center buttons bg-white py-2.5 px-4 rounded-lg shadow mx-3">
                <h1 className='text-xl font-medium'>Personal Learning</h1>
                <h2 className='text-gray-800 text-sm'>(1 Teacher & 1 Student)</h2>
            </a>
            <a onClick={() => setOpt(2)} id={Opt === 2 ? 'btnP' : ''} class="flex flex-row text-center buttons bg-white  py-2.5 px-4 rounded-lg shadow mx-3">
                <h1 className='text-xl font-medium'>Duo Learning</h1>
                <h2 className='text-gray-800 text-sm'>(1 Teacher & 2 Student)</h2>
            </a>
            <a onClick={() => setOpt(3)} id={Opt === 3 ? 'btnP' : ''} class="flex flex-row text-center buttons bg-white  py-2.5 px-4 rounded-lg shadow mx-3">
                <h1 className='text-xl font-medium'>Group Learning</h1>
                <h2 className='text-gray-800 text-sm'>(1 Teacher & 4 Student)</h2>
            </a>
        </div>
        <LearningPrices />
    </div>;
}
