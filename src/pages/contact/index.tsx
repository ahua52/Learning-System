import { Button, Form, Input } from 'antd';

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const onFinish = (values: any) => {
  console.log(values);
};

function Contact() {
  return (
    <>
      <div className='home-content width-90'>
        <h1>Contact Us</h1>
        <p><span style={{color: "#26262c"}}>Wish to enquire about admissions, syllabus, or anything else? You can contact us, give us a call or simply submit the form here.</span></p>
        <h6>Address</h6>
        <p><span style={{color: "#26262c"}}>1601 East-West Road, Honolulu, HI, United States, 96848</span></p>
        <h6>Phone</h6>
        <p><span style={{color: "#26262c"}}>++1 808-807-8363</span></p>
        <h6>Email</h6>
        <p><span style={{color: "#26262c"}}>info@efaelearning.com</span></p>
        <h6>Send Us a Message</h6>

        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
          validateMessages={validateMessages}
        >
          <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'email']} label="Email" rules={[{ required: true, type: 'email' }]}>
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'subject']} label="Subject" rules={[{ required: true}]}>
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default Contact;
