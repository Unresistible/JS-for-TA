const os = require('os');

exports.greetings = function () {
  let currentHour = new Date().getHours();
  let date = new Date();
  let user = os.userInfo().username +'\n';
  switch (true) {
    case (currentHour>=5) && (currentHour<11):
      return(date + '\nGood morning, '+ user);
    case (currentHour>=11) && (currentHour<17):
      return(date + '\nGood day, '+ user);
    case (currentHour>=17) && (currentHour<23):
      return(date + '\nGood evening, '+ user);
    default:
      return(date + '\nGood night, '+ user);
  }
}
