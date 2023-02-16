import { Navbarr } from "../Components/navbar";
import { Footer } from "../Components/footer";
import React,{Component, useState} from 'react';
import { useEffect } from 'react';
import {apiRequest} from './apiRequest'
import { InvestmentInfo } from './InvestmentInfo';

export const Investment = () => {
    const API_Investment = "http://localhost:8021/InvestmentClient"+"1" ;
    console.log(API_Investment)
    const [items,setItems] = useState([]);
    useEffect(() => {
        const fetchInvestment = async () => {
          try {
            const response = await fetch(API_Investment);
            const tempList = await response.json();
            setItems(tempList);
          } catch (err) {
            console.log(err);
          }
        };
        (async () => await fetchInvestment())();
      }, []);
    
      const handleDelete = async (item) => {
        const listItems = items.filter((it) => it.id !== item.id);
        setItems(listItems);
        const deleteOptions = { method: "DELETE"};
        const reqUrl = `${API_Investment}/${item.id}`;
        const result = await apiRequest(reqUrl, deleteOptions);
        
      };
  return (
    <div className='App'>
      <Navbarr/>
      <InvestmentInfo items={items} handleDelete={handleDelete}/>
      <Footer/>
    </div>
  );
}