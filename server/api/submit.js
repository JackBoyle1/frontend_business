import AWS from 'aws-sdk';
export default defineEventHandler((event) => {
AWS.config.update({region: 'eu-north-1', accessKeyId: process.env.ACCESS_KEY_ID, secretAccessKey: process.env.SECRET_KEY_ID});

// Create sendEmail params 
var params = {
  Destination: {
    CcAddresses: [],
    ToAddresses: ['jackboyle35@gmail.com']
  },
  Message: {
    Body: {
      Html: {
       Charset: "UTF-8",
       Data: "HTML_FORMAT_BODY"
      },
      Text: {
       Charset: "UTF-8",
       Data: "TEXT_FORMAT_BODY"
      }
     },
     Subject: {
      Charset: 'UTF-8',
      Data: 'Test email'
     }
    },
  Source: 'admin@boyx.co.uk',
  ReplyToAddresses: [],
};

// Create the promise and SES service object
var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

// Handle promise's fulfilled/rejected states
sendPromise.then(
  function(data) {
    console.log(data.MessageId);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  })
});