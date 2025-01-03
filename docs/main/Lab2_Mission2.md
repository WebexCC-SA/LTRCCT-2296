---
#icon: material/folder-open-outline
icon: material/medal
---

<script>
 function update () {
    const form = document.forms['attendee-form'];
    if (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        const inputs = Array.from(form.querySelectorAll('input'));
        const values = inputs.reduce((acc, input) => {
          acc[input.id + '_out'] = input.value;
          return acc;
        }, {});

        Object.entries(values).forEach(([id, value]) => {
          const elements = document.getElementsByClassName(id);
          Array.from(elements).forEach(element => {

            console.log(element.innerHTML);
            if(Number(element.innerHTML) > 99 ){
               console.log(`Got a 99+ attendee: ${element.innerHTML}`);
               element.innerHTML = value;
             }
            else{
               console.log(`Got a sub 99 attendee: ${element.innerHTML}`);
               if(element.innerHTML.includes('gmail.com'))
               {
                element.innerHTML = `0${value}`;
                }
               else{
                element.innerHTML = value;
               }
                }
          });
        });
        const attendeeIDInput = form.elements['attendeeID'];
       if (attendeeIDInput && attendeeIDInput.value !== 'Your_Attendee_ID') {
          localStorage.setItem('attendeeID', attendeeIDInput.value);
        }
      });
    }
  };
