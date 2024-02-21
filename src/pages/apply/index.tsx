import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Upload,
  DatePicker
} from 'antd';

const { Option } = Select;

const grades = [
  {value: "6",label:"Class 6"},
  {value: "7",label:"Class 7"},
  {value: "8",label:"Class 8"},
  {value: "9",label:"Class 9"},
  {value: "10",label:"Class 10"},
  {value: "11",label:"Class 11"},
  {value: "12",label:"Class 12"},
]
const country = [
  {value: "Iran",label:"Iran"},
  {value: "Pakistan",label:"Pakistan"},
  {value: "Tajikistan",label:"Tajikistan"},
  {value: "Turkmenistan",label:"Turkmenistan"},
  {value: "Kyrgyzstan",label:"Kyrgyzstan"},
  {value: "Uzbekistan",label:"Uzbekistan"},
  {value: "Kazakhstan",label:"Kazakhstan"},
  {value: "Tukey",label:"Tukey"},
  {value: "Greece",label:"Greece"},
  {value: "India",label:"India"},
  {value: "Bangladesh",label:"Bangladesh"},
  {value: "Albania",label:"Albania"},
  {value: "Qatar",label:"Qatar"},
  {value: "Emarat Arabic",label:"Emarat Arabic"},
  {value: "Iraq",label:"Iraq"},
  {value: "Other",label:"Other"},
]

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const normFile = (e: any) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const Apply: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
        <Option value="353">+353</Option>
      </Select>
    </Form.Item>
  );

  const config = {
    rules: [{ type: 'object' as const, required: true, message: 'Please select time!' }],
  };

  return (
    <>
      <h2>
        Apply
      </h2>
      <h5 style={{color: "rgb(110, 193, 228)", fontSize: "20px",fontWeight: 600, margin: "40px 60px"}}>Education for Afghanistan Empowering Minds, Transforming Lives</h5>
      <Form
        {...formItemLayout}
        form={form}
        name="apply-form"
        className='apply-form'
        onFinish={onFinish}
        initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
        style={{ maxWidth: 800 }}
        scrollToFirstError
      >
        <Form.Item
          name="name"
          label="First Name and Last Name"
          rules={[
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="date-picker" label="DatePicker" {...config}>
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="language"
          label="Language"
          rules={[{ required: true, message: 'Please select language!' }]}
        >
          <Select placeholder="select your language">
            <Option value="Pashto">Pashto</Option>
            <Option value="English">English</Option>
            <Option value="Farsi/Dari">Farsi/Dari</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: 'Please select gender!' }]}
        >
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="englishlevel"
          label="English Level"
          rules={[{ required: true, message: 'Please select english level!' }]}
        >
          <Select placeholder="select your english level">
            <Option value="Basic">Basic</Option>
            <Option value="Intermediate">Intermediate</Option>
            <Option value="Advanced">Advanced</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="country"
          label="Which country do you live"
          rules={[{ required: true, message: 'Please select country!' }]}
        >
          <Select placeholder="select your country" options={country} />
        </Form.Item>
        <Form.Item
          name="grade"
          label="Select the final class"
          rules={[{ required: true, message: 'Select the final class you studied !' }]}
        >
          <Select placeholder="select your final class" options={grades} />
        </Form.Item>

        <Form.Item label="Upload Your school transcript">
          <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
            <Upload.Dragger name="files" action="/upload.do">
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
        <Form.Item
          name="averageMarks"
          label="Average of marks"
          rules={[{ required: true, message: 'Please input your average of marks!' }]}
        >
          <InputNumber />
        </Form.Item>
        
        <Form.Item name="checkbox-group" label="Check the following if it is applicable">
          <Checkbox.Group>
            <Row>
              <Col span={12}>
                <Checkbox value="A" style={{ lineHeight: '32px' }}>
                  I have access to computer
                </Checkbox>
              </Col>
              <Col span={12}>
                <Checkbox value="B" style={{ lineHeight: '32px' }}>
                I have access to smart phone
                </Checkbox>
              </Col>
              <Col span={12}>
                <Checkbox value="C" style={{ lineHeight: '32px' }}>
                I have access to internet
                </Checkbox>
              </Col>
              <Col span={12}>
                <Checkbox value="D" style={{ lineHeight: '32px' }}>
                I can study online
                </Checkbox>
              </Col>
              <Col span={12}>
                <Checkbox value="E" style={{ lineHeight: '32px' }}>
                I can complete the assignment
                </Checkbox>
              </Col>
              <Col span={12}>
                <Checkbox value="F" style={{ lineHeight: '32px' }}>
                My family is agree to study
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item
          name="parentName"
          label="Parent/Guardian Name"
          rules={[
            {
              required: true,
              message: 'Please input Parent/guardian Name!',
            },
          ]}
        >
          <Input />
        </Form.Item>


        <Form.Item
          name="email"
          label="Parent/Guardian Email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="parentphone"
          label="Parent/Guardian Phone"
          rules={[{ required: true, message: 'Please input parent/guardian phone!' }]}
        >
          <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
        </Form.Item>
        
        <Form.Item label="Additinal Message">
          <Input.TextArea placeholder='I give the applicant stated here permission to study in EFA platform and accept the regulations that apply.' rows={4} />
        </Form.Item>
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
      </Form>
    </>
  );
};

export default Apply;