const { translate } = require('@vitalets/google-translate-api');
const fs = require('fs');
const createHttpProxyAgent = require('http-proxy-agent');
const results = [];

const TO = 'en';
const FROM = 'de';

const SOURCE_FILE = './sentences.json';
const DEST_FILE = 'translated.json';

//copy paste the ip addresses from the below link
//https://colab.research.google.com/drive/1Ud7b31vAhg-s_inMD6TXXPKIbzk9S8ls?usp=sharing
const ips = [
  'http://78.38.28.239:80',
  'http://212.107.28.122:80',
  'http://54.225.134.57:8000',
  'http://157.254.193.139:80',
  'http://103.134.17.250:4000',
  'http://95.154.221.64:80',
  'http://14.203.99.170:80',
  'http://112.120.127.146:80',
  'http://104.148.36.10:80',
  'http://161.35.223.83:80',
  'http://209.146.104.51:80',
  'http://103.167.135.110:80',
  'http://117.54.114.96:80',
  'http://146.59.199.12:80',
  'http://5.187.2.186:8089',
  'http://179.184.165.181:8080',
  'http://8.210.83.33:80',
];
let proxy = ips[Math.floor(Math.random() * ips.length)];
const sentences = require(SOURCE_FILE);
//['sentence1', 'sentence2', 'sentence3']

const translateRes = async (sentence) => {
  const agent = createHttpProxyAgent(proxy);
  const { text } = await translate(sentence, {
    to: TO,
    from: FROM,
    fetchOptions: { agent },
  });
  return text;
};

const translateStuff = async (sentence) => {
  try {
    const text = await translateRes(sentence);
    results.push(text);
  } catch (e) {
    proxy = ips[Math.floor(Math.random() * ips.length)];
    console.log('retrying...')
    await translateStuff(sentence);
  }
};

const writeToFile = () => {
  fs.writeFile(
    DEST_FILE,
    JSON.stringify(results, null, 2),
    'utf8',
    function (err) {
      if (err) throw err;
    }
  );
};

const run = async () => {
  for (let i = 0; i < sentences.length; i++) {
    await translateStuff(sentences[i]);
    if (i % 10 === 0) {
      console.log(i);
      writeToFile();
    }
  }
  writeToFile();
  console.log('done');
};

run();
//try updating the ip list if it keeps 'retrying...' without stopping
