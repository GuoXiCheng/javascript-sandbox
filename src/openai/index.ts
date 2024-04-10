// run with: ts-node src/openai/index.ts

import { basicUsage } from "./basic-usage";
import { chatUsage } from "./chat-usage";
import { openai_url, openai_headers, openai_api_key } from '../../env.json';

(async () => {
    await basicUsage(openai_url, openai_headers, openai_api_key);
    // await chatUsage(openai_url, openai_headers, openai_api_key);
})();