'use client'

import {useEffect, useState} from "react";

export const Status = () => {

    const [data, setData] = useState(null);

    function formatNumberToShortForm(num: number) {
        // Verifica se o número está na faixa dos milhares
        if (num >= 1000) {
            return `${(num / 1000).toFixed(0)}k`; // Arredonda para o inteiro mais próximo e adiciona 'k'
        } else {
            return num.toString(); // Retorna o número como está se for menor que 1000
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://api.dexscreener.com/latest/dex/tokens/0x04f388E30BfD03f357AE061ec5680c7e4ac4cF09');
            const jsonData = await response.json();
            setData(jsonData);
        };
        fetchData();
    }, []);

    if (!data) return <div className='flex justify-between w-full'>
        <div className='left'>
            <div>PRICE</div>
            <div>
                <span className='score'>$0.0000</span>
            </div>
        </div>
        <div className='right'>
            <div>WORLD</div>
            <div>
                <span className='time'>0000</span>
            </div>
        </div>
    </div>;

    return (
        <div className='flex justify-between w-full p-10 text-xl'>
            <div className='left'>
                <div>PRICE</div>
                <div>
                    <span className='score'>${data?.pairs[0].priceUsd}</span>
                </div>
            </div>
            <div className='flex flex-row gap-12'>
                <div>
                    <div>HOLDERS</div>
                    <div>
                        <span className='time'>761</span>
                    </div>
                </div>
                <div>
                    <div>MKT CAP</div>
                    <div>
                        <span className='time'>${formatNumberToShortForm(data?.pairs[0].liquidity.usd)}</span>
                    </div>
                </div>
            </div>
        </div>
    );

}