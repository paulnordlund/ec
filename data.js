var data = {
    records : [
        { date : 'June 10, 21:00', location : 'St. Denis', group : 'A', home: 'France', away : 'Romania', result : 'tbd' },
        { date : 'June 11, 15:00', location : 'Lens', group : 'A', home: 'Albania', away : 'Switzerland', result : 'tbd' },
        { date : 'June 15, 18:00', location : 'Paris', group : 'A', home: 'Romania', away : 'Switzerland', result : 'tbd' },
        { date : 'June 15, 21:00', location : 'Marseille', group : 'A', home: 'France', away : 'Albania', result: 'tbd' },
        { date : 'June 19, 21:00', location : 'Lyon', group : 'A', home: 'Romania', away : 'Albania', result: 'tbd' },
        { date : 'June 19, 21:00', location : 'Lille', group : 'A', home: 'Switzerland', away : 'France', result: 'tbd' },

        { date : 'June 12, 18:00', location : 'Nice', group : 'B', home: 'Poland', away : 'Northern Ireland', result: 'tbd' },
        { date : 'June 12, 21:00', location : 'Lille', group : 'B', home: 'Germany', away : 'Ukraine', result : 'tbd' },
        { date : 'June 16, 18:00', location : 'Lyon', group : 'B', home: 'Ukraine', away : 'Northern Ireland', result: 'tbd' },
        { date : 'June 16, 21:00', location : 'St. Denis', group : 'B', home: 'Germany', away : 'Poland', result: 'tbd' },
        { date : 'June 21, 18:00', location : 'Marseille', group : 'B', home: 'Ukraine', away : 'Poland', result : 'tbd' },
        { date : 'June 21, 18:00', location : 'Paris', group : 'B', home: 'Northern Ireland', away : 'Germany', result: 'tbd' },

        { date : 'June 13, 18:00', location : 'St. Denis', group : 'C', home: 'Ireland', away : 'Sweden', result : 'tbd' },
        { date : 'June 13, 21:00', location : 'Lyon', group : 'C', home: 'Belgium', away : 'Italy', result: 'tbd' },
        { date : 'June 17, 15:00', location : 'Toulouse', group : 'C', home: 'Italy', away : 'Sweden', result : 'tbd' },
        { date : 'June 18, 15:00', location : 'Bordeaux', group : 'C', home: 'Belgium', away : 'Ireland', result : 'tbd' },
        { date : 'June 22, 21:00', location : 'Lille', group : 'C', home: 'Italy', away : 'Ireland', result: 'tbd' },
        { date : 'June 22, 21:00', location : 'Nice', group : 'C', home: 'Sweden', away : 'Belgium', result : 'tbd' },

        { date : 'June 11, 18:00', location : 'Bordeaux', group : 'D', home: 'Wales', away : 'Slovakia', result: 'tbd' },
        { date : 'June 11, 21:00', location : 'Marseille', group : 'D', home: 'England', away : 'Russia', result : 'tbd' },
        { date : 'June 15, 15:00', location : 'Lille', group : 'D', home: 'Russia', away : 'Slovakia', result: 'tbd' },
        { date : 'June 16, 15:00', location : 'Lens', group : 'D', home: 'England', away : 'Wales', result : 'tbd' },
        { date : 'June 20, 21:00', location : 'Toulouse', group : 'D', home: 'Russia', away : 'Wales', result: 'tbd' },
        { date : 'June 20, 21:00', location : 'St. Etienne', group : 'D', home: 'Slovakia', away : 'England', result : 'tbd' },

        { date : 'June 12, 15:00', location : 'Paris', group : 'E', home: 'Turkey', away : 'Croatia', result: 'tbd' },
        { date : 'June 13, 15:00', location : 'Toulouse', group : 'E', home: 'Spain', away : 'Czech Republic', result : 'tbd' },
        { date : 'June 17, 18:00', location : 'St. Etienne', group : 'E', home: 'Czech Republic', away : 'Croatia', result: 'tbd' },
        { date : 'June 17, 21:00', location : 'Nice', group : 'E', home: 'Spain', away : 'Turkey', result : 'tbd' },
        { date : 'June 21, 21:00', location : 'Lens', group : 'E', home: 'Czech Republic', away : 'Turkey', result : 'tbd' },
        { date : 'June 21, 21:00', location : 'Bordeaux', group : 'E', home: 'Croatia', away : 'Spain', result: 'tbd' },

        { date : 'June 14, 18:00', location : 'Bordeaux', group : 'F', home: 'Austria', away : 'Hungary', result : 'tbd' },
        { date : 'June 14, 21:00', location : 'St. Etienne', group : 'F', home: 'Portugal', away : 'Iceland', result: 'tbd' },
        { date : 'June 18, 18:00', location : 'Marseille', group : 'F', home: 'Iceland', away : 'Hungary', result : 'tbd' },
        { date : 'June 18, 21:00', location : 'Paris', group : 'F', home: 'Portugal', away : 'Austria', result: 'tbd' },
        { date : 'June 22, 18:00', location : 'St. Denis', group : 'F', home: 'Iceland', away : 'Austria', result : 'tbd' },
        { date : 'June 22, 18:00', location : 'Lyon', group : 'F', home: 'Hungary', away : 'Portugal', result : 'tbd' },
    ]
};

$(document).ready(function() {
  $('#example').DataTable({
    data: data.records,
    columns: [{
      "title": "Date/Time",
      "data": "date"
    }, {
      "title": "Location",
      "data": "location"
    }, {
      "title": "Group",
      "data": "group"
    }, {
      "title": "Home Team",
      "data": "home"
    }, {
      "title": "Away Team",
      "data": "away"
    }, {
      "title": "Result",
      "data": "result"
    }]
  });
});