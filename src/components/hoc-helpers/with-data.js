import React, {Component} from 'react';

import Spinner from '../spinner';
import ErrorIndicator from "../error-indicator";

const withData = (View) => {
    return class extends Component {

        state = {
            data: null,
            loading: true,
            error: false
        };

        componentDidMount() {
            this.update();
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            if (this.props.getData !== prevProps.getData) {
                this.update();
            }
        }

        update() {
            this.setState({
                loading: true,
                error: false
            })
            this.props.getData()
                .then((data) => {
                    this.setState({
                        data,
                        loading: false
                    });
                })
                .catch((err) => {
                    this.setState({
                        loading: false,
                        hasError: true
                    })
                })
        }

        render() {
            const {data, error, loading} = this.state;

            if (loading) {
                return <Spinner/>;
            }

            if (error) {
                return <ErrorIndicator/>
            }

            return <View {...this.props} data={data}/>;
        }
    };
};

export default withData;