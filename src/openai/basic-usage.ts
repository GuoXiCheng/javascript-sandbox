import axios from "axios";
import { openai_url, openai_headers, openai_api_key } from '../../env.json';
import fs from 'fs';
import path from 'path';

export async function basicUsage() {

    const payload = {
        "temperature": 0,
        "messages": [{
            "role": "assistant",
            "content": "你好"
        }]
    };

    const res = await axios.post(openai_url, payload, {
        headers: {
            ...openai_headers,
            "Authorization": `Bearer ${openai_api_key}`
        }
    });

    fs.writeFileSync(
        path.join(__dirname, 'basic-usage-output.json'),
        JSON.stringify(res.data, null, 2)
    );
}