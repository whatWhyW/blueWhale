import React, { Component } from 'react';
import { setCookie } from '../../cookies/cookies';
import { Form, Icon, Input, Button, Checkbox, message, Spin } from 'antd';


// const users = [{
//     username: 'admin',
//     password: 'admin'
// },{
//     username: 'manager',
//     password: 'manager'
// }];

function MatchUser(user) {
    // const {username, password} = user;
    // return users.find(user => user.username === username && user.password === password);
    console.log(user);
    return user.username === user.password;
}
class NormalLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                if(MatchUser(values)){
                    this.setState({
                        isLoding: true,
                    });
                    setCookie('user', JSON.stringify(values));
                    message.success('login successed!'); //成功信息
                    let that = this;
                    setTimeout(function() { //延迟进入
                        that.props.history.push({pathname: '/app', state: values});
                    }, 200);

                }else{
                    message.error('login failed!'); //失败信息
                }
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            this.state.isLoding ? <Spin size="large" className="loading" />:
            <div className="form">
                <div className="login-form">
                    <div className="login-logo">
                        <div className="login-name">蓝鲸</div>
                    </div>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                    className="login-input"
                                    prefix={<Icon type="user"/>}
                                    placeholder="username"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input
                                    className="login-input"
                                    prefix={<Icon type="lock"/>}
                                    type="password"
                                    placeholder="password"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>Remember me</Checkbox>)}
                            <a className="login-form-forgot login-forget" href="">
                                Forgot password?
                            </a>
                            <Button type="primary" htmlType="submit" className="login-form-button login-button">
                                Log in
                            </Button>
                            <span>Or <a href="" className="register">register now!</a></span>
                            <div className="login-test">测试环境账号和密码相同</div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

const Login = Form.create()(NormalLogin);
export default Login;