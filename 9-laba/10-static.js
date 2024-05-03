export default class Time {
  // BEGIN
  static fromString(str_time)
  {
    return new Time(parseInt(str_time.slice(0, str_time.indexOf(':')+1), 10), parseInt(str_time.slice(str_time.indexOf(':')+1), 10));
  }
  // END

  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}
