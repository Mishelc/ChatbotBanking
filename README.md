# ChatbotBanking
In this code pattern, we will create a chatbot using Node.js and Watson Assistant Plus.
Watson Assistant Plus provides web-based chat and customer service integration, recommendations of intention, detection of conflict of intent and analytics analytics dashboard with 30 days storage.
## Steps

1. [Clone the repo](#1-clone-the-repo)
1. [Create Watson Assistant service](#2-create-watson-services)
1. [Customize the Watson Assistant skill](#3-customize-the-watson-assistant-skill)
1. [Deploy the application](#5-deploy-the-application)
1. [Use the web app](#6-use-the-web-app)

### 1. Clone the repo

Clone the `Chatbot Banking` locally. In a terminal, run:

```bash
git clone https://github.com/Mishelc/ChatbotBanking
```

### 2. Create Watson services

Provision the following service:
<b>Watson Assistant Plus</b>
<p>
<h5>Create the service instances</h5>
  <ul>
    <li>If you do not have an IBM Cloud account, register for a free trial account <a href="https://cloud.ibm.com/login">here</a>.</li>
    <li>Click <a href="https://cloud.ibm.com/catalog/services/watson-assistant">here</a> to create a <b>Watson Assistant Plus</b> instance.</li>
  </ul>


### 3. Customize the Watson Assistant skill

<p>

* Find the Assistant service in your IBM Cloud Dashboard.
* Click on the service and then click on `Launch tool`.
* Go to the `Skills` tab.
* Click `Create skill`.
* Select the `Dialog skill` option and then click `Next`.
* Click the `Import skill` tab.
* Click `Choose JSON file`, go to your cloned repo dir, and `Open` the JSON file in `data/conversation/workspaces/banking_US.json` (or use the old full version in `full_banking.json`). `banking_IN.json` is used for content for banking in India and `banking_US.json` is used for content for banking in United States.
* Select `Everything` and click `Import`.

</p>
To find the `Skill ID` for Watson Assistant:

* Go back to the `Skills` tab.
* Click on the three dots in the upper right-hand corner of a card and select `View API Details`.
* Copy the `Skill ID` GUID. Use this value when setting up your run-time environment.
* By default the application will import and use the skill named **watson-banking-chatbot**, but you can configure it to use another skill by setting the run-time environment variable `SKILL_ID`.
