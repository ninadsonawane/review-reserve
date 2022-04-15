import * as api from "../api";
import { FETCH_ALL , CREATE , UPDATE , LIKE , DELETE } from "../constants";

export const getrvs = () => async (dispatch) => {
  try {
    const { data } = await api.fetchrvs();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const createrv = (review) => async (dispatch) => {
  try {
    const { data } = await api.createrv(review);
    dispatch({ type:CREATE , payload: data});

  } catch (e) {

    console.log(e);
  }
};

export const updaterv = (id, updreview) => async(dispatch) => {
  try {
      const { data } = await api.updaterv(id, updreview);
      dispatch({ type:UPDATE , payload: data});
  }catch (e) {
    console.log(e);
  }

};

export const deleterv = (id) => async(dispatch) => {
  try {
    await api.deleterv(id);
    dispatch({ type:DELETE , payload: id});

  } catch (e) {
    console.log(e);

  }
}

export const likerv = (id) => async(dispatch) => {
  try {
    const { data } = await api.likerv(id);
      dispatch({ type:LIKE , payload: data});
  } catch (e) {
    console.log(e);
  }
}