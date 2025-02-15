export const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
    const seconds = Math.floor(timeInSeconds - minutes * 60).toString().padStart(2, '0');

    return `${minutes}:${seconds}`;
}

export const timeInSeconds = (timeString) => {
  const splitArray = timeString.split(':');
  const minutes = Number(splitArray[0]);
  const seconds = Number(splitArray[1]);

  return seconds + minutes * 60;
}