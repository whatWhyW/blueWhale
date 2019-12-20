import React from 'react';
import errorImg from '../../../static/images/40X.png';

export default class Error40X extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 5
        };
    }

    componentDidMount() {
        if (this.props.useTimer) {
            setInterval(() => {
                this.setState(
                    {timer: this.state.timer - 1},
                    () => {
                        if (!this.state.timer) {
                            window.open('/', '_self');
                        }
                    }
                );
            }, 1000);
        }
    }

    render() {
        const restSecond = this.state.timer;

        return <div className="view-content error-404">
            <img className="page-title-icon" src={errorImg}/>
            <h1>{this.props.errCode || '404'}</h1>
            <h2>{this.props.errMsg || '你访问的页面找不到了'}</h2>
            <p>
                <a href="/">{this.props.useTimer ? `${restSecond}秒后自动` : ''}返回首页</a>
            </p>
            <p>本平台由 心如止水 提供技术支持<br/>有任何问题发送邮件到 
                <a href="mailto:wyme23@163.com">wyme23@163.com</a>
            </p>
        </div>;
    }
}
