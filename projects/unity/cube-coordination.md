---
title: "Cube Coordination"
subtitle: "A unique cooperative puzzle platformer that will test your coordination"
date: "October 24th 2023"
tags: ["Unity", "2D"]
bannerImage: "/Images/Cube_coordination_SS_Game_Over.png"
social: [{ name : "github", link: "https://github.com/VishalJangid123/cube-coordination"}]
---

# Demo

<div className="w-full sm:container sm:flex sm:justify-center">
<iframe frameborder="0" src="https://itch.io/embed/2326212" width="552" height="167">
<a href="https://vishaljangid123.itch.io/cube-coordination">Cube Coordination by vishaljangid123</a></iframe>
</div>

Cubed Coordination is a 2D cooperative puzzle platformer built using the Unity game development engine. The game leverages the Unity physics engine for realistic cube movements and interactions with the environment. The dynamic gameplay revolves around controlling two cubes simultaneously, each moving in opposite directions on a single screen.

### Concept

#### Player

![images/Player](/Images/Cube_coordination_player.png)

 <CustomImage urls="" />

### Key Technical Features

#### Rigidbody2D Physics
The game's core movement mechanics are powered by Unity's Rigidbody2D component, providing realistic physics-based interactions for the cubes.

#### Object-Oriented Programming (OOP)
The game follows OOP principles, with a modular structure for cube control, allowing easy extension for potential future features.

#### CanvasGroup Alpha Tweens
The script incorporates CanvasGroup alpha tweens for smooth fading effects during certain interactions, enhancing the overall visual experience.

```
public static IEnumerator FadeCanvasGroup(CanvasGroup canvasGroup, float targetAlpha, float duration)
    {
        if (canvasGroup == null)
        {
            UnityEngine.Debug.LogWarning("CanvasGroup is null.");
            yield return null;
        }

        canvasGroup.interactable = false;
        canvasGroup.blocksRaycasts = false;

        float elapsedTime = 0f;
        float startAlpha = canvasGroup.alpha;

        while (elapsedTime < duration)
        {
            elapsedTime += Time.deltaTime;
            canvasGroup.alpha = Mathf.Lerp(startAlpha, targetAlpha, elapsedTime / duration);
            if (elapsedTime >= duration)
            {
                canvasGroup.alpha = targetAlpha;
                canvasGroup.interactable = targetAlpha > 0;
                canvasGroup.blocksRaycasts = targetAlpha > 0;
            }
            yield return null;
        }
    }
```

#### Dynamic Level Design
Cubed Coordination features dynamically designed levels with various obstacles, puzzles, and interactive elements to challenge players and encourage teamwork.

#### User Interface (UI)
A minimalist UI provides essential information to players.

<CustomImage urls="/Images/Cube_coordination_SS_MainMenu.png,/Images/Cube_coordination_SS_Levels.png,/Images/Cube_coordination_SS_Game_Over.png,/Images/Cube_coordination_SS_Level_Complete.png">

#### Tag-Based Collision System
The collision system utilizes Unity's tag system for platform differentiation, allowing distinct interactions based on platform type.

#### PlayerPrefs Storage
The PlayerPrefs system is employed to store and retrieve volume status, current level and best time for particular level.

#### Smooth Rotation Script
The SmoothRotation script uses quaternion rotations and Time.deltaTime to smoothly rotate game objects on their Z-axis with customizable speed and intervals.