Welcome to setup instructions for locally hosting this website

Generic guide:
[guide](https://www.geeksforgeeks.org/how-to-install-reactjs-on-windows/)

Specific details:
- Generic guide to install Node.js, fnm and NPM: 
  [link to guide](https://nodejs.org/en/download/package-manager)
- Install fnm steps:
  - installs fnm (Fast Node Manager) <br>
  ```winget install Schniz.fnm```
  - Open WindowsPowershell as admin, and ensure that you can run  
  <br>
  ```if (!(Test-Path -Path $PROFILE)) {New-Item -ItemType File -Path $PROFILE -Force```
  <br>[link to guide](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_profiles?view=powershell-7.4#how-to-create-a-profile/)

  - Enter the notepad using<br>
   ```notepad $profile```
  - And enter the following into the notepad and save.
  ``` fnm env --use-on-cd | Out-String | Invoke-Expression``` error here when reproducing
  - fnm -v should work now.
- Download and install Node.js:
  ```fnm use --install-if-missing 20```
  - Verify the right Node.js version is in the environment
  ``` node -v # should print `v20.15.1` ```
  # verifies the right NPM version is in the environment
  ``` npm -v # should print `10.7.0` ```
