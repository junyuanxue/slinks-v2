function fakeSlinksData() {
  var slinksData = {
    messages: {
      matches: [
        {
          text: "<https://slack.com/>",
          previous: {
            text: "<http://expressjs.com/>"
          },
          previous_2: {
            text: "<https://mochajs.org/>"
          },
          next: {
            text: "This is not a link!"
          },
          next_2: {
            text: "<https://www.mongodb.org/>"
          }
        }
      ]
    }
  };
  
  return slinksData;
}
