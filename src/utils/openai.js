import OPENAI from "openai";
import { OPEN_Ai_APIKEY } from "../utils/constants";

const openai = new OPENAI({
    apiKey: OPEN_Ai_APIKEY,
    dangerouslyAllowBrowser: true,
})
export default openai;