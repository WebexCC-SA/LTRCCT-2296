---
#icon: material/folder-open-outline
icon: material/medal
---



## Story

In Webex Contact Center, subflows modularize complex workflows by packaging reusable, independent functions (like business hour checks, queue treatment callback collection, error handling, etc.) into separate mini-flows, which are then called from main flows. Their purpose is to simplify development, reduce main flow size, improve organization, and ensure consistency by promoting code reuse for common tasks, making flows cleaner and easier to manage.
In the scope of this misson you will use subflow template to automate queue treatment in the Webex Contact Center environment. The main goal is to improve the customer experience while waiting in a queue by playing music, delivering messages, and looping until a predefined condition is met.

## Call Flow Overview

1. A new call enters the flow. </br>
2. The flow executes the logic and places the call into a queue.</br>
3. Once the call is placed in the queue, the main flow calls subflow sending few parameters to it.
4. The subflow executes the following logic **three times** based on the received parameters:
   > - Plays a music in queue. The duration is defined by the parameter.</br>
   > - Plays a Text-To-Speech message. The text is fetched from the parameter.</br>
   > - Plays a music in queue of the same duration again.</br>

## Mission Details

Your mission is to:

1. Create a Subflow from the template.
2. Call the Subflow with proper parameters from the Main Flow.
3. Make test calls and verify queue treatment done by the Subflow.

---

## Part 1 - Integrate a Subflow with your Main Flow

### Build

