export const removeFromStorage = (state, item) => {
  const updated = state.data.filter((dentist) => dentist.id !== item.id);
  localStorage.setItem("favorites", JSON.stringify(updated));
  return updated;
};

export const addInStorage = (state, item) => {
  const data = [...state.data, item];
  localStorage.setItem("favorites", JSON.stringify(data));
  return data;
};
