import React from "react";

export default function Statut(props){
      return(
            <div className="bg-white w-[33%] rounded-[10px] p-[1em] mb-[1.5em]">
                  <h1 className="font-bold mt-[.5]">{props.speciality}</h1>
                  <span className="font-bold mr-[.5em]">Promo 5</span>
                  <span className="font-bold">2023-2024</span>
                  <div className="flex justify-between">
                        <div className="flex justify-between">
                              <p className="pr-[5.5em]">ville: {props.city}</p>
                              <p>promo en cours</p>
                        </div>
                        <div className="bg-red-500 w-[25px] rounded-[100%]"></div>
                  </div>
            </div>
      );
}