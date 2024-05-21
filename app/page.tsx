"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
interface TempData {
  Date: string;
  Hour: number;
  HighestTemperature: number;
  AverageTemperature: number;
 }

export default function Home() {

  const [tempData, setTempData] = useState<TempData[]>([]);

  useEffect(() => {
    const fetchTempData = async () => {
      const response = await fetch('http://localhost:4000/currentTempCanineOne');
      const newData: TempData[] = await response.json();
      setTempData(newData);
    };

    fetchTempData();
 }, []);

  return (
    <main>
      <div>
        <p>Hello World</p>
        {/* <p>Average {data.map(item => item.AverageTemperature)}°c</p> */}
        <p>Average Temperature: {tempData.map(item => item.AverageTemperature)}°c</p>
        <p>Date: {tempData.map(item => item.Date)}</p>
        <p>HighestTemperature: {tempData.map(item => item.HighestTemperature)}°c</p>

      </div>
    </main>
  );
}
