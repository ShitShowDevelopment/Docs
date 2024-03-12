---
title: RAMMap Task Scheduler
layout: page
parent: Scripts
grand_parent: Projects
---

## RAMMap Task Scheduler

Windows batch script to automate creating scheduled tasks for RAMMap


**Instructions**<br />

- Download RAMMap.zip from [here][sysinternals]
- Extract the contained RAMMap.exe file into `C:\RAMMap`. If the `C:\RAMMap` directory doesn't exist, create it.
- Download the [RAMMap-Task-Scheduler.bat][RAMMap-Task-Scheduler] file and place it in a location of your choice.
- Open Windows Command Prompt and add RAMMap to PATH with the following command

```
set PATH=%PATH%;C:\RAMMap
```

[sysinternals]: https://download.sysinternals.com/files/RAMMap.zip

[RAMMap-Task-Scheduler]: https://github.com/TBR-Development/RAMMap-Task-Scheduler/blob/3b8c05714605944536188b3fc68a2b647a366803/RAMMap-Task-Scheduler.bat
