import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import KnowledgeGraph from '../KnowledgeGraph';
import { Tabs } from 'antd';
export const Tab = (props) => (
  <Tabs defaultActiveKey="1">
    <Tabs.TabPane tab="以证书为中心的关系探索" key="1">
      <KnowledgeGraph
        data={props.graphData.center_certificate}
      ></KnowledgeGraph>
    </Tabs.TabPane>
    <Tabs.TabPane tab="以制造方为中心的关系探索" key="2">
      <KnowledgeGraph data={props.graphData.center_instrument}></KnowledgeGraph>
    </Tabs.TabPane>
    <Tabs.TabPane tab="以待测设备为中心的关系探索" key="3">
      <KnowledgeGraph data={props.graphData.center_maker}></KnowledgeGraph>
    </Tabs.TabPane>
  </Tabs>
);
const DialogBox = (props) => {
  const [open, setOpen] = useState(props.showModal);
  const [modalText, setModalText] = useState('Content of the modal');

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <>
      <Modal
        title={<Tab />}
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        width="1180px"
        heigh="613px"
      >
        {/* <KnowledgeGraph /> */}
      </Modal>
    </>
  );
};

export default DialogBox;
