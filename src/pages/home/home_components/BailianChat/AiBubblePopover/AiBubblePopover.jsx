import React from 'react';
import { Popover, Button, Card, Row, Col } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import './AiBubblePopover.less'
import {helpList} from '../../AiMainScreen/helpList'


const HelpContent = ({setInputValue}) => (
  <div className="help-popover-content">
    <div className="help-popover-title">操作手册</div>
    <Row gutter={[16, 16]}>
      {helpList.map((item, idx) => (
        <Col span={12} key={idx}>
          <Card
            hoverable
            size="small"
            className="help-popover-card"
            styles={{body:{ padding: '0.75rem 1rem' }}} 
            onClick = {() => setInputValue(item.desc)}
          >
            <div className="help-popover-card-title">{item.title}</div>
            <div className="help-popover-card-desc">{item.desc}</div>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

export default function HelpPopoverBtn({ setInputValue }) {
  return (
    <Popover
      placement="topLeft"
      content={<HelpContent setInputValue={ setInputValue } />}
      trigger="click"
      classNames={{ root: "help-popover-overlay" }}
    >
      <Button
        className="help-popover-btn"
        type="default"
        icon={<QuestionCircleOutlined />}
      >
        操作手册
      </Button>
    </Popover>
  );
}
