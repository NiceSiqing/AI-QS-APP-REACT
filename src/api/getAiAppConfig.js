import axios from 'axios';

export function getAiAppConfig(module) {
  
  return axios.get(
    `/bailian/knowledge/getKnowledgeConfig?systemPlatform=${module}`
    // ,

    // {},
    // {
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    // }
  ).then(res => res.data);
}
