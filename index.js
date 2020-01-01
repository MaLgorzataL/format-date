const formatDate = (timeInSeconds) => {
  if (timeInSeconds == null) {timeInSeconds = 0}; // Wynik 0 dla undefined
  if (timeInSeconds <60) { return `${timeInSeconds}s`}
  if ((timeInSeconds>59) && (timeInSeconds<3599)) // Ilosc sekund wieksza od minuty i mniejsza od godziny
    { const minutes = Math.floor(timeInSeconds/60);
      if ((timeInSeconds - minutes*60)===0)
      { return `${minutes}m`}
      else 
      { return `${minutes}m`+` ${timeInSeconds-minutes*60}s`}
    };
  if (timeInSeconds>=3600) // ilosc sekund wieksza od godziny
    { const hours = Math.floor(timeInSeconds/3600);
      const minutes = Math.floor((timeInSeconds-hours*3600)/60);
      const seconds = timeInSeconds-hours*3600-minutes*60;
      if ((minutes > 0) && (seconds > 0))
        {return `${hours}h`+` ${minutes}m`+` ${timeInSeconds-hours*3600-minutes*60}s`}
      else {
        if ((minutes === 0) && (seconds > 0))
        { return `${hours}h`+` ${seconds}s`}
        else {
          if ((minutes >0) && (seconds === 0))
           { return `${hours}h`+` ${minutes}m`}
           else
            { return `${hours}h`}
          }
        }
    }
  };

module.exports = formatDate;

