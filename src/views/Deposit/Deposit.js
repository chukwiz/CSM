import React, {Component} from 'react';

import DepositComponent from '../../components/Deposit/Deposit/Deposit';


class Deposit extends Component {
    render(){
        return(
            <div>
            <DepositComponent {...this.props} />
            </div>
        )
    }
}

export default Deposit;