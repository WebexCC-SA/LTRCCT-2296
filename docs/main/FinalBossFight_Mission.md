---
#icon: material/folder-open-outline
icon: material/bullseye-arrow
---

## Welcome Final Challenge Mission!

## Story
In this short troubleshooting task you're are going to play a technical engineer who got a request from end customer regarding broken production flow. You as an engineer must fix the reported issue before contact center opens in just 30 mins. </br>
So <span style="color: red;">**NO PRESSURE HERE AT ALL!!!**</span>

## Problem Description
A customer reports a critical issue with their call flow: callers cannot land in the queue and are being redirected to the TAC Service number, which is not an intended outcome. Initially, the problem seemed to be related to the queue configuration, but after the customer attempted some adjustments, the situation worsened. Now, callers cannot even reach the queue node, and it seems like the HTTP request has been broken completely.


## Mission Details
Your task is to identify and fix the issues causing this behavior. Specifically:

1. The flow should correctly execute the HTTP request and retrieve the expected value of **BossQueue**.</br>
2. The queue node should reference the queue dynamically using a variable, ensuring that calls are directed to BossQueue.</br>
3. Calls should land in the intended queue.</br>
4. The phone in the middle of the room should ring, signaling a successful fix.</br>

## Before you start troubleshooting...

1. <span style="color: red;">[IMPORTANT]</span> [Download](https://drive.google.com/drive/folders/1ubgdUQyHJnxFMWc1ecMStl8W0JhA6SAw?usp=drive_link){:target="_blank"} your troubleshooting flow from shared folder.

2. In **Search in Drive** line search for **<span class="attendee-id-container">FinalBoss_Flow_<span class="attendee-id-placeholder" data-prefix="FinalBoss_Flow_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>**. Then download the file to your local drive.

     ![Profiles](../graphics/Lab2/Tshoot_GoogleDrive.gif)

3. Switch to **Control Hub** and navigate to **Flows**. Click on **Manage Flows**, then select **Import Flows**.

4. Click on **Choose a file**, then navigate to the folder where you saved your **<span class="attendee-id-container">FinalBoss_Flow_<span class="attendee-id-placeholder" data-prefix="FinalBoss_Flow_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>**. Select the file and click **Open**

5. Click **Import**. This step will create your personal troubleshooting flow.

6. Switch **Edit** from  **Off** to **On**. Switch **Validation** from  **Off** to **On**. Then **Publish** your flow.

     ![Profiles](../graphics/Lab2/Tshoot_ImportFlow.gif)

7. Assign **<span class="attendee-id-container">FinalBoss_Flow_<span class="attendee-id-placeholder" data-prefix="FinalBoss_Flow_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>** to your **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Channel">Your_Attendee_ID</span>_Channel<span class="copy" title="Click to copy!"></span></span>**.

     ![Profiles](../graphics/Lab2/Tshoot_ChannelAssign.gif)

8. Open the **<span class="attendee-id-container">FinalBoss_Flow_<span class="attendee-id-placeholder" data-prefix="FinalBoss_Flow_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>** and you're ready to start troubleshooting.


## Competition & Rewards
A real IP phone is placed in the middle of the room, and an agent logs into Webex Desktop using that phone as the telephony option. Once the call flow is successfully fixed, the phone will ring, and the agent will accept the call.</br>
The first 2 participants to successfully make the phone ring—**WITHOUT CHEATING** and by following the rules explained previously—will win a prize. This encourages fast and accurate troubleshooting, making the exercise more engaging and competitive.

---

This exercise will help attendees practice debugging and resolving common Webex Contact Center API integration issues. Ensure they document their troubleshooting steps to reinforce learning.

<!-- Markdown content with embedded HTML -->
    
<div id="divicw" data-bind="8876169B-218C-4AA0-832E-1528DA7A20EB" data-org="" data-guid="84ba4cc0-a68f-455e-8954-20d4a17855c2"></div><script>{3}var i={t:function(){try{var e=document.getElementById("divicw"),t=document.createElement("script");t.src="https://attachments-ldn.imiengage.io/widgeteu/js/imichatinit.js?t="+new Date().toISOString(),e.insertAdjacentElement("afterend",t),t.addEventListener("load",function(){console.log(new Date().toISOString(),"Livechat script loaded successfully!")}),t.addEventListener("error",function(){console.log(new Date().toISOString(),"Error loading Livechat script");i.o(e)})}catch(e){console.error(e)}},o:function(e){e.insertAdjacentHTML("afterend",'<iframe id="tls_al_frm" frameborder="0" style="overflow:hidden;height:208px;width:394px;position:fixed;display:block;right:48px;bottom:12px;z-index:99999;display:none;"></iframe>');var t=document.getElementById("tls_al_frm"),n=t.contentWindow,d=n.document;d.open();d.write("<!doctype html><html><head><meta charset='utf-8'><title>Untitled Document</title><style>body{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#99a0b0;font-size:14px}.popover__content{background-color:#fbfbfe;padding:1.5rem;border-radius:5px;width:300px;box-shadow:0 2px 5px 0 rgba(0,0,0,0.26);position:relative}.popover__message{font-weight:600;color:#56627c;font-size:16px}.pull-left{float:left}.clearfix{clear:both}.hdr-txt{width:218px;margin-top:3px}.para-txt a{text-decoration:none;color:#005cde}.close-btn{position:absolute;right:15px;top:15px}.close-btn a{text-decoration:none;font-weight:400;color:#56627c;font-size:16px}</style></head><body><div class='popover__content'><div class='close-btn'><a href='#' onclick='closeTLSAlert()'>X</a></div><div class='popover__message'><div class='pull-left hdr-txt'>This browser version is not supported on LiveChat.</div></div><div class='clearfix'></div><p class='para-txt'>Please update your browser to the latest version and re-open the website to access the widget.</p></div><script>function closeTLSAlert(){window.parent.postMessage({key:'close_tls_alert',value:'close_tls_alert',action:'close_tls_alert'},'*');}<\/script></body></html>");d.close();t.style.display='block';window.addEventListener('message',function(e){'close_tls_alert'===e.data.action&&i.s()})},s:function(){var e=document.getElementById('tls_al_frm');e&&e.remove()}};i.t();</script>

</div>

<script src='../template_assets/load.js'><script>