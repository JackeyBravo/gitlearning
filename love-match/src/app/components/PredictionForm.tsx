'use client'
import { useState } from 'react';
import { Form, Input, Select, Button } from 'antd';

const { Option } = Select;

const zodiacSigns = [
    '白羊座', '金牛座', '双子座', '巨蟹座',
    '狮子座', '处女座', '天秤座', '天蠍座',
    '射手座', '摩羯座', '水瓶座', '双鱼座'
];

export default function PredictionForm() {
    const [result, setResult] = useState<string | null>(null);

    const onFinish = (values: any) => {
        console.log('表单数据:', values);
        // 简单的匹配算法
        const score = Math.floor(Math.random() * 100) + 1;
        setResult(`你的契合度分数是: ${score}`);
    };

    return (
        <div>
            <Form
                name="prediction"
                onFinish={onFinish}
                layout="vertical"
                className="max-w-md mx-auto"
            >
                <Form.Item
                    label="你的名字"
                    name="name1"
                    rules={[{ required: true, message: '请输入你的名字' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="你的星座"
                    name="zodiac1"
                    rules={[{ required: true, message: '请选择你的星座' }]}
                >
                    <Select placeholder="选择星座">
                        {zodiacSigns.map(sign => (
                            <Option key={sign} value={sign}>{sign}</Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="对方名字"
                    name="name2"
                    rules={[{ required: true, message: '请输入对方名字' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="对方星座"
                    name="zodiac2"
                    rules={[{ required: true, message: '请选择对方星座' }]}
                >
                    <Select placeholder="选择星座">
                        {zodiacSigns.map(sign => (
                            <Option key={sign} value={sign}>{sign}</Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item className="text-center">
                    <Button type="primary" htmlType="submit" size="large">
                        开始预测
                    </Button>
                </Form.Item>
            </Form>

            {result && (
                <div className="mt-8 text-center text-xl font-semibold">
                    {result}
                </div>
            )}
        </div>
    );
}