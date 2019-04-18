import React from 'react';
import axios from 'axios';
import {
  Form, Input, Button,
} from 'antd';

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 10 },
};

const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 5, offset: 4},
};

class CustomForm extends React.Component {

    handleFormSubmit = (event, requestType, foodID) => {
        //event.preventDefault();

        const data = {
            name: event.target.elements.name.value,
            carbs: event.target.elements.carbs.value,
            fiber: event.target.elements.fiber.value,
            protein: event.target.elements.protein.value,
            fat: event.target.elements.fat.value,
            source_type: event.target.elements.source_type.value
        };

        switch ( requestType ) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/foodtable-api/foods/', data)
                .then(res => console.log(res))
                .catch(error => console.log(error));
            case 'put':
                return axios.put(`http://127.0.0.1:8000/foodtable-api/foods/${foodID}/`, data)
                .then(res => console.log(res))
                .catch(error => console.log(error));

        }
        //console.log("debug messages", data)
    }

    render() {
        return (
          <div>
            <Form onSubmit={(event) => this.handleFormSubmit(event, this.props.requestType, this.props.foodID)}>
              <Form.Item {...formItemLayout} label="Name">
                <Input name="name" placeholder="Food Name" /> <br/>
              </Form.Item>
              <Form.Item {...formItemLayout} label="Carb">
                <Input name="carbs" placeholder="Carbonhydrate in gram" />
              </Form.Item>
              <Form.Item {...formItemLayout} label="Protein">
                <Input name="protein" placeholder="Protein in gram" />
              </Form.Item>
              <Form.Item {...formItemLayout} label="Fiber">
                <Input name="fiber" placeholder="Fiber in gram" />
              </Form.Item>
              <Form.Item {...formItemLayout} label="Fat">
                <Input name="fat" placeholder="Fat in gram" />
              </Form.Item>
               <Form.Item {...formItemLayout} label="Source Type">
                <Input name="source_type" placeholder="SourceType of this food" />
              </Form.Item>
              <Form.Item {...formTailLayout} >
                <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
              </Form.Item>
            </Form>
          </div>
        );
    }
};

export default CustomForm;