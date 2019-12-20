import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import { getCookie, setCookie } from "../../cookies/cookies";


import WarningView from '../common/WarningView'
import Sider from '../Layout/Sider';
import Header from '../Layout/Header';
import HomePage from '../modules/HomePage';
import Calendars from '../Layout/Calendars';
import Echarts from '../modules/Echarts';
import Form from '../modules/Form';
import RichText from "../modules/RichText";
import Upload from "../modules/Upload";


const UnderConstruction = () => <WarningView.UnderConstruction />;
const Err404 = () => <WarningView.Error40X errCode={404} errMsg={'你访问的界面不见了'}/>;



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: getCookie("siderCollapsed") === "true",
        }
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        }, function () {
            setCookie("siderCollapsed", this.state.collapsed);
        });
    };

    componentDidMount() {
        // 保存Sider收缩
        if (getCookie("siderCollapsed") === null) {
            setCookie("siderCollapsed", false);
        }
    }
    
    render() {
        const { Content, Footer  } = Layout;
        const { collapsed } = this.state;
        const { location } = this.props;
        let name;
        if (!getCookie("user") || getCookie("user") === "undefined") {
            return <Redirect to="/login"/>
        } else {
            name = JSON.parse(getCookie("user")).username;
        }

        return (
            <Layout className="ant-layout-has-sider layout" style={{height: '100%'}}>
                <Sider collapsed={collapsed} path={location.pathname}/>
                <Layout>
                    {/* <Header collapsed={collapsed} toggle={this.toggle} username={name}/> */}
                    <Header username={name} />
                    <Content className="content">
                        <Switch>
                            <Route exact path={'/app'} component={HomePage} />
                            <Route exact path={'/app/form'} component={Form} />
                            <Route exact path={'/app/header/calendars'} component={Calendars} />
                            <Route exact path={'/app/chart/echarts'} component={Echarts} />
                            <Route exact path={'/app/richText'} component={RichText} />
                            <Route exact path={'/app/upload'} component={Upload} />
                            <Route component={Err404} />
                        </Switch>
                    </Content>
                    <Footer className="footer">
                        blueWhale ©2019 Created by '心如止水'
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default App;