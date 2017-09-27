import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from 'antd';
import Libros from './libros';
import Tareas from './tareas';

const { Content } = Layout;

class Pomodoros extends Component {

    render() {
        return (
            <div className="app">
                <Layout className="layout">
                    <Content>
                        <Route exact path="/" component={Libros} />
                        <Route path="/tareas" component={Tareas} />
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default Pomodoros;