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
4. The subflow executes the following logic based on the received parameters:
   - Plays a music in queue. The duration is defined by the parameter.</br>
   - Plays a Text-To-Speech message. The text is fetched from the parameter.</br>
   - Plays a music in queue of the same duration again.</br>

## Mission Details

Your mission is to:

1. Create a Subflow from the template.
2. Call the Subflow with proper parameters from the Main Flow.
3. Make test calls and verify queue treatment done by the Subflow.

---

### Build

1. Switch to [Webex Control Hub](https://admin.webex.com){:target="_blank"}. Look for the contact center option in the left pane under **SERVICES – Contact Center** and click on it.
2. Navigate to **Flows** in the left pane and click on **Subflows** tab at the top of the main window. Then click on **Manage Subflows** dropdown list at the top-right part of the main window and select **Create Subflows**.
3. **Create a new subflow** tab will be opened. Navigate to **Subflow Templates**.
4. Choose **Queue Treatment Subflow** template and click **Next**.

    !!! Note
        You can press **View Details** link under the temaplte name to observe flow structure and read flow description before proceeding with the template.

5. Name your flow as <span class="attendee-id-container">**Subflow_<span class="attendee-id-placeholder" data-prefix="Subflow_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>** Then click on **Create Subflow**.

    !!! Note
        **Edit** should be set to **On** when you create new flow, but if not switch it from **Edit: Off** mode to **Edit: On** at the top of the page.

    ![profiles](../graphics/Lab1/L1M8_Create_Subflow_Template.gif)

6. At the bottom right corner toggle **Validation** from **Off** to **On** to check for any potential flow errors and recommendations. 

    !!! Note
        You can ignore recommendations but cannot skip errors.

12. Click **Publish Subflow**. In popped-up window, make sure the **Latest** label is selected in the **Add Label Label(s)** list, then click **Publish Subflow**.
  
    ![profiles](../graphics/Lab1/L1M8_Publish_Sublow.gif)
