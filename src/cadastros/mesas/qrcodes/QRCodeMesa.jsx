import React, { Component } from 'react'

import QRCode from 'qrcode.react';

class QRCodeMesa extends Component {

    render() {
        return (
            <div style={{ margin: 50 }}>
                <QRCode value="NMajCK3oEvhj2XhyCzbf2bxj73H3|1" />
            </div>
        );
    }
}

export default QRCodeMesa;
