class Meeting {
  start: number;
  end: number;

  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }
}

function canAttendMeetings(intervals: Meeting[]): boolean {
  intervals.sort((a, b) => a.start - b.start);
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start < intervals[i - 1].end) {
      return false;
    }
  }
  return true;
}

const meetings: Meeting[] = [
  new Meeting(1, 3),
  new Meeting(2, 5),
  new Meeting(6, 9)
];

const canAttend = canAttendMeetings(meetings);
console.log(`Can attend meetings: ${canAttend}`);
