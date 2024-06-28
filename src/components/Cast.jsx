import { useEffect, useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchCredits } from "./fetchApi";

const Cast = () => {
  const { id } = useParams();
  const [credits, setCredits] = useState();

  useEffect(() => {
    const fetch = async () => {
      await fetchCredits(id)
        .then((res) => {
          setCredits(res.data.cast);
        })
        .catch((er) => console.log(er));
    };
    fetch();
  }, []);

  const [searchParams] = useSearchParams();
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams],
  );
  const { name, maxPrice, inStock } = params;

  return (
    <ul>
      {credits &&
        credits.map((actors) => {
          return (
            <div key={actors.id} className=".actor_card">
              <img
                src={`https://image.tmdb.org/t/p/w185/${actors.profile_path}`}
                alt="Actor_profile"></img>
              <li>
                Actorname
                <p>Character: {actors.name}</p>
              </li>
            </div>
          );
        })}
    </ul>
  );
};
export default Cast;