</script>
<style>
  /* Style for the button */
  button {
    background-color: black; /* Set the background color to black */
    color: white; /* Set the text color to white */
    border: none; /* Remove the border */
    padding: 10px 20px; /* Add some padding for better appearance */
    cursor: pointer; /* Show a pointer cursor on hover */
  }

   /* Style for the input element */
  input[type="text"] {
    border: 2px solid black; /* Set the border thickness to 2px */
    padding: 5px; /* Add some padding for better appearance */

</style>


 Please **`submit the form below with your Attendee or pod ID`**. All configuration entries in the lab guide will be renamed to include your pod ID.
{: .block-warning }

<script>
document.forms["attendee-form"][1].value = localStorage.getItem("attendeeID") || "Your Attendee ID" 
</script>
<form id="attendee-form">
  <label for="attendee">Attendee ID:</label>
  <input type="text" id="attendee" name="attendee" onChange="update()"><br>
<br>
  <button onclick="update()">Save</button>
</form>

<br/>

# Mission 2: Routing facilitation

## Objective

The primary objective of this new feature is to enhance nodes activities to include a dynamic variable-based selection option to make you flow smaller and simpler to adjust.

You will learn how to use **Dynamic Variables** in multiple nodes including **GoTo**, **Business Hours**, **Queue** and other nodes. 


## Steps Objective:
    
  - We are going to use new Flow Template Dynamic Variable Support
  - Most of the settings in nodes settings are going to be variables.
  - All Business Hours, Channels and additional Flows have been pre-configured for you.
  - As a Queue you're are going to use your **<w class = "attendee_out">attendeeID</w>_Queue**
  - We are going to imitate a real API server by providing realistic responses to requests. For that we chose Server [**MockAPI**](https://mockapi.io/){:target="_blank"}. For more information of how you can use MockAPI please watch these Vidcasts: 
[**[ADVANCED] Use MockAPI to enhance your Demos - PART 1**](https://app.vidcast.io/share/ce058b71-109e-4929-b9ca-46b83d94f7e3){:target="_blank"} and [**[ADVANCED] Use MockAPI to enhance your Demos - PART 2**](https://app.vidcast.io/share/1e259a34-7e9e-44d9-aa5a-5d76e07256a3){:target="_blank"}
  - Flow variables are coming with a template. And the same are being used in **MockAPI** database as key values.
  - Parsing of fetched data is part of preconfigured flow template but requires additional adjusting. That will be shown in corresponing steps. In real world you are free to create/modify those names as business requires.

## Expected Result

1. When call arrives fetch the data from **MockAPI** based on your Dialed Number
2. Write the data into respective preconfigured flow variables. These Variables are being used in all consequent nodes.
3. Business Hours entity configured to cover EMEA timezone. Call should go through WorkingHours exit in normal behavior.
4. Play Message nodes have been configured to play messages received from API call

## Steps

1. Login into Control Hub [Webex Control Hub](https://admin.webex.com){:target="_blank"} by using your Admin profile if your session has been expired.
    Your login will be the Admin Name in the email you received. It will be of the format **wxcclabs+admin_ID<w class = "attendee_out">attendeeID</w>@gmail.com**. You will see another login screen with OKTA on it where you may need to enter the email address again and the password provided to you.

    ![Profiles](../graphics/Lab1/1-CH_Login.gif)

2. This is the Administration interface for webex contact center and is also known as the Control Hub. Look for the contact center option in the left pane under **SERVICES – Contact Center** and click it

3. Navigate to **Flows**, click on **Manage Flows** dropdown list and select **Create Flows**

4. New Tab will be opened. Navigate to **Flow Templates**

5. Choose **Dynamic Variable Support** and click **Next**. You can open **View Details** and to see observe flow structure and read flow description.

6. Name you flow as <copy>**DynamicVariables_<w class = "attendee_out">attendeeID</w>**</copy>. Then click on Create Flow

    ![Profiles](../graphics/Lab2/BM2-8-Chrometest.gif)

7. Observe preconfigured nodes and flow variables. If you have questions please reach out to lab proctor.
    
    - **FetchFlowSettings** node is used to access external database over API and parse the result by writing response result into respective Flow Variables which have been preconfigured for you already.
    - **SetVariable_mwn** node writes complete API response into debug variable so you could see the complete API call result in Debug tool. It's been taken from **FetchFlowSettings**.httpResponseBody output variable of FetchFlowSettings node
    - All **PlayMessage** and **Play Music** nodes have been preconfigured to play TTS messages taken from respective API response
    - **BusinessHours_os2** node set to bussinesshours variable which is your business hour entity **<w class = "attendee_out">attendeeID</w>_Bussiness_Hours**
    - **QueueContact_a62** node set to queue variable which is your queue entity **<w class = "attendee_out">attendeeID</w>_Queue**
    - Some **GoTo** nodes are configured to use variables and some have statice values. We will adjust them while going through further steps. 

    ![Profiles](../graphics/Lab2/BM2-7-ObserveFlow.gif)

8. Test your API resource. **https://674481b1b4e2e04abea27c6e.mockapi.io/flowdesigner/Lab/DynVars?dn=*{DNIS}***
    - Replace DNIS with provided DNIS number stripping +1

    <span style="color: orange;">[Example:]</span> If your number +14694096861, then your GET Query should be ***https://674481b1b4e2e04abea27c6e.mockapi.io/flowdesigner/Lab/DynVars?dn=4694096861***
    - Open Chrome browser and past your URL. You should get the follwoing result
    
    ![Profiles](../graphics/Lab2/BM2-8-Chrometest.gif)

9. Select **FetchFlowSettings** HTTP Node and paste your GET request in Request URL field by replacing a templated one.
    ***https://674481b1b4e2e04abea27c6e.mockapi.io/flowdesigner/Lab/DynVars?dn={{NewPhoneContact.DNIS | slice(2) }}***

10. In the same node, under Parsing Settings add **[0]** after **$** sign. This needs to be done due to output structure of API response. 
    
    !!! Note
        Templates contain basic configuration and requres adjusting per usecase scenario. 
    
    ![Profiles](../graphics/Lab2/BM2-9-10-GETAPI_Config.gif)
    
    !!! Note
        You can test the JSON Path in the following tool [https://jsonpath.com/](https://jsonpath.com/){:target="_blank"}
          - Paste your GET URL into the Browser address line and copy the output in square brackets (including brackets)
          - Open [https://jsonpath.com/](https://jsonpath.com/){:target="_blank"} and paste the copied response into **Inputs** window
          -In **JSONPath** box copy and paste one of the path expression from **FetchFlowSettings** to verify your results.

         ![Profiles](../graphics/Lab2/BM2-10-JSONPath.gif)

11. Open a **Queue** Node and set **Fallback Queue** to **CCBU_Fallback_Queue**. That is needed to make sure the call will find an end queue in case API GET call fails.

12. Open **GoTo_x19** node and set:

    > Destination Type: **Flow**
    >
    > Static Flow
    >
    > Flow: **CCBU_ErrorHandling_Flow**
    >
    > Choose Version Label: **Latest**
    
13. Open **GoTo_8ca** and set:

    > Destination Type: **Entry Point**
    >
    > Static Entry Point
    >
    > Entry Point: **CCBU_ErrorHandling_Channel**

 
14. Repeat node settings in **Step 14** for **GoTo_uyn**

15. Repeat node settings in **Step 15** for **GoTo_dbr**

    ![Profiles](../graphics/Lab2/BM2-11-15-FallbackQ.gif)

16. **Validate** and **Publish** flow

17. In Popped up window click on dropdown menu to select **Latest** label, then click **Publish**

18. Assign the Flow <copy>**DynamicVariables_<w class = "attendee_out">attendeeID</w>**</copy> to your Channel (Entry Point) - <copy>**<w class = "attendee_out">attendeeID</w>_Channel**</copy> 
    
    > Click on <copy>**<w class = "attendee_out">attendeeID</w>_Channel**</copy>
    >
    > In Entry Point Settings section change the following:
      - Routing Flow -> <copy>**DynamicVariables_<w class = "attendee_out">attendeeID</w>**</copy>
      - Version Label -> **Latest**

    ![Profiles](../graphics/Lab2/BM2-18-ChannelChange.gif)


## Testing

1. Open [Agent Desktop](https://desktop.wxcc-us1.cisco.com/){:target="_blank"} and login with agent credentials you have been provided <copy>**wxcclabs+agent_ID<w class = "attendee_out">attendeeID</w>@gmail.com**</copy>. You will see another login screen with OKTA on it where you may need to enter the email address again and the password provided to you. 

2. Select **Desktop** as a ***Telephony Option*** and Team <copy>**<w class = "attendee_out">attendeeID</w>_Team**</copy>. Click **Submit**. Allow browser to access Microphone by clicking **Allow** on ever visit.

3. Make your agent ***Available*** and you're ready to make a call.

    ![profiles](../graphics/Lab1/5-Agent_Login.gif)

4. Make your agent Available and you're ready to make a call. If everyhing configured as per instructions you should hear a **welcome1** message that is a value of ***$[0].welcomePrompt1*** and then ***$[0].welcomePrompt2***. Finally the call should land on the ***$[0].queue***

### <span style="color: orange;">[Optional]</span> Test other variables

5. You can do the same trick we did in LAB A and use **Override** option to change the logic. Overrides as well as Business hours have been preconfigured for you. Now we need to apply it on your **<w class = "attendee_out">attendeeID</w>_Bussiness_Hours** entity. Open **<w class = "attendee_out">attendeeID</w>_Bussiness_Hours** in **Control Hub**, scroll down to Additional Settings and select Overrides_Hours from Override dropdown list. Then click Save.
    
    !!! Note
        Override Hours entity overwrites Working Hours and set to duration of current Cisco Live lab 

    ![Profiles](../graphics/Lab1/12-Overrides_Config.gif)

6. **TO CHECK** Make a new call to be redirected to flow ***$[0].goToFlow*** where the following message can be heard: **"Thanks you for call. You are now on Error Handling flow and will be redirected to Global Support line in a moment. Good bye."**

7. Now we need to revert the configuration we made in step 24. Open **<w class = "attendee_out">attendeeID</w>_Bussiness_Hours** in **Control Hub** in **Control Hub**, scroll down to **Additional Settings** and select None from Override dropdown list. Then click **Save**.

    ![Profiles](../graphics/Lab1/13-Revert_Overrides_Config.gif)


## Summary
In this mission you successfully implemented Dynamic Variable usage on different types of nodes. By doing this you can significantly reduce the size of production flows and simplify it's configuration by just changing values in you database instead of adjusting many nodes in flows.
