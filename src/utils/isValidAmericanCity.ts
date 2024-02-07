export const isValidAmericanCity = (city: string): boolean => {
    const validAmericanCities = [
      'Newyork',
      'Canada',
      'California'
    ];
  
    if (validAmericanCities.includes(city.toLowerCase())) return true;
  return false;
  };
  