var axios = require('axios');
var fs = require('fs');
var csv = require('csvtojson');
// import * as cwd from 'cwdurl';
var http = require('http');

const getProxy = async (req, res) => {
    const getCsv = await axios.get("https://www.vpngate.net/api/iphone/");
    // console.log(getCsv.data);
    const path = "./temp/vpn.csv";
    fs.writeFile(path, getCsv.data, async function(err) {
        if(err){
            return console.log(err);
        }
        console.log("===========The file was saved!=========");
        
        var vpn = await csv().fromFile(path);
        // res.status(200).json({
        //     success: true,
        //     data: vpn,
        // });

        res.send(getCsv.data);
        // fs.unlinkSync(path);
    });
}
module.exports = {getProxy}

// ip2proxy.open("./IP2PROXY-IP-PROXYTYPE-COUNTRY-REGION-CITY-ISP-DOMAIN-USAGETYPE-ASN-LASTSEEN-THREAT-RESID
