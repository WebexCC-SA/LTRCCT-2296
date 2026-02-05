---
#icon: material/folder-open-outline
icon: material/bullseye-arrow
---

## Steps to setup each laptop in the room.

0. Download and save on desktop a txt file for current pod from [**User Credentials**](https://cisco.box.com/s/3fz3m4a1tkzh8entx2lnon8y9z2s9zpw){:target="_blank"}. Example **ID <id> - LTRCCT-2966 Credentials**, where **<id>** is the POD ID of current desktop.
</br>


1. On each laptop access lab -assistant with pin code 447094
2. Click on Documentation. Go to Getting Started -> **LAB ROOM SETUP**
3. Create Chrome user profiles. 
---

### Creating Chrome user profiles

Open the Windows Terminal (Windows key and type **Powershell**). Paste and run the following code. You will see 2 new Chrome shortcut icons on the desktop

```
# ================================
# Helper function to create Chrome profile, shortcut, profile name, and bookmark
# ================================
function New-ChromeProfile {
    param(
        [string]$ProfileFolderName,   # Folder under chromeProfiles (e.g. 'admin', 'agent')
        [string]$ProfileDisplayName,  # Name shown by Chrome (e.g. 'Admin', 'Agent')
        [string]$ShortcutName,        # Desktop shortcut name (e.g. 'WxCC Admin.lnk')
        [string]$BookmarkName,        # Bookmark title (e.g. 'LTRCCT-2966')
        [string]$BookmarkUrl          # Bookmark URL
    )

    $DesktopPath = [Environment]::GetFolderPath("Desktop")
    $ProfilePath = "$env:USERPROFILE\chromeProfiles\$ProfileFolderName"
    $DefaultProfilePath = "$ProfilePath\Default"
    $PreferencesFile = "$DefaultProfilePath\Preferences"
    $BookmarksFile = "$DefaultProfilePath\Bookmarks"

    # --- Ensure profile directory exists ---
    if (!(Test-Path $DefaultProfilePath)) {
        New-Item -ItemType Directory -Path $DefaultProfilePath -Force | Out-Null
    }

    # --- Create desktop shortcut for this profile ---
    $shell = New-Object -ComObject WScript.Shell
    $shortcut = $shell.CreateShortcut("$DesktopPath\$ShortcutName")
    $shortcut.TargetPath = "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
    $shortcut.Arguments = "--user-data-dir=$ProfilePath"
    $shortcut.Save()

    # --- Set/Update profile name in Preferences ---
    if (!(Test-Path $PreferencesFile)) {
        # Minimal Preferences if Chrome hasn't created one yet
        @"
{
  "profile": {
    "name": "$ProfileDisplayName"
  }
}
"@ | Set-Content -Path $PreferencesFile -Encoding UTF8
    } else {
        $json = Get-Content $PreferencesFile -Raw | ConvertFrom-Json

        if (-not $json.profile) {
            $json | Add-Member -MemberType NoteProperty -Name 'profile' -Value @{ name = $ProfileDisplayName }
        } else {
            $json.profile.name = $ProfileDisplayName
        }

        $json | ConvertTo-Json -Depth 10 | Set-Content $PreferencesFile -Encoding UTF8
    }

    # --- Create/overwrite Bookmarks file with a single bookmark on the bookmark bar ---
    $BookmarkJson = @{
        roots = @{
            bookmark_bar = @{
                children = @(
                    @{
                        date_added = "13200000000000000"
                        id = "1"
                        name = $BookmarkName
                        type = "url"
                        url  = $BookmarkUrl
                    }
                )
                date_added = "13200000000000000"
                date_modified = "13200000000000000"
                id = "2"
                name = "Bookmarks bar"
                type = "folder"
            }
            other = @{
                children = @()
                id = "3"
                name = "Other bookmarks"
                type = "folder"
            }
            synced = @{
                children = @()
                id = "4"
                name = "Synced bookmarks"
                type = "folder"
            }
        }
        version = 1
    }

    $BookmarkJson | ConvertTo-Json -Depth 10 | Set-Content -Path $BookmarksFile -Encoding UTF8

    Write-Host "Profile '$ProfileDisplayName' created at '$ProfilePath' with shortcut '$ShortcutName' and bookmark '$BookmarkName'."
}

# ================================
# Create Admin profile
# ================================
New-ChromeProfile `
    -ProfileFolderName "admin" `
    -ProfileDisplayName "Admin" `
    -ShortcutName "WxCC Admin.lnk" `
    -BookmarkName "LTRCCT-2966" `
    -BookmarkUrl "https://webexcc-sa.github.io/LTRCCT-2296/"

# ================================
# Create Agent profile
# ================================
New-ChromeProfile `
    -ProfileFolderName "agent" `
    -ProfileDisplayName "Agent" `
    -ShortcutName "WxCC Agent.lnk" `
    -BookmarkName "Agent Desktop" `
    -BookmarkUrl "https://desktop.wxcc-us1.cisco.com/"
```

![profiles](../graphics/overview/term_1.png)

Check the desktop of your lab PC. You should find 2 Chrome shortcuts created - **WxCC Admin** and **WxCC Agent1**


4. Open **WxCC Admin**



<script src='../template_assets/load.js'><script>