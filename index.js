const formatDate = (timeInSeconds) => {
  let time = '';
  if (typeof timeInSeconds === 'undefined') {   // Wynik 0 dla undefined
    return '0s'
  }                   
  else {
    const hours = Math.floor(timeInSeconds/3600);
    if (hours > 0) {
      timeInSeconds = timeInSeconds - hours*3600;
      time = `${hours}h`
    };
    const minutes = Math.floor((timeInSeconds)/60);
    if (minutes > 0) {
      timeInSeconds = timeInSeconds - minutes*60;
       if (time!=='') { 
         time = time + ' '
        }; 
       time = time + `${minutes}m`
    };
    if (timeInSeconds > 0) { 
      if (time!=='') { 
        time = time + ' '
      };
      time = time + `${timeInSeconds}s`
    };
    return time;
  } 
}

module.exports = formatDate;

