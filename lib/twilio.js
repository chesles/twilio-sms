var querystring = require("querystring"),
    request = require("request");

var TwilioClient = module.exports = function(account, token) {
    this.account = account;
    this.token = token;
};

TwilioClient.base = 'api.twilio.com';
TwilioClient.version = '2010-04-01';

TwilioClient.prototype.getUrl = function(path) {
    return (['https://', this.account, ':', this.token, '@', TwilioClient.base,
            '/', TwilioClient.version, '/Accounts/', this.account, path]).join('');
};

TwilioClient.prototype.sendSMS = function(from, to, message, callback) {
    var data = {From: from, To: to, Body: message};
    var options = {
        method: 'POST',
        uri: this.getUrl('/SMS/Messages'),
        form: data
    };
    console.log(options);
    request(options, callback);
};
