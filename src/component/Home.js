import CoinGecko from "coingecko-api";
import React from 'react';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export function Home() {
  const [coins, setCoins] = useState(null)

  useEffect(() => {
    
    const CoinGeckoClient = new CoinGecko();
    async function pingAPI() {
      return await CoinGeckoClient.ping();
    }

    async function fetchCoinList() {
      const response = await CoinGeckoClient.coins.all()
      setCoins(response.data);
      return response
    }
    
    pingAPI()
    fetchCoinList()

  }, [])
  
    
    return (
      <div>
        { coins && (
          <ul>
            {coins.map(coin => {
              return (
                <li key={coin.id} className="mt-2 py-3 border px-5 border-gray-200 rounded-sm">
                  <img src={coin.image.small} alt={coin.id} className="w-10 h-10"/>
                  <Link to={`/${coin.id}/`} className=" ml-3 hover:text-blue-600">
                    {coin.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    );
  }