import { useState, useEffect } from "react";

const buttons = ["1", "2", "3", "4"];

const Chats = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [catData, setCatData] = useState([]);
  const url = `https://catfact.ninja/breeds?page=${pageNumber}`;
  const handleClick = (page) => {
    if (typeof(page) === "number") {
    setPageNumber(page);
    } else if (page === "back") {
      if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      } else {
        setPageNumber(buttons.length);
      };
    } else {
      if (pageNumber < 4 ) {
      setPageNumber(pageNumber + 1);
      } else {
      setPageNumber(1);
      }
    };
  }
  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => setCatData(data.data));
  }, [url]);
  return (
    <div>
      <h1>Liste des races de chats</h1>
      <button onClick={() => handleClick("back")}>Précédente</button>
      {
        buttons.map(item => 
          <button onClick={() => handleClick(parseInt(item))}>{item}</button>)
      }
      <button onClick={() => handleClick("next")}>Suivante</button>

      {catData.map(item =>
      <><h4>Race: {item.breed}, Pays: {item.country}</h4></>
      )}   
    </div>
  );
}

export default Chats;