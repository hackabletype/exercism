export default class Year {
  constructor(year) {
    this.year = year;
  }

  isLeap() {
    let returnValue = false;
    if (this.year % 4 === 0) {
      returnValue = true;
      if (this.year % 100 === 0) {
        returnValue = false;
        if (this.year % 400 === 0) {
          returnValue = true;
        }
      }
    }
    return returnValue;
  }
}
