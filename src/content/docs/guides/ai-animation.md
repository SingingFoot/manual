---
title: AI animation
---

## Several examples of AI generated animations

I asked ChatGPT to write me this code below to get a short infinite animation. 

<details>
  <summary>See the code</summary>

```css
<div style="width: 610px; height: 200px; position: relative; overflow: hidden;">
  <div class="frame" style="width: 100%; height: 100%; position: absolute;">
    <div class="train" style="width: 62px; height: 16px; position: absolute; filter: blur(4.5px) hue-rotate(340deg); mix-blend-mode: exclusion; left: -54px; animation: trainMovement1 8s ease infinite; background-color: blue; top: calc(50% - 50px);"></div>
    <div class="train" style="width: 43px; height: 16px; position: absolute; filter: blur(1.9px); mix-blend-mode: exclusion; left: -52px; animation: trainMovement2 11s cubic-bezier(0.0, -0.6, 0.4, 1.3) infinite; background-color: grey; top: calc(50% - 25px); animation-delay: 0.9s;"></div>
    <div class="train" style="width: 53px; height: 14px; position: absolute; filter: blur(1.8px); mix-blend-mode: exclusion; left: -63px; animation: trainMovement3 7s cubic-bezier(0.0, -0.9, 0.6, 0.5)  infinite; background-color: lightblue; top: calc(50% - 7.5px); animation-delay: 1.4s;"></div>
    <div class="train" style="width: 60px; height: 15px; position: absolute; filter: blur(4.9px); mix-blend-mode: exclusion; left: -85px; animation: trainMovement4 8s linear infinite; background-color: lightpink; top: calc(50% + 10px); animation-delay: 1.6s;"></div>
    <div class="train" style="width: 65px; height: 13px; position: absolute; filter: blur(2.5px); mix-blend-mode: exclusion; left: -60px; animation: trainMovement5 10s cubic-bezier(0.0, -0.6, 0.2, 1.0) infinite; background-color: lightgreen; top: calc(50% + 27.5px); animation-delay: 0.1s;"></div>
  </div>

  <style>
    @keyframes trainMovement1 {
      0% {
        transform: translateX(-150px);
      }
      100% {
        transform: translateX(680px);
      }
    }
    
    @keyframes trainMovement2 {
      0% {
        transform: translateX(-150px);
      }
      100% {
        transform: translateX(680px);
      }
    }
    
    @keyframes trainMovement3 {
      0% {
        transform: translateX(-150px);
      }
      100% {
        transform: translateX(680px);
      }
    }
    
    @keyframes trainMovement4 {
      0% {
        transform: translateX(-150px);
      }
      100% {
        transform: translateX(680px);
      }
    }
    
    @keyframes trainMovement5 {
      0% {
        transform: translateX(-150px);
      }
    
      100% {
        transform: translateX(680px);
      }
    }
  </style>
</div>
```
</details>

The result came not from the first try and I had to modify the code many times, but I would say it really saves my time when it comes about some complicated structures.

<div style="width: 610px; height: 200px; position: relative; overflow: hidden;">
  <div class="frame" style="width: 100%; height: 100%; position: absolute;">
    <div class="train" style="width: 62px; height: 16px; position: absolute; filter: blur(4.5px) hue-rotate(340deg); mix-blend-mode: exclusion; left: -54px; animation: trainMovement1 8s ease infinite; background-color: blue; top: calc(50% - 50px);"></div>
    <div class="train" style="width: 43px; height: 16px; position: absolute; filter: blur(1.9px); mix-blend-mode: exclusion; left: -52px; animation: trainMovement2 11s cubic-bezier(0.0, -0.6, 0.4, 1.3) infinite; background-color: grey; top: calc(50% - 25px); animation-delay: 0.9s;"></div>
    <div class="train" style="width: 53px; height: 14px; position: absolute; filter: blur(1.8px); mix-blend-mode: exclusion; left: -63px; animation: trainMovement3 7s cubic-bezier(0.0, -0.9, 0.6, 0.5)  infinite; background-color: lightblue; top: calc(50% - 7.5px); animation-delay: 1.4s;"></div>
    <div class="train" style="width: 60px; height: 15px; position: absolute; filter: blur(4.9px); mix-blend-mode: exclusion; left: -85px; animation: trainMovement4 8s linear infinite; background-color: lightpink; top: calc(50% + 10px); animation-delay: 1.6s;"></div>
    <div class="train" style="width: 65px; height: 13px; position: absolute; filter: blur(2.5px); mix-blend-mode: exclusion; left: -60px; animation: trainMovement5 10s cubic-bezier(0.0, -0.6, 0.2, 1.0) infinite; background-color: lightgreen; top: calc(50% + 27.5px); animation-delay: 0.1s;"></div>
  </div>

  <style>
    @keyframes trainMovement1 {
      0% {
        transform: translateX(-150px);
      }
      100% {
        transform: translateX(680px);
      }
    }
    
    @keyframes trainMovement2 {
      0% {
        transform: translateX(-150px);
      }
      100% {
        transform: translateX(680px);
      }
    }
    
    @keyframes trainMovement3 {
      0% {
        transform: translateX(-150px);
      }
      100% {
        transform: translateX(680px);
      }
    }
    
    @keyframes trainMovement4 {
      0% {
        transform: translateX(-150px);
      }
      100% {
        transform: translateX(680px);
      }
    }
    
    @keyframes trainMovement5 {
      0% {
        transform: translateX(-150px);
      }
    
      100% {
        transform: translateX(680px);
      }
    }
  </style>
</div>