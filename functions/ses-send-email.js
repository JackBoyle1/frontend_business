import AWS from "aws-sdk";
exports.handler = async (event) => {
  //   const AWS = require("aws-sdk");

  let requestParams = JSON.parse(event.body);

  AWS.config.update({
    accessKeyId: "AKIASLVDMQMBOCHEV25F",
    secretAccessKey: "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",
    region: "eu-north-1",
  });

  const ses = new AWS.SES({ apiVersion: "2010-12-01" });
  const params = {
    Destination: {
      ToAddresses: ["jackboyle35@gmail.com"], // Email address/addresses that you want to send your email
    },
    Message: {
      Body: {
        Html: {
          // HTML Format of the email
          Charset: "UTF-8",
          Data: `<html>
                <div>
                Someone who has visited your portfolio has sent you a message!

                <ul>
                    <li>Name: ${requestParams.name}</li>
                    <li>Email Address: ${requestParams.email}</li>
                    <li>Company: ${requestParams.company}</li>
                    <li>Phone Number: ${
                      requestParams.countryCode + requestParams.phoneNumber
                    }</li>
                    <li>Message: ${requestParams.message}
                </ul>
            </div>
                </html>`,
        },
        Text: {
          Charset: "UTF-8",
          Data: "",
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "From Contact Form",
      },
    },
    Source: "admin@boyx.co.uk",
  };

  return ses
    .sendEmail(params)
    .promise()
    .then((data) => {
      console.log("email submitted to SES", data);
      return {
        statusCode: 200,
        body: `Message sent`,
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        statusCode: 500,
        body: `Message unsuccesfully sent, error: ${error}`,
      };
    });
};
