import React, {Component} from 'react';
import BreadcrumbCustom from "../../Layout/BreadcrumbCustom";
import { Row, Col } from 'antd';
import Local from "./uploads/local";
import Qiniu from "./uploads/qiniu";


export default class Upload extends Component {
    render() {

        return (
            <div>
                <BreadcrumbCustom paths={['首页','文件上传']}/>
                <Row gutter={16}>
                    <Col md={12}>
                        <h3>本地文件上传</h3>
                        <Local/>
                    </Col>
                    <Col md={12}>
                        <h3>七牛云文件上传</h3>
                        <Qiniu/>
                    </Col>
                </Row>
            </div>
        );
    }

}