import React from "react";
import {useState} from "react";

function Age () {
    const  [userName, setUserName] = useState("");
    const [age, setAge] = useState("");
    const [country, setCountry] = useState("");
    const url = `https://api.agify.io?name=${userName}&country_id=${country}`;
    function handleClick(e) {
        e.preventDefault();
        fetch(url)
        .then((response) => response.json())
        .then((data) => setAge(data.age));
    
    };

return (
    <div>
    <h1>Estimation inutile : l'age en fonction du prénom</h1>
    <form>
        <label htmlFor="prenom">Prénom : </label>
        <input
          type="text"
          placeholder="Prénom"
          value={userName}
          onChange={(event)=> setUserName(event.target.value)}
        />
        <input
          type="submit"
          value="estimer"
          onClick={handleClick}
        />
        <label for="country">Pays : </label>
        <select name="country" id="pays" value={country} onChange={(event) => setCountry(event.target.value)}>
            <option value="FR">France</option>
            <option value="PL">Pologne</option>
            <option value="ES">Espagne </option>
        </select>
      </form>
      <h2>Estimation :</h2>
      <p>{age}</p>
    </div>
);
}

export default Age