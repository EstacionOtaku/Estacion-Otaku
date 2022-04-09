import { Top10 } from "../../data/PeliImageData";

const CategoriaPeli = () => {
  const numeroRamdomImage = {};
  return (
    <>
      <section
        className=" py-4 mx-auto"
        style={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "1600px",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        {Top10.map((element, index) => {
          return (
            <div key={index} style={{ textAlign: "center" }}>
              <img
                className="card__multi-image"
                src={element}
                alt="movie"
                style={{
                  width: "130%",
                  height: "200px",
                  objectFit: "contain",
                  marginBottom: "10px",
                }}
              />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default CategoriaPeli;
