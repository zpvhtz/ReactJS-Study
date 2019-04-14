import React from 'react'

class Counter extends React.Component {
    state = { value: this.props.initialVal || 0, add: true, globalVal: 0, autoIncreaseOn: false };

    valueColor = {
        color: 'black'
    }

    colorValidate = (value) => {
        if(value < 0)
            this.valueColor.color = 'red';
        if(value > 0)
            this.valueColor.color = 'blue';
    }

    getValueColor = (value) => {
        // let color = '';

        // if(value < 0)
        //     color = 'red';
        // else if(value > 0)
        //     color = 'blue';
        // else color = 'black';

        // return color;
        
        if(value < 0) return 'red';
        if(value > 0) return 'blue';
        return 'black';
    }

    handleIncreaseValue = () => {
        this.setState({ value: ++this.state.value });
    }

    handleDecreaseValue = () => {
        this.setState({ value: --this.state.value });
    }

    handleChangeValue = (add) => {
        if(add) this.setState({ value: ++this.state.value });
        else this.setState({ value: --this.state.value });
    }

    handleResetValue = () => {
        this.setState({ value: 0 });
    }

    handleUpdateValue = () => {
        this.setState({ globalVal: this.state.globalVal + this.state.value });
        this.setState({ value: 0 });
    }

    handleToggleAutoIncrease = () => {
        //this.setState(nextState, callback)
        this.setState({ autoIncreaseOn: !this.state.autoIncreaseOn }, () => {
            if(this.state.autoIncreaseOn) {
                this.interval = setInterval(() => {
                    this.handleIncreaseValue();
                }, 100);
            }
            else {
                clearInterval(this.interval);
            }
        })    
    }
    
    componentDidMount = () => {
        this.handleToggleAutoIncrease();
    }

    componentWillUnmount = () => {
        clearInterval(this.interval);
    }

    render() {
        const { value, add, globalVal, autoIncreaseOn } = this.state;
        const Counter = () => {

            const currentVal = (
                // <div>Current value: <span style={valueColor}><b>{value}</b></span></div>
                <div>
                    Current value: <span style={{
                        color: this.getValueColor(this.state.value)
                    }}><b>{this.state.value}</b></span></div>
            );

            const btnList = (
                <div>
                    <button type="button" onClick={() => this.handleChangeValue(this.state.add)}>Increase</button>
                    <button type="button" onClick={() => this.handleChangeValue(!this.state.add)}>Decrease</button>
                    <button type="button" onClick={this.handleResetValue}>Reset</button>
                    <button type="button" onClick={this.handleToggleAutoIncrease}>{autoIncreaseOn ? 'Stop' : 'Start'} Auto increase</button>
                </div>
            );

            const globalVal = (
                <div>
                    <div>Global value: <span style={{
                        color: this.getValueColor(this.state.globalVal)
                    }}><b>{this.state.globalVal}</b></span></div>
                    <button type="button" onClick={this.handleUpdateValue}>Update({this.state.globalVal + this.state.value})</button>
                </div>
            )

            const element = (
                <div>
                    Name <b>{this.props.name}</b>
                    {currentVal}
                    {btnList}
                    {globalVal}
                </div>
            );

            return element;
        }

        return Counter();
    }
}

export default Counter