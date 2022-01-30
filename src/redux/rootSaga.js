import "regenerator-runtime/runtime";
import { all } from "redux-saga/effects";
// import { pokemonPageWatcher } from "../pages/pokemons/sagas";

import { watchRequest } from "../api/watchRequest";

export function* rootSaga() {
  yield all([watchRequest()]);
}
