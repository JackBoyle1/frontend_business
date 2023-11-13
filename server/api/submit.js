import AWS from "aws-sdk";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const data = `<div>
                Someone who has visited your portfolio has sent you a message!

                <ul>
                    <li>Name: ${body.name}</li>
                    <li>Email Address: ${body.email}</li>
                    <li>Company: ${body.company}</li>
                    <li>Phone Number: ${body.countryCode + body.phoneNumber}</li>
                    <li>Message: ${body.message}
                </ul>
            </div>`;

  AWS.config.update({
    region: process.env.REGION,
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_KEY_ID,
  });

  // Create sendEmail params
  var params = {
    Destination: {
      CcAddresses: [],
      ToAddresses: [process.env.TO_EMAIL_ADDRESS],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: data,
        },
        Text: {
          Charset: "UTF-8",
          Data: "TEXT_FORMAT_BODY",
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Someone has contact you on Boyx",
      },
    },
    Source: process.env.FROM_EMAIL_ADDRESS,
    ReplyToAddresses: [],
  };

  // Create the promise and SES service object
  var sendPromise = new AWS.SES({ apiVersion: "2010-12-01" })
    .sendEmail(params)
    .promise();

  // Handle promise's fulfilled/rejected states
  sendPromise
    .then(() => {
      return "Thank you for contacting!"
    })
    .catch((err) => {
      return err;
    });
});