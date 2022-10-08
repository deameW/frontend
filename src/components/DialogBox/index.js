import { Button, Modal } from "antd";
import React, { useState } from "react";
import KnowledgeGraph from "../KnowledgeGraph";

const DialogBox = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
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
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width="1180px"
        heigh="613px"
      >
        {/* <KnowledgeGraph /> */}
        <KnowledgeGraph></KnowledgeGraph>
      </Modal>
    </>
  );
};

export default DialogBox;
