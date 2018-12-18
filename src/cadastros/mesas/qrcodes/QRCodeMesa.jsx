import React, { Component } from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { modificaNumMesa } from './QRCodeMesaActions';

import QRCode from 'qrcode.react';

class QRCodeMesa extends Component {

    _modificaNumMesa(e) {
        this.props.modificaNumMesa(e.target.value);
    }

    render() {
        return (
            <div style={{ margin: 15 }}>
                <div>
                    <input id='numMesa' className='form-control'
                        placeholder='Adicione uma Mesa'
                        onChange={(e) => this._modificaNumMesa(e)}
                        value={this.props.numMesa}>
                    </input>
                </div>
                <div style={{ marginTop: 15 }}>
                    <QRCode value={`${this.props.localId}|${this.props.numMesa}`}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    localId: state.app.localId,
    numMesa: state.qrCodeMesa.numMesa
});

const mapDispatchToProps = dispatch => bindActionCreators({ modificaNumMesa }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(QRCodeMesa);
