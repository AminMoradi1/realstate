import { BeatLoader } from "react-spinners";

function Loader() {
  return (
    <BeatLoader
      color="#304ffe"
      cssOverride={{ margin: "auto" }}
      margin={2}
      size={10}
      speedMultiplier={1}
    />
  );
}

export default Loader;
