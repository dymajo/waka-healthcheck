module.exports = {
  name: 'Te Whanganui-a-Tara',
  modes: ['train', 'bus'],
  stops: {
    lat: -41.278969,
    lon: 174.780562,
  },
  trainTimetable: [
    {
      line: 'HVL',
      stop: 'WELL',
    },
    {
      line: 'HVL',
      stop: 'PETO',
    },
    {
      line: 'KPL',
      stop: 'WELL',
    },
    {
      line: 'KPL',
      stop: 'PORI',
    },
  ],
  busTimetable: [
    {
      line: '1',
      stop: '5516',
    },
    {
      line: '1',
      stop: '5016',
    },
    {
      line: '2',
      stop: '5516',
    },
    {
      line: '2',
      stop: '5012',
    },
  ],
  cablecarTimetable: [
    {
      line: 'CCL',
      stop: 'LAMB',
    },
    {
      line: 'CCL',
      stop: 'KELB',
    },
  ],
  ferryTimetable: [
    {
      line: 'WHF',
      stop: '9997',
    },
    {
      line: 'WHF',
      stop: '9999',
    },
  ],
}
