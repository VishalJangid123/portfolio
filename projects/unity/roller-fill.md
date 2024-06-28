---
title: "Roller Fill"
subtitle: "Guide your ball through colorful puzzles, filling paths with vibrant hues to progress."
date: "Jan 29 2021"
tags: ["Unity", "2D", "Puzzle", "Mobile games"]
bannerImage: "/Images/Roller_fill_banner.png"
social: [{ name : "github", link: "https://github.com/VishalJangid123/Roller-Fill"}, { name : "youtube", link: "https://www.youtube.com/shorts/RxNguwY8Uc0"}]
---

# Roller Fill: A Vibrant Maze Painting Game

<a href="https://www.youtube.com/shorts/RxNguwY8Uc0" target="_blank" > See working demo on Youtube </a>
---

### Introduction

Hey there! Welcome to the colorful world of **Roller Fill**! Imagine taking the satisfying act of painting and combining it with the fun of navigating a maze. That’s exactly what I set out to create with this game, inspired by the popular **Roller Splat**. Let me take you on a journey through the creation of **Roller Fill** and share some of the fun (and challenges) I experienced along the way.

---

### Project Overview

**What’s the Big Idea?**

So, the idea for **Roller Fill** popped into my head while I was playing **Roller Splat**. I thought, "Hey, wouldn’t it be awesome to create my own version with some unique twists?" The goal is simple: swipe to move your vibrant paintball through a maze, covering every white corridor and corner with bright, beautiful paint. It’s like those coloring books we loved as kids but with a puzzle twist!

<img  src="/portfolio/Images/Roller_fill_banner_copy.png">


**Inspiration:**

Inspired by the addictive fun of **Roller Splat**, I decided to put my own spin on the concept, adding more vibrant visuals and some extra challenges to keep things interesting.

---

### Development Process

**From Concept to Prototype:**

The **BallController** script manages the behavior of a ball in a game. It handles the ball's movement based on player swipes, playing a sound when the ball moves, and changing the color of the ground as the ball rolls over it. When the game starts, it sets up the ball's initial color and components. The script constantly checks for swipes, calculates the direction, and moves the ball accordingly, while ensuring it stops when it reaches its destination.

As the level starts:

- Finds All Ground Pieces: It retrieves all objects in the scene that have a `GroundSectionController` component and stores them in `_groundPieces`.
- Sets Random Ground Color: It generates a random color and assigns it to the material of each ground piece.

In the game, the floor is made up of quad pieces that can change color. When the ball rolls over these pieces, they change to the ball's color. The ball moves based on player swipes, and the script attached to the floor pieces ensures they change color when the ball passes over them using colliders.

![Roller Fill.drawio.png](/portfolio/Images/Roller_Fill.drawio.png)

---

### Key Features and Innovations

**Satisfying Gameplay:**

The core of the game is simple but oh-so-satisfying: paint the entire maze. The swiping controls make it easy to pick up, but the challenges will keep you hooked.

**Vibrant Visuals:**

I went all out on the visuals. The mazes start off as a clean white canvas, and it's your job to fill them with bright, beautiful paint. Watching the paint spread and cover every corner is just so satisfying.

---

### Level Breakdown

**Early Levels:**

The first few levels are all about getting you used to the controls and the game mechanics. Simple mazes with clear paths help you get the hang of things.

**Intermediate Levels:**

As you progress, the mazes get trickier. You’ll need to think a bit more strategically to cover every spot with paint.

**Advanced Levels:**

The final levels are where the real fun begins. Complex mazes with multiple paths will test your skills and your patience. But hey, the satisfaction of completing them is totally worth it!

**Images:**

![Level 1 : Roller Fill](/portfolio/Images/Roller_fill_SS_1.png)
![Level 2 : Roller Fill](/portfolio/Images/Roller_fill_SS_2.png)
![Level 3 : Roller Fill](/portfolio/Images/Roller_fill_SS_3.png)

---

### Technical Details

* **Game Engine**: Unity
* **Programming Language**: C#
* **Version Control** : Git
