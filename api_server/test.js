// // Install the twilio module
// var twilio = require('twilio');

// // Your Account SID and Auth Token from twilio.com/console
// var accountSid = 'AC8a0675c4f21fc669177705c0f833f765';
// var authToken = 'efd1dc485f5eb6a79179de633e157218';

// // Initialize the client
// var client = new twilio(accountSid, authToken);

// // Send a message
// client.messages
//   .create({
//      body: 'Hello from Node.js',
//      from: '+113853967808',
//      to: '+008619128655546'
//    })
//   .then(message => console.log(message));

const SMSClient = require('@alicloud/sms-sdk');

// 创建 SMSClient 实例
const client = new SMSClient({
  accessKeyId: 'LTAI5tPVQf61Ea6RzX5QLfeF',
  secretAccessKey: 'wd3gqYa92LfJSFfZMJg6vUFmyTQERb'
});

const test2={
  PhoneNumbers: '18476922294',
  SignName: '阿里云短信测试',
  TemplateCode: 'SMS_154950909',
  TemplateParam: '{"code":"8887"}'
}
// 发送短信
client.sendSMS(test2).then(function (res) {
  let {Code}=res
  if (Code === 'OK') {
    // 处理返回参数
    console.log(res)
    console.log(JSON.parse(test2.TemplateParam).code)
  }
}, function (err) {
  console.log(err)
});





