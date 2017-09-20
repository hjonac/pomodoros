import React, { Component } from 'react';
import Libros from './libros';
import { Layout } from 'antd';

const { Content } = Layout;

class Pomodoros extends Component {

    render() {
        return (
            <div className="app">
                <Layout className="layout">
                    <Content>
                        <Libros />
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default Pomodoros;