**_Lightweight Personal YouTube goodness._**

**_Steps to run the App on your local._**
```
Clone the repository (duh!)
Open your terminal.
> cd {repo_directory}
> npm i 
OR
> yarn

Dependencies will take a couple of minutes to install. Get some coffee in the meantime.
```

**_Important step before you can actually run the app._**
```
You will require a YouTube API key. If you already know how to get one, skip the following steps.

First time getting a YouTube API key? Perform the following steps: 

If you do not want to read the detailed steps OR get stuck at any of the steps, visit the following link and follow along, it is as easy as 1-2-3:
https://developers.google.com/youtube/v3/getting-started

HOWEVER, if you choose to trust me:
- Visit: https://console.developers.google.com/apis/dashboard
- Accept the terms.
- The page will initially be loaded with commonly used services like Gmail, Google Drive.
- Click on the 'View all' link to view more services.
- Scroll down a bit and click on the 'YouTube Data API v3' card.
- On the next page, click on 'Create'.
- On the next page, choose a project name; can be anything you wish.
- On the next page, click on 'Enable'. 
- This enables the YouTube API access on your account. Finally to get the key, click on 'Create Credentials'.
- For the question: 'Where will you be calling the API from?' choose 'Web browser (JavaScript)'
- For the question 'What data you will be accessing?' choose 'Public data'.
- Click on the button below the questions and there you would get your API key, copy it and go to the next step.

Your key should look something like this (this is a dummy key, don't try to use this): AEztSyClt2npqMRxid7V_PnQ32gVuGXw1PqACms
```

**_Once you have the API key._**
```
- Open config.js inside the 'config' directory.
- Replace the text 'REPLACE_THIS_TEXT_WITH_YOUR_KEY' with your API key.
- Note: The key should be wrapped in quotes like this: 'AEztSyClt2npqMRxid7V_PnQ32gVuGXw1PqACms'
```

**_Finally, running the App._**
```
After performing all the steps above, go back to your terminal, type the dollowing and hit enter:
> npm start
OR
> yarn start
```

**_A quick note about tests._**
```
Currently the project does not have any tests.
I tried wiring up Mocha tests, however, few of the React component libraries used in the project 
do not play well with Mocha tests. This is a known issue with those libraries.
Solution is to use Jest. However, currently I am learning how to use Jest
and this would take some time. It is a priority though!  
```
