---
title: Introduction to Prometheus project
description: A guide in my new Starlight docs site.
---

## Overview
**Prometheus** is a sophisticated C++ evolutionary game that demonstrates the power of artificial intelligence through natural selection. Built with RayLib and compiled to WebAssembly (WASM), this browser-based simulation showcases how simple agents can evolve complex behaviors to solve navigation challenges.

## 🎯 Core Concept
The game simulates the evolution of ant populations whose singular goal is to reach a colored flag (their "paradise") as quickly as possible. Through successive generations, these digital creatures develop increasingly sophisticated navigation strategies using neural networks that evolve both their structure and weights.

## 🧠 NEAT Algorithm Implementation
At the heart of Prometheus lies the **NEAT (NeuroEvolution of Augmenting Topologies)** algorithm, implementing all core features:

### Complete NEAT Features
- **Speciation**: Ants are grouped into species based on genetic similarity
- **Crossover**: Sexual reproduction between successful individuals
- **Mutation**: Random changes to both network weights and topology
- **Topology Evolution**: Networks can grow more complex over generations
- **Innovation Numbers**: Proper gene alignment during crossover

### Population Dynamics
- **Default Population**: 1,000 ants per generation
- **Adjustable Size**: Population can be modified in real-time
- **Separate Evolution**: Multiple populations evolve independently
- **Time-based Evaluation**: Fitness calculated based on frame-by-frame performance

## 🤖 Ant Intelligence System

### Sensory Input (30 Rays)
Each ant perceives its environment through a sophisticated raycasting system:
- **Ray Count**: 30 rays cast from the ant's position
- **Ray Direction**: Aligned with the ant's current facing angle
- **Detection**: Measures distance to nearest obstacle in each direction
- **Real-time Processing**: Updated every frame for dynamic perception

### Neural Network Output
The evolved neural networks control two critical behaviors:
- **Turning Angle**: How much the ant rotates each frame
- **Speed**: Forward velocity for movement

### Survival Mechanics
- **Instant Death**: Contact with walls results in immediate elimination
- **No Collision**: Ants pass through each other without interaction
- **Fitness Goal**: Reach the flag in minimum time

## 🌍 Environment Design

### Obstacle System
- **Static Walls**: Fixed barriers that define the maze
- **Interactive Design**: Users can draw or remove walls in real-time
- **Collision Detection**: Precise hit detection for survival mechanics

### Navigation Challenge
- **Single Objective**: Reach the colored flag (paradise)
- **Time Pressure**: Faster completion yields higher fitness
- **Environmental Complexity**: User-designed mazes of varying difficulty

## 📊 Real-time Visualization & Analytics

### Live Monitoring
- **Fitness Graphs**: Track population performance over generations
- **Neural Topology Display**: Visualize network structure evolution
- **Evolutionary Metrics**: Monitor species diversity and innovation

### Interactive Controls
- **Parameter Adjustment**: Modify simulation settings during runtime
- **Environment Editing**: Add/remove obstacles while simulation runs
- **Population Management**: Adjust population size dynamically

## 🌐 Technical Implementation

### Cross-Platform Accessibility
- **WebAssembly Compilation**: C++ code compiled to WASM
- **Browser-based**: No installation required, runs in any modern browser
- **RayLib Graphics**: Efficient 2D rendering for smooth simulation
- **Real-time Performance**: Optimized for handling 1,000+ agents simultaneously

### Architecture Benefits
- **Native Performance**: Near-native C++ speed in browsers
- **Universal Access**: Platform-independent execution
- **Scalable Design**: Handles large populations efficiently

## 🔬 Scientific Value

Prometheus serves as both an entertaining demonstration and a serious exploration of:
- **Emergent Behavior**: How simple rules create complex navigation strategies
- **Evolutionary Computation**: Practical application of genetic algorithms
- **Neural Network Evolution**: Dynamic topology optimization
- **Artificial Life**: Simulation of natural selection principles

## 🎮 User Experience

The simulation provides an engaging way to observe evolution in action, where users can:
- Design custom maze environments
- Watch populations adapt to challenges
- Observe the emergence of successful strategies
- Experiment with different evolutionary parameters

*Experience the fascinating process of digital evolution as virtual ants develop increasingly sophisticated survival strategies in their quest for paradise.*