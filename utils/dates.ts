export const mois = {
  1: 'janvier',
  2: 'fevrier',
  3: 'mars',
  4: 'avril',
  5: 'mai',
  6: 'juin',
  7: 'juillet',
  8: 'aout',
  9: 'septembre',
  10: 'octobre',
  11: 'novembre',
  12: 'decembre',
};

export const SortObjByDate = (obj: any, mode = 'desc') => {
  const sortDate = (obj1, obj2) => {
    const date1 = new Date(obj1.date);
    const date2 = new Date(obj2.date);

    if (date1 < date2) {
      return mode === 'asc' ? -1 : 1;
    } else if (date1 > date2) {
      return mode === 'asc' ? 1 : -1;
    } else {
      return 0;
    }
  };
  return obj.sort(sortDate);
};
