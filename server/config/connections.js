require("dotenv").config();

module.exports = {
    
    plugins:[
    
    {
        resolve: `somekindofname`,
        options: {
          cloudName: process.env.CLOUD_NAME,
          apiKey: process.env.API_KEY,
          apiSecret: process.env.API_SECRET,
          resourceType: `image`,
          prefix: `somekindofname/`
        }
      }
    ]
  };