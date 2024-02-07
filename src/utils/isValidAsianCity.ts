export const isValidAsianCity = (city: string): boolean => {
    const validAsianCities = [
      'lucknow',
      'patiala',
      'kanpur',
      'varanasi',
      'bangalore',
      'delhi'
    ];
  
    if (validAsianCities.includes(city.toLowerCase())) return true;
  return false;
  };
  