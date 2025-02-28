import { config } from "@/config/config";

export const fetchList = async ()=>{
  const apiUrl = import.meta.env.VITE_API_URL
  const response = await fetch(`${apiUrl}/data/list`,{cache: 'force-cache', mode: 'no-cors'});
  const data = await response.json();
  return await data;
}

export const fetchFile = async (file:string)=>{
  const response = await fetch(`${config.apiUrl}/data/${file}`,{cache: 'force-cache', mode: 'no-cors'});
  const data = await response.json();
  return await data;
}

export const fetchRenewableData = async (year?:string)=>{
  const response = await fetch(`${config.apiUrl}/calculator?year=${year}`,{cache: 'force-cache', mode: 'no-cors'});
  const data = await response.json();
  return await data;
}

export const fetchBarsChartData = async (year?:string)=>{
  const response = await fetch(`${config.apiUrl}/bars-chart?year=${year}`,{cache: 'force-cache', mode: 'no-cors'});
  const data = await response.json();
  return await data;
}

export const fetchPieChartData = async (year?:string)=>{
  const response = await fetch(`${config.apiUrl}/pie-chart?year=${year}`,{cache: 'force-cache', mode: 'no-cors'});
  const data = await response.json();
  return await data;
}

export const fetchLineChartData = async ()=>{
  const response = await fetch(`${config.apiUrl}/line-chart`,{cache: 'force-cache', mode: 'no-cors'});
  const data = await response.json();
  return await data;
}

export const fetchAreaChartData = async ()=>{
  const response = await fetch(`${config.apiUrl}/area-chart`,{cache: 'force-cache', mode: 'no-cors'});
  const data = await response.json();
  return await data;
}