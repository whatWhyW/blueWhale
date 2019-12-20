import React from 'react';
import ErrorImg from '../../../static/images/construction.png';

export default class UnderConstruction extends React.PureComponent {
    render() {
        return (
            <div className="view-content under-construction">
                <img className="page-title-icon" src={ErrorImg}/>
                <h1>建设中</h1>
                <h2>你访问的页面仍在开发中</h2>
                <p>本平台由 心如止水 提供技术支持<br/>有任何问题发送邮件到 
                    <a href="mailto:wyme23@163.com">wyme23@163.com</a>
                </p>
            </div>
        );
    }
}
