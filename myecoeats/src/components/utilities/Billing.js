import { Row, Col, Input, Button, Upload, Form, message, Select } from "antd";

const Billing = () => {
  const { Option } = Select;
  return (
    <div className="w-2/5 bg-slate-100 p-8 m-4 rounded-lg">
      <h1 className="vanBold text-lg mb-4">Billing Details</h1>
      <Form>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <div>
              <Form.Item
                label={<span className="vanBold text-lg">First Name</span>}
                labelCol={{ span: 24 }}
                name="firstName"
                rules={[
                  { required: true, message: "Please enter your first name" },
                  {
                    max: 10,
                    message: "First Name must not exceed 10 characters",
                  },
                ]}
              >
                <Input className="w-full rounded border border-gray-300 p-1" />
              </Form.Item>
            </div>
          </Col>
          <Col span={12}>
            <div>
              <Form.Item
                label={<span className="vanBold text-lg">Last Name</span>}
                labelCol={{ span: 24 }}
                name="lastName"
                rules={[
                  { required: true, message: "Please enter your last name" },
                  {
                    max: 10,
                    message: "Last name must not exceed 10 characters",
                  },
                ]}
              >
                <Input className="w-full rounded border border-gray-300 p-1" />
              </Form.Item>
            </div>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <div>
              <Form.Item
                label={<span className="vanBold text-lg">Country</span>}
                labelCol={{ span: 24 }}
                name="country"
                rules={[
                  { required: true, message: "Please select your country" },
                ]}
              >
                <Select
                  showSearch
                  placeholder="Select your country"
                  optionFilterProp="children"
                  className="w-full rounded borde"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="Malaysia">Malaysia</Option>
                  <Option value="Singapore">Singapore</Option>
                  <Option value="UAE">UAE</Option>
                  <Option value="Saudi Arabia">Saudi Arabia</Option>
                </Select>
              </Form.Item>
            </div>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <div>
              <Form.Item
                label={<span className="vanBold text-lg">Street Address</span>}
                labelCol={{ span: 24 }}
                name="streetAddress"
                rules={[
                  {
                    required: true,
                    message: "Please enter your street address",
                  },
                ]}
              >
                <Input className="w-full rounded border border-gray-300 p-1" />
              </Form.Item>
            </div>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <div>
              <Form.Item
                label={<span className="vanBold text-lg">Town/City</span>}
                labelCol={{ span: 24 }}
                name="townCity"
                rules={[
                  { required: true, message: "Please enter your town/city" },
                ]}
              >
                <Input className="w-full rounded border border-gray-300 p-1" />
              </Form.Item>
            </div>
          </Col>
          <Col span={12}>
            <div>
              <Form.Item
                label={<span className="vanBold text-lg">Postcode</span>}
                labelCol={{ span: 24 }}
                name="postcode"
                rules={[
                  { required: true, message: "Please enter your postcode" },
                ]}
              >
                <Input className="w-full rounded border border-gray-300 p-1" />
              </Form.Item>
            </div>
          </Col>
        </Row>
        
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <div>
              <Form.Item
                label={<span className="vanBold text-lg">Phone Number</span>}
                labelCol={{ span: 24 }}
                name="phoneNumber"
                rules={[
                  { required: true, message: "Please enter your phone number" },
                ]}
              >
                <Input className="w-full rounded border border-gray-300 p-1" />
              </Form.Item>
            </div>
          </Col>
          <Col span={12}>
            <div>
              <Form.Item
                label={<span className="vanBold text-lg">Email Address</span>}
                labelCol={{ span: 24 }}
                name="emailAddress"
                rules={[
                  {
                    required: true,
                    message: "Please enter your email address",
                  },
                  {
                    type: "email",
                    message: "Please enter a valid email address",
                  },
                ]}
              >
                <Input className="w-full rounded border border-gray-300 p-1" />
              </Form.Item>
            </div>
          </Col>
        </Row>
       
      </Form>
    </div>
  );
};

export default Billing;