# TinyWebDB-Google-App-Script
**TinyWebDB System written in Google Apps Script** to store/get tag and values to/from your **Google Spreadsheet**. And here we have explained how to create your **own TinyWeb DB Server** 
for FREE to use it in your projects.

---

We are going to expain this setup process in **3 simple steps**
1. [Create a spreadsheet](#1-create-a-spreadsheet)
2. [Deploying the script](#2-deploying-the-server)
3. [Version Configuration on Service URL](#3-version-configuration-on-service-url)

### 1. Create a spreadsheet

- Visit the url https://docs.google.com/spreadsheets/u/0/create and create a new spredsheet. Now set a title to this spreadsheet and copy the Url from the address bar.
- We only need 2 columns (A and B) so select rest columns and simply delete it. Leave the sheet name as **Sheet1**.

![image|690x252](https://cttricks.com/github/step1.png)

You can skip this 2nd step and go to "[Deploying the script](#2-deploying-the-server)" if you don't want to do these chnages. Also you can also use your old Spreadsheet instead of creating new one. Simply copy the URL of that Spreadsheet.

### 2. Deploying the script

- Goto **Google Apps Script** dashboard (https://script.google.com/home) and click on **New Project**. It'll open the google apps script code editor on same window.
- **Copy** the codes from 'Code.gs' file and **Paste** it there in the 'Code.gs' file on your app script editor.
- Now paste the Spreadsheet URL in **var SpreadsheetUrl** and also make sure if you have changed the sheet name from **Sheet1** to something else then put that name in **var Sheet**.
- Click on the **Publish button** and select *Deploy as web app*.

![image|690x252](https://cttricks.com/github/step2-1.png)

Now change **Who has access to the app** and set it to Anyone, even anonymous.

![image|690x252](https://cttricks.com/github/step2-2.png)

 And now click on Update/Deploy
 
![image|690x252](https://cttricks.com/github/step2-3.png)

Here is the URL of your **TinyWeb DB Server**. Copy this URL now.


### 3. Version Configuration on Service URL

We just have to add *?version=1.0* at the end of the url. So the final url will have this suffix at the end.

**Example :** final url *.....zsiUUnoR9Y7B58h/exec?version=1.0*


All set. Now you can use this url as *Server URL* of the TinyWeb DB componnet. Enjoy!!!