1. Switch to [Webex Control Hub](https://admin.webex.com){:target="_blank"}. Look for the contact center option in the left pane under **SERVICES – Contact Center** and click on it.
2. Navigate to **Flows** in the left pane and click on **Subflows** tab at the top of the main window. Then click on **Manage Subflows** dropdown list at the top-right part of the main window and select **Create Subflows**.
3. **Create a new subflow** tab will be opened. Navigate to **Subflow Templates**.
4. Choose **Queue Treatment Subflow** template and click **Next**.

    !!! Note
        You can press **View Details** link under the temaplte name to observe flow structure and read flow description before proceeding with the template.

5. Name your subflow as <span class="attendee-id-container">**Subflow_<span class="attendee-id-placeholder" data-prefix="Subflow_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>** Then click on **Create Subflow**.

    !!! Note
        **Edit** should be set to **On** when you create new flow, but if not switch it from **Edit: Off** mode to **Edit: On** at the top of the page.

    ![profiles](../graphics/Lab1/L1M8_Create_Subflow_Template.gif)

6. At the bottom right corner toggle **Validation** from **Off** to **On** to check for any potential flow errors and recommendations. 

    !!! Note
        You can ignore recommendations but cannot skip errors.

7. Click **Publish Subflow**. In popped-up window, make sure the **Latest** label is selected in the **Add Label Label(s)** list, then click **Publish Subflow**.
  
    ![profiles](../graphics/Lab1/L1M8_Publish_Subflow.gif)

8. Switch to the Flow Designer tab with your **<span class="attendee-id-container">Main_Flow_<span class="attendee-id-placeholder" data-prefix="Main_Flow_">Your_Attendee_ID</span></span>** opened and make sure **Edit** toggle is **ON**.

    !!! Note
        If you closed browser tab with Flow Designer before, switch to [Webex Control Hub](https://admin.webex.com){:target="_blank"}. Look for the contact center option in the left pane under **SERVICES – Contact Center** and click on it. Then navigate to **Flows**, search for your flow <span class="attendee-id-container">**Main_Flow_<span class="attendee-id-placeholder" data-prefix="Main_Flow_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>** and click on it to open it in the flow designer.

9. Click on any empty place at flow canvas and make sure you see **General Settings** appeared on the right pane. The scroll down to the **Variable Definition** section and add the following two **Flow Variables** by pressing **Add Flow Variable** button:

    > - Name: **subDuration**
    > - Variable Type: **Integer**
    > - Default Value: **5**
    > - Turn on the toggle **Enable External Override**. Make sure **Resource Type** is set as **None (default)**
    >
    > - Name: **subMessage**
    > - Variable Type: **String**
    > - Default Value: **Thanks for your patience. Please hold on while we find an expert for you.**
    > - Turn on the toggle **Enable External Override**. Make sure **Resource Type** is set as **None (default)**

10. Delete the **Music** node connected to the **Queue** node. The **EndFlow** node which was connected to the **Music** node becomes unconnected at this step.
11. Go to the activity library pane on the left, scroll up to the top and click on the **Subflow** tab.
12. Find your subflow <span class="attendee-id-container">**Subflow_<span class="attendee-id-placeholder" data-prefix="Subflow_">Your_Attendee_ID</span></span>**, drag it to flow canvas and place right after your **Queue** node. Connect it to the other nodes in the following way:

    > - The output of the **Queue** node to the input of the <span class="attendee-id-container">**Subflow_<span class="attendee-id-placeholder" data-prefix="Subflow_">Your_Attendee_ID</span></span>**.
    > - The main (aka, top) output of the <span class="attendee-id-container">**Subflow_<span class="attendee-id-placeholder" data-prefix="Subflow_">Your_Attendee_ID</span></span>** node to the input of **PlayMessage** node.
    > - The **Undefined Error** (aka, bottom) output of the <span class="attendee-id-container">**Subflow_<span class="attendee-id-placeholder" data-prefix="Subflow_">Your_Attendee_ID</span></span>** node to the input of unconnected **EndFlow** node.
    > - The output of the **PlayMessage** node to the input of the <span class="attendee-id-container">**Subflow_<span class="attendee-id-placeholder" data-prefix="Subflow_">Your_Attendee_ID</span></span>** node.

13. Click on the <span class="attendee-id-container">**Subflow_<span class="attendee-id-placeholder" data-prefix="Subflow_">Your_Attendee_ID</span></span>** node. Go to the node settings pane on the right and set the following parameters:
    
    > Subflow Label: **Latest**
    
    Scroll down to the **Subflow Input Variables** section and configure the following mapping by pressing **Add New** button for every variable:
    
    > - Current flow variable: **subDuration**
    > - Subflow Input Variable: **musicDuration**
    >
    > - Current flow variable: **subMessage**
    > - Subflow Input Variable: **queueMessage**

14. Click on the **PlayMessage** node. Go to the node settings pane on the right and paste the following message into the **Text-to-Speech Message** field:
    
    > ***We apologize, but all our agents are currently busy. Your waiting time may be longer than expected.***<span class="copy-static" title="Click to copy!"data-copy-text="We apologize, but all our agents are currently busy. Your waiting time may be longer than expected."><span class="copy"></span></span>

15. Validate the flow by clicking **Validate**, then press **Publish Flow**. In popped-up window, make sure the **Latest** label is selected in the **Add Label Label(s)** list, then click **Publish Flow**.

### Checkpoint Test

!!! Note
    Since we called the <span class="attendee-id-container">**Subflow_<span class="attendee-id-placeholder" data-prefix="Subflow_">Your_Attendee_ID</span></span>** with our custom parameters the caller should hear the following:
    - Repeated 3 times: 5 seconds of music in queue + our custom message for the subflow ***Thanks for your patience. Please hold on while we find an expert for you.*** + 5 more seconds of music in queue.
    - The message in the main flow: ***We apologize, but all our agents are currently busy. Your waiting time may be longer than expected.***
    - Then the subflow should be called again and start playing 5 seconds of music in queue again.
    Let's test this.

1. Your Agent desktop session should be still active but if not, use Webex CC Desktop application ![profiles](../graphics/overview/Desktop_Icon40x40.png) and login with agent credentials you have been provided **wxcclabs+agent_ID<span class="attendee-id-placeholder">Your_Attendee_ID</span>@gmail.com**.
2. <span style="color: red;">Please pay your attention that the agent does not need to take call during this mission. Thus select any Idle state code in the agent desktop before making test calls. For example, **Busy**.</span>
3. Make a test call to the Support Number, ensure that the caller hears all voice prompts described in the note above.
4. Finish the call.

---

## Part 2 - Override flow variables at the channel level

### Build

1. Switch back to **Contact Center** settings on [Webex Control Hub](https://admin.webex.com){:target="_blank"}.
2. Navigate to **Channels** in the left pane. Search for your channel **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Channel">Your_Attendee_ID</span>_Channel<span class="copy" title="Click to copy!"></span></span>** and click on it.
3. Scroll down to the **Entry point settings** section and look at **Override flow settings** part of it. You should see two variables there:

    > - **subDuration**
    > - **subMessage**

4. Modify these variables in the following way and save changes:

    > Variable **subDuration**: Turn on **Override value** toggle in the **Value** column and set new value as **15**.
    > Variable **subMessage**: Turn on **Override value** toggle in the **Value** column and set new value as ***Thanks for staying with us. Your call will be answered by the next available agent.***.

    !!! Note
        Please keep in mind that there is **no need to validate and publish your flow** one more time after you have overridden flow variables at the channel level.

### Checkpoint Test

!!! Note
    Since we have overridden **subDuration** and **subMessage** variables at the channel level the <span class="attendee-id-container">**Subflow_<span class="attendee-id-placeholder" data-prefix="Subflow_">Your_Attendee_ID</span></span>** is now being called with these new values. Thus the caller should hear updated logic:
    
    - Repeated 3 times: 10 seconds of music in queue + our overrided custom message for the subflow ***Thanks for staying with us. Your call will be answered by the next available agent.*** + 10 more seconds of music in queue.
    
    - The same message in the main flow: ***We apologize, but all our agents are currently busy. Your waiting time may be longer than expected.***

    - Then the subflow should be called again and start playing 10 seconds of music in queue again.
    
    Let's test this.

1. Your Agent desktop session should be still active but if not, use Webex CC Desktop application ![profiles](../graphics/overview/Desktop_Icon40x40.png) and login with agent credentials you have been provided **wxcclabs+agent_ID<span class="attendee-id-placeholder">Your_Attendee_ID</span>@gmail.com**.
2. <span style="color: red;">Please pay your attention that the agent does not need to take call during this mission. Thus select any Idle state code in the agent desktop before making test calls. For example, **Busy**.</span>
3. Make a test call to the Support Number, ensure that the caller hears all voice prompts described in the note above.
4. Finish the call.

**Congratulations on completing another mission where we have learnt how Post Call Survey can be implemented.**