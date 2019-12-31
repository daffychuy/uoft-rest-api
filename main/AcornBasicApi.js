const request = require('request');

const ACORN_URI = "acorn.utoronto.ca";
const PROTOCOL = "https://";

const urlTable = {
    "authURL1": PROTOCOL + ACORN_URI + "/sws",
    "authURL2": PROTOCOL + "weblogin.utoronto.ca/",
}

const formHeader = {
    'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:71.0) Gecko/20100101 Firefox/71.0',
    'content-type': 'application/x-www-form-urlencoded',
    'Accept': 'text/html'
};

