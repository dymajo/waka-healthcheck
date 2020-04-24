module.exports = {
  name: 'Tamaki Makaurau',
  modes: ['train', 'bus', 'ferry'],
  stops: {
    lat: -36.84429,
    lon: 174.76848,
  },
  trainTimetable: [
    {
      line: 'EAST',
      stop: '133', // britomart
    },
    {
      line: 'EAST',
      stop: '101', // otahuhu
    },
    {
      line: 'WEST',
      stop: '133', // britomart
    },
    {
      line: 'WEST',
      stop: '115', // newmarket
    },
  ],
  busTimetable: [
    {
      line: 'NX1',
      stop: '4065',
    },
    {
      line: 'INN',
      stop: '7107',
    },
    {
      line: '70',
      stop: '1420',
    },
    {
      line: '70',
      stop: '7210',
    },
  ],
  ferryTimetable: [
    {
      line: 'DEV',
      stop: '9600',
    },
    {
      line: 'DEV',
      stop: '9670',
    },
    {
      line: 'HMB',
      stop: '9600',
    },
    {
      line: 'HMB',
      stop: '9700',
    },
  ],
}
