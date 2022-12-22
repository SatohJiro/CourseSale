import React, { Component } from "react";
import faker from "faker";

import {
  Chart as ChartJs,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GET_ALL_ORDER } from "../../redux/types/orderTypes";

ChartJs.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const Chart = () => {
  const orders = useSelector((state) => state.order.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_ALL_ORDER,
    });
  }, []);

  console.log(orders);
  const labels = [];
  const dataOfPie =[];
  orders.map((item) => {
    labels.push(item.id);
    dataOfPie.push(item.total);
  });
  

  const dataPie = {
   labels,
    datasets: [
      {
        data: dataOfPie,
        backgroundColor: ["aqua", "redorange", "purple"],
      },
    ],
  };

  const dataBar = {
    labels,
    datasets: [
      {
        label: "ID hóa đơn",
        data: labels.map((item, index) => orders[index].total),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  const optionsBar = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Doanh thu trong ngày " + orders[0].purchaseDate,
      },
    },
  };
  return (
    <>
      <div className="w-[800px] h-[400px] mx-auto">
        <Bar data={dataBar} options={optionsBar}></Bar>
      </div>
      <div className="mt-20 w-[400px] h-[400px] mx-auto">
        <Pie data={dataPie}></Pie>
      </div>
    </>
  );
};

export default Chart;
