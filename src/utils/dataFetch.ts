import { config } from "@/config/config";

export const fetchList = async ()=>{
  const apiUrl = import.meta.env.VITE_API_URL
  const response = await fetch(`${apiUrl}/data/list`,{cache: 'force-cache', mode: 'cors', headers: {
    "Content-Type": "application/json"
  }});
  const data = await response.json();
  return await data;
}

export const fetchFile = async (file:string)=>{
  const response = await fetch(`${config.apiUrl}/data/${file}`,{cache: 'force-cache', mode: 'cors', headers: {
    "Content-Type": "application/json"
  }});
  const data = await response.json();
  return await data;
}

export const fetchRenewableData = async (year?:string)=>{
  const response = await fetch(`${config.apiUrl}/calculator?year=${year}`,{cache: 'force-cache', mode: 'cors', headers: {
    "Content-Type":"application/json"
  }});
  const data = await response.json();
  return await data;
}

export const fetchBarsChartData = async (year?:string)=>{
  const response = await fetch(`${config.apiUrl}/bars-chart?year=${year}`,{cache: 'force-cache', mode: 'cors', headers: {
    "Content-Type":"application/json"
  }});
  const data = await response.json();
  return await data;
}

export const fetchPieChartData = async (year?:string)=>{
  const response = await fetch(`${config.apiUrl}/pie-chart?year=${year}`,{cache: 'force-cache', mode: 'cors', headers: {
    "Content-Type":"application/json"
  }});
  const data = await response.json();
  return await data;
}

export const fetchLineChartData = async ()=>{
  const response = await fetch(`${config.apiUrl}/line-chart`,{cache: 'force-cache', mode: 'cors', headers: {
    "Content-Type":"application/json"
  }});
  const data = await response.json();
  return await data;
}

export const fetchAreaChartData = async ()=>{
  const response = await fetch(`${config.apiUrl}/area-chart`,{cache: 'force-cache', mode: 'cors', headers: {
    "Content-Type":"application/json"
  }});
  const data = await response.json();
  return await data;
}

export const fetchDownloadFile = async (name: string) => {
  try {
    const response = await fetch(`${config.apiUrl}/files/download/${name}`);

    if (!response.ok) {
      throw new Error(`Failed to download file: ${response.statusText}`);
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    // Create a temporary <a> element to trigger download
    const a = document.createElement("a");
    a.href = url;
    a.download = name; // Set the filename
    document.body.appendChild(a);
    a.click();

    // Clean up
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error downloading file:", error);
  }
};