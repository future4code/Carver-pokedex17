export function goToHome(navigate) {
  navigate("/");
}

export function gotToPokedex(navigate) {
  navigate("/pokedex");
}

export function goToDetails(navigate, id) {
  navigate(`/details/${id}`);
}


