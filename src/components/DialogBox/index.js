import { Button, Modal } from "antd";
import React, { useState } from "react";
import KnowledgeGraph from "../KnowledgeGraph";
import { Tabs } from "antd";
export const Tab = () => (
  <Tabs defaultActiveKey="1">
    <Tabs.TabPane tab="以证书为中心的关系探索" key="1">
      {/*TODO: Convey props to the KnowledgeGraph Component.*/}
      <KnowledgeGraph></KnowledgeGraph>
    </Tabs.TabPane>
    <Tabs.TabPane tab="以制造方为中心的关系探索" key="2">
      Content of Tab Pane 2
    </Tabs.TabPane>
    <Tabs.TabPane tab="以待测设备为中心的关系探索" key="3">
      <KnowledgeGraph></KnowledgeGraph>
    </Tabs.TabPane>
  </Tabs>
);
const DialogBox = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button>
      <Modal
        title={<Tab />}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
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
