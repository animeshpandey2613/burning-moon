import React, {useEffect, useState} from "react";
import Front from "./Front";
import Back from "./Back";
import BounceLoader from "react-spinners/BounceLoader";
function Collect() {
  const [loading, setLoding] = useState(false);
  useEffect(() => {
    setLoding(true);
    setTimeout(() => {
      setLoding(false);
    }, 7000);
  }, []);
  return ( loading ? (
    <div className="Loader">
      <h2>Getting things ready...</h2>
      <BounceLoader
        color={"rgba(205, 90, 0, 1)"}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  ) : (
    <div>
    <Back />
      <Front />
    </div>
  ));
}

export default Collect;
