import React, { useState } from "react";

import { Button, Checkbox, Form, Input } from "antd";
import { useAvailableInstancesQuery } from "../query/useInstanceQuery";
import Loading from "../components/Loading";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const SetupEcInstance = (props) => {
  const { accountId } = props;
  const [formLayout, setFormLayout] = useState("vertical");

  const { data, isLoading } = useAvailableInstancesQuery({
    payload: {
      id: accountId,
    },
    enabled: !!accountId,
  });

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 24,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      layout={formLayout}
      initialValues={{
        layout: formLayout,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className="form-border">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {data?.map((d) => {
              console.log(d);
              return (
                <Form.Item
                  name="1"
                  valuePropName="checked"
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Checkbox>i_101 ( instance name)</Checkbox>
                </Form.Item>
              );
            })}
          </>
        )}
      </div>

				<Form.Item
					name='4'
					valuePropName='checked'
					wrapperCol={{
						offset: 8,
						span: 16,
					}}
				>
					<Checkbox>i_104 ( instance name)</Checkbox>
				</Form.Item>
			</div>

			<Form.Item
				wrapperCol={{
					offset: 8,
					span: 16,
				}}
			>
				<Button
					type='primary'
					htmlType='submit'
					className='setup-instance-btn'
				>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default SetupEcInstance;
