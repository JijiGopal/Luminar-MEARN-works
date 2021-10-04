var point_table=[
    {t_name:"csk",pid:10,won:8,loss:2,pts:16},
    {t_name:"mi",pid:11,won:5,loss:7,pts:10},
    {t_name:"kkr",pid:11,won:5,loss:6,pts:10},
    {t_name:"srh",pid:10,won:2,loss:8,pts:4},

]

var is_playing=point_table.some(team=>team.t_name=="mi")
console.log(is_playing);

// print details of kkr

  var team_data=point_table.find(team=>team.t_name=="kkr")
  console.log(team_data);

// print details of highest point team

  var point_max=point_table.reduce((team1,team2)=>team1.pts>team2.pts?team1:team2)
  console.log(point_max);

// sort the teams

point_table.sort((team1,team2)=>team2.loss-team1.loss)
console.log(point_table);

// 
