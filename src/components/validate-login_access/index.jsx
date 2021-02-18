import React, { useState } from 'react'
import { Form } from 'antd'
import { useHistory } from 'react-router-dom'
import { FormContainer, StyledButton, StyledInput } from '../../style/styled-components'


const ValidateLogin = (props) => {
    // const [accessGranted, setAccessGranted] = useState()
    // const [accessKey, setAccessKey] = useState("queroserfullstack")
    const label = ""
    const history = useHistory()



    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <FormContainer
            // {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={props.onFinish}
            onFinishFailed={onFinishFailed}
        >
            <p>Chave de acesso</p>
            <Form.Item
                label={label}
                name="password"
                rules={[
                    {
                        required: true,
                        message: "Verifique a chave que enviamos para o seu email",
                    },
                ]}
            >
                <StyledInput placeholder="A chave de acesso que enviamos!" />
            </Form.Item>

            <Form.Item >
                <StyledButton htmlType="submit">
                    Avançar
                </StyledButton>
                {props.accessGranted === true ? <h1>Acesso permitido!</h1> : props.accessGranted === false ? <div>
                    <h3>
                        Acesso negado!
                    </h3>
                </div> : null}
            </Form.Item>
        </FormContainer>
    );
};


export default ValidateLogin