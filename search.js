const rp = require('request-promise');

    exports.ajax =  async (searchInput) =>  {
      const options = {
        uri: `http://localhost:8080/v1/dictionary?q=${ searchInput }&l=espt`,
        json: true
        };
      let result = await rp(options);
      if (result == undefined) {
        throw new Error ("No definition found");
      }

      else return result;

    };
