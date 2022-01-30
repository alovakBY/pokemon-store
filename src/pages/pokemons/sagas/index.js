import { call, put, takeEvery } from "redux-saga/effects";
import pokemonService from "../../../services/pokemonService";
import * as actions from "../actions";

function* pokemonPageWorker(action) {
  try {
    const response = yield call(pokemonService.getPokemons);
    yield put(actions.GET_POKEMONS_SUCCESS(response));
  } catch (error) {
    yield put(actions.GET_POKEMONS_FAIL(error));
  }
}

export function* pokemonPageWatcher() {
  yield takeEvery(actions.GET_POKEMONS_REQUEST, pokemonPageWorker);
}
