import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCredits } from "./fetchApi";
import Style from "./css/Cast.module.css";

const Cast = () => {
  const { id } = useParams();
  const [credits, setCredits] = useState();

  useEffect(() => {
    const fetch = async () => {
      await fetchCredits(id)
        .then((res) => {
          setCredits(res.data.cast);
          console.log(res.data.cast);
        })
        .catch((er) => console.log(er));
    };
    fetch();
  }, []);

  return (
    <div className={Style.act_container}>
      {credits &&
        credits.map((actors) => {
          return (
            <div key={actors.id}>
              <img
                src={`https://image.tmdb.org/t/p/w185/${actors.profile_path}`}
                alt="Actor_profile"></img>
              <li>Actorname</li>
              <p>Character: {actors.name}</p>
            </div>
          );
        })}
    </div>
  );
};
export default Cast;
