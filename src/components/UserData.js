
export const  loadData = email => {
  try {
    const serializedData = localStorage.getItem(email.split('@')[0]);
    if (serializedData === null) {
      return undefined;
    }
    return JSON.parse(serializedData);
  } catch (err) {
    return undefined;
  }
};

export const saveData = email => {
  try {
    const serializedData = JSON.stringify(email.split('@')[0]);
    localStorage.setItem(email, serializedData);
  } catch (err) {
    return undefined;
  }
};
