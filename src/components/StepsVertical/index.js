import { Steps } from "antd";
import React from "react";
const { Step } = Steps;

const StepsVertical = (props) => {
  return (
    <>
      <Steps direction="vertical" size="small" current={props.current}>
        <Step title="文件上传" description="This is a description." />
        <Step title="文件识别" description="This is a description." />
        <Step title="实体抽取" description="This is a description." />
        <Step title="数据落库" description="This is a description." />
      </Steps>
    </>
  );
};

export default StepsVertical;
