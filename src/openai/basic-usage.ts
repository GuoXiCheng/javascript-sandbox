import axios from "axios";
import fs from 'fs';
import path from 'path';

export async function basicUsage(url: string, headers: object, apiKey: string) {

    const payload = {
        "temperature": 0.7,
        "messages": [{
            "role": "user",
            "content": "你好"
        }]
    };

    const res = await axios.post(url, payload, {
        headers: {
            ...headers,
            "Authorization": `Bearer ${apiKey}`
        }
    });

    fs.writeFileSync(
        path.join(__dirname, 'basic-usage-output.json'),
        JSON.stringify(res.data, null, 2)
    );
}