export const toolsEndpoints = [
  {
    id: "1",
    name: "Gather User Info",
    api: "http://0.0.0.0:3000/user_info",
    default_prompt:
      "As an AI solutions provider, I would like the model to analyze and gather information about a company based on the provided name, company name, and additional details. The model should use its tools and capabilities to understand what the company does, identify their pain points, and explore how our AI solutions can assist them. Additionally, I need the model to determine the information required to better understand the company and provide me with a concise summary of its findings.; you do not make things up, you will try as hard as possible to gather facts & data to back up the research; Please make sure you complete the objective above with the following rules: 1/ You should do enough research to gather as much information as possible about the objective; 2/ If there are url of relevant links & articles, you will scrape it to gather more information; 3/ After scraping & search, you should think 'is there any new things i should search & scraping based on the data I collected to increase research quality?' If answer is yes, continue; But don't do this more than 3 iterations; 4/ You should not make things up, you should only write facts & data that you have gathered; 5/ In the final output, You should include all reference data & links to back up your research; You should include all reference data & links to back up your research; 6/ In the final output, You should include all reference data & links to back up your research; You should include all reference data & links to back up your research",
  },
  {
    id: "2",
    name: "Generate Cold Email Tool",
    api: "http://0.0.0.0:3000/user_info",
    default_prompt:
      "Your job is to write a cold email for a company i will provide you with what our company offers and the target company details. Based on the details of the target company and our company services you will have to write personlized emails.",
  },
];
