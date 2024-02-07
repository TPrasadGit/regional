export const isValidEMEACity = (city: string): boolean => {
    const isValidEMEACity = [
      'London'
    ];
  
    if (isValidEMEACity.includes(city.toLowerCase())) return true;
  return false;
  };
  