var QRCode = require('qrcode');

QRCode.toString(
    'this is a demo',
    {
        type: 'terminal'
    },
    function (err, url) {
        console.log(url);
    }
);