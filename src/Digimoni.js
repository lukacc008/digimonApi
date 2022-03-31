import React, { useState, useEffect } from "react";
import axios from "axios";
export function Digimoni() {
    const [digimons, setDigimons] = useState ([]);
useEffect(() => {
    fetchDigimons();
}, []);
   const fetchDigimons = () => {
      axios
      .get('https://digimon-api.vercel.app/api/digimon')
      .then((res) => {
          console.log(res);
          setDigimons(res.data);
      })
      .catch((err) => {
          console.log(err);
      });
   };

    return (
<div>
    <h3>Digimon aplikacija</h3>
    <div className="digimon-container">
        {digimons.map((digimon) => (
            <div className="card">
                <img src={digimon.img} alt="" />
                <h3>{digimon.name}</h3>
                <p>{digimon.level}</p>
            </div>
        ))}
    </div>
</div>
    );
};
export default Digimoni;