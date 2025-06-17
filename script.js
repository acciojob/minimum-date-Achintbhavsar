function minDate(dates) {
  if (!Array.isArray(dates) || dates.length === 0) {
    return null; 
  }

  
  return [...dates].reduce((min, current) => {
    return current < min ? current : min;
  });
}


console.log(minDate(["2023/03/01", "2023/03/02", "2023/03/03"])); 
console.log(minDate(["2023/01/01", "2023/02/02", "2022/12/31"])); 
