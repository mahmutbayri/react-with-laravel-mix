import React, {Component} from "react";
import PropTypes from 'prop-types';

class Row extends Component {
    constructor(props) {
        super(props);

        this.state = {
            changed: {
                a: false,
                b: false,
                c: false,
            },
            prevProps: props.item,
        };

        this.timeout = 1 * 1000;

        this.interval = null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.hasExistWaiting()) {
            this.clearActivated();
        }
    }

    hasExistWaiting() {
        let stateChanged = this.state.changed;
        for (let i in stateChanged) {
            if (!stateChanged.hasOwnProperty(i)) {
                continue;
            }

            if (!stateChanged[i]) {
                continue;
            }

            if (this.timeout + stateChanged[i] > new Date()) {
                return true;
            }
        }
        return false;
    }

    clearActivated() {
        if (this.interval) {
            return;
        }

        let stateChanged = this.state.changed;

        this.interval = setInterval(function () {
            let clearIntervalStatus = true;
            for (let i in stateChanged) {
                if (!stateChanged.hasOwnProperty(i)) {
                    continue;
                }

                if (!stateChanged[i]) {
                    clearIntervalStatus = true;
                    continue;
                }

                if ((new Date() - stateChanged[i]) > this.timeout) {
                    stateChanged[i] = false;
                }
            }

            this.setState((state, props) => {
                return {
                    changed: stateChanged,
                }
            }, function () {
                if (!this.hasExistWaiting()) {
                    clearInterval(this.interval);
                    this.interval = null;
                }
            }.bind(this))

        }.bind(this), this.timeout)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        let now = (new Date()).getTime();
        let changed = {};

        Object.keys(nextProps.item).forEach(function (field) {
            changed[field] = nextProps.item[field] !== prevState.prevProps[field] ? now : null
        });

        return {
            changed: changed,
            prevProps: nextProps.item
        };
    }

    render() {
        let {key, a, b, c} = this.props.item;
        let changedClassName = this.props.changedClassName;
        return (
            <tr>
                <td>{key}</td>
                <td className={this.state.changed.a ? changedClassName : ''}>{a}</td>
                <td className={this.state.changed.b ? changedClassName : ''}>{b}</td>
                <td className={this.state.changed.c ? changedClassName : ''}>{c}</td>
            </tr>
        )
    }
}

Row.propTypes = {
    item: PropTypes.shape({
        a: PropTypes.number.isRequired,
        b: PropTypes.number.isRequired,
        c: PropTypes.number.isRequired,
    }).isRequired,
    changedClassName: PropTypes.string.isRequired
};

export default Row;
