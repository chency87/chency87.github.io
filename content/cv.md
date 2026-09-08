---
# CV entries are maintained independently from About.
title: CV
layout: cv
description: Chunyu Chen’s CV — publications, projects, work experience, education, skills, courses, awards, teaching, and contact
  information.
use_home_data: false
section_order:
- connections
- education
- skills
- courses
- publications
- projects
- experience
- teaching
- awards

# Nodes can use name only. Edges may reference either id or name, with an optional label.
# Node positions are auto-laid out when x/y are omitted. URLs are optional.
# Optional color accepts a CSS color (quote hex values). If omitted, color is auto-assigned.
connections:
  width: 640
  height: 280
  nodes:
  - name: Chunyu Chen
    primary: true
  - name: Jiannan Wang
    url: https://dbgroup.cs.tsinghua.edu.cn/jnwang/
  - name: Zhengjie Miao
    url: https://www.miaozhengjie.com/
  - name: Xinyi Huang
    url: "https://link-failed.github.io/"
  edges:
  - from: Chunyu Chen
    to: Jiannan Wang
    label: Co-supervisor
  - from: Chunyu Chen
    to: Zhengjie Miao
    label: Co-supervisor
  - from: Chunyu Chen
    to: Xinyi Huang
    label: Classmate
projects:
- title: ParSEval
  summary: Plan-aware test database generation for SQL equivalence evaluation. Interactive counterexamples support
    the evaluation of Text-to-SQL systems.
- title: dataprep.ai
  summary: Python tools for collecting, cleaning, and visualizing data with concise workflows.

education:
- degree: Ph.D. in Computing Science
  institution: Simon Fraser University
  dates: 2021–Present
- degree: Master's in Software Engineering
  institution: Northeastern University
  dates: 2015–2018
- degree: Bachelor's in Information Security
  institution: Northeastern University
  dates: 2011–2015
publications:
- title: '**ParSEval: Interactive Counterexample-driven Evaluation for Text-to-SQL**'
  authors: '**Chunyu Chen**, Zhengjie Miao, Yong Zhang, Jiannan Wang'
  venue: '***VLDB 2026 (Demo)**, Boston, MA, USA*'
- title: '**BQSched+: A generalizable RL-based scheduler for varying batch concurrent queries**'
  authors: Chenhao Xu, **Chunyu Chen**, Jinglin Peng, Jun Gao, Jiannan Wang
  venue: '***The VLDB Journal 2026***'
- title: '**ParSEval: Plan-aware Test Database Generation for SQL Equivalence Evaluation**'
  authors: '**Chunyu Chen**, Zhengjie Miao, Yong Zhang, Jiannan Wang'
  venue: '*VLDB 2025*'
- title: '**BQSched: A Non-Intrusive Scheduler for Batch Concurrent Queries via Reinforcement Learning**'
  authors: Chenhao Xu, **Chunyu Chen**, Jinglin Peng, Jun Gao, Jiannan Wang
  venue: '*ICDE 2024*'
- title: '**EVE-Bench: Diagnostic Evaluation of LLMs’ Capabilities in SQL Reasoning**'
  authors: Xinyi Huang **^\*^**, **Chunyu Chen ^\*^**, Zhengjie Miao
- title: Privacy-Preserving Publicly Verifiable Databases
  authors: Q. Wang, F. Zhou, B. Zhou, J. Xu, **Chunyu Chen**, et al.
  venue: IEEE Transactions on Dependable and Secure Computing
experience:
- role: Research Assistant
  organization: Shenyang Institute of Automation, Chinese Academy of Sciences
  dates: 2018–2021
  summary: Developed industrial control and edge computing security systems, protocol fuzzing tools, and anomaly
    detection models. Led gateway development, coordinated requirements with collaborators, and provided technical
    guidance to students.
teaching:
- role: Teaching Assistant
  organization: CMPT 733 · Simon Fraser University
  dates: Spring 2025
- role: Teaching Assistant
  organization: CMPT 354 · Simon Fraser University
  dates: Spring 2022
projects_heading: Projects
skills:
- category: Programming
  items:
  - Python
  - SQL  
  - Java
- category: Security
  items:  
  - Protocol fuzzing
  - Crypto  
courses:
- Database
awards:
  - title: SFU GF + CMPT CS GF
    dates:  "Fall 2022 & Fall 2021 & Fall 2023"
  
# - title: Excellent Award in New Staff Tutor System Level Assessment
#   organization: Shenyang Institute of Automation, Chinese Academy of Sciences
#   dates: '2019'
# - title: First Prize Academic Scholarship
#   dates: September 2015 and September 2016
# - title: Yantai Governance Scholarship
#   dates: November 2016
# - title: Second Prize Scholarship
#   organization: Software School, Northeastern University
#   dates: September 2014
# - title: Second Prize, 7th National Student Information Security Competition
#   dates: July 2014
# - title: Meritorious Winner, Mathematical Contest in Modeling
#   dates: April 2014
# - title: Second Prize, China Undergraduate Mathematical Contest in Modeling
#   dates: October 2013
# - title: Science and Technology Innovation Activity Award
#   dates: June 2013
---
