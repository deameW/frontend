import { Steps } from "antd";
import React from "react";
const { Step } = Steps;

const StepsVertical = (props) => {
  return (
    <>
      <Steps direction="vertical" size="small" current={props.current}>
        <Step title="文件上传" />
        <Step title="文件识别" />
        <Step title="实体抽取" />
        <Step title="数据落库" />
      </Steps>
    </>
  );
};

export default StepsVertical;
