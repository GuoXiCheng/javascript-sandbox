import axios from "axios";
import fs from 'fs';
import path from 'path';

export async function chatUsage(url: string, headers: object, apiKey: string) {
    const payload = {
        "temperature": 0.7,
        "messages": [{
            "role": "system",
            "content": "给你一个英语句子，你的任务是把它翻译成中文。"
        }, {
            "role": "user",
            "content": "The quick brown fox jumps over the lazy dog."
        }, {
            "content": "敏捷的棕色狐狸跳过了懒狗。",
            "role": "assistant"
        }, {
            "role": "user",
            "content": "我的意思是翻译后的内容是繁体中文"
        }]
    };

    const res = await axios.post(url, payload, {
        headers: {
            ...headers,
            "Authorization": `Bearer ${apiKey}`
        }
    });

    fs.writeFileSync(
        path.join(__dirname, 'chat-usage-output.json'),
        JSON.stringify(res.data, null, 2)
    );
}