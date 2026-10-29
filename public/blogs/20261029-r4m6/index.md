---
来源: https://linux.do/t/topic/3054536
标题: "社招后端转型 Agent 路径（已落地）"
作者: Neo Lee
分类: 非我莫属
tags:
  - discourse
  - 人工智能
  - 软件开发
  - 职场
  - 求职
  - 夸克网盘
  - cursor
  - aff
  - 抽奖
  - 公告
  - 集中帖
  - 精华神帖
  - 快问快答
  - 原创
保存时间: 2026-10-29 16:39:10
评论数: 0
---

# 社招后端转型 Agent 路径（已落地）

# 背景

定位：中厂后端开发 方向偏传统后端

职级：P6

为什么转 Agent？其实更多来讲是感兴趣更多一些，个人本身是比较偏兴趣驱动型选手的，恰逢和领导的积怨已深，加上在公司也做了几个 Agent 相关的项目，自己也有积累，痛下决心裸辞了。

写这篇帖子是为了记录自己的转型路径和复盘，也留待后来人借鉴，避免走弯路。

# 阵痛期

​ 刚离职的时候我是不知所措的，尽管在离职前做好了详尽的规划，细致到单天每小时我会在做什么这些，但是执行的时候仍然会有一些忧虑，包括对未知的恐惧和找不到更满意工作的担忧。每每这个时候我就会打开自己裸辞前写的，针对前司写的离职原因（一个用四象限写的在这家公司这个部门 这个组的优势 / 劣势 / 成长 / 付出），每次看完我就平静了，因为最后真的不能用烂来说，只能说我再待下去会有腐烂的感觉。

# 补强期（学习路径和资源参考）

先说思路，我个人是针对大部分的 JD，主要以大厂为主，抽取了共性的要求，然后梳理成了各个板块，按优先级和重要性降序，再结合自身项目做排序，最后按照顺序用甘特图进行跟踪。每天、每周、每阶段都会输出一份节点报告（Hermes 定时任务），再进行一定的复盘。

​ 再说学习过程的方法论，我主要参考的是这个方法 MIT 学习，[MIT 学习方法论](https://mp.weixin.qq.com/s?__biz=MzYzMjk0NTU5Mw==&mid=2247506602&idx=1&sn=bc50035053bd397837a35bdfefa8f506&source=41&poc_token=HJsp2GqjYegS-0NRw4_ZdlWPCHpzgTwCy84WGVe8)，主要的思路是找权威资料 → 用 AI 使用 /teach skill 生成 HTML 的方式学习 → 走一遍 HTML → 有重点地看原资料 → AI 反问，啃资料的时候是在输入，AI 反问是为了用输出倒逼输入，检查自己理解的是否正确，这是个建立判断力的过程。

​ 以下是我 3 月按自身的背景结合 JD 做的通用技术栈的相关梳理和排序，通用部分可以参考，也会包含学习材料在里面。

3 月份结合背景使用 AI 拆分的具体计划 - 包含学习资源链接

### 分类：能用但面试深度不够

| 内容 | 当前深度 | 需要补到的深度 |
| --- | --- | --- |
| Python 代码 | 能读能改 | 能独立手写，面试不依赖 AI |
| FastAPI | 能跑通 | 能讲清依赖注入 / 中间件 / 异步机制 |
| MCP Client/Server | 能用 | 能讲清 MCP 协议原理、能独立写 Server |
| LangChain 部分代码 | 看过文档 + Cursor 辅助 | 能独立写 Agent/Tool/Memory |

### 分类：追问风险

| 内容 | 当前深度 | 需要补到的深度 |
| --- | --- | --- |
| LangGraph 意图路由 | 知道存在 | 能从零独立写 LangGraph 工作流 |
| 多 Agent 架构设计 | 看过方案文档 | 能讲清设计原理和选型理由 |
| Agent 分层架构 | 了解结构 | 能讲清为什么这样分层 |

### 完全未覆盖

| 内容 | 需要的深度 |
| --- | --- |
| RAG / 向量数据库 / Embedding | 系统学习 + 项目实战 |
| Spring AI | 基础掌握 |

* * *

## Mermaid 甘特图

​

#mermaid-diagram-3{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#mermaid-diagram-3 .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#mermaid-diagram-3 .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#mermaid-diagram-3 .error-icon{fill:#552222;}#mermaid-diagram-3 .error-text{fill:#552222;stroke:#552222;}#mermaid-diagram-3 .edge-thickness-normal{stroke-width:1px;}#mermaid-diagram-3 .edge-thickness-thick{stroke-width:3.5px;}#mermaid-diagram-3 .edge-pattern-solid{stroke-dasharray:0;}#mermaid-diagram-3 .edge-thickness-invisible{stroke-width:0;fill:none;}#mermaid-diagram-3 .edge-pattern-dashed{stroke-dasharray:3;}#mermaid-diagram-3 .edge-pattern-dotted{stroke-dasharray:2;}#mermaid-diagram-3 .marker{fill:#333333;stroke:#333333;}#mermaid-diagram-3 .marker.cross{stroke:#333333;}#mermaid-diagram-3 svg{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;}#mermaid-diagram-3 p{margin:0;}#mermaid-diagram-3 .mermaid-main-font{font-family:"trebuchet ms",verdana,arial,sans-serif;}#mermaid-diagram-3 .exclude-range{fill:#eeeeee;}#mermaid-diagram-3 .section{stroke:none;opacity:0.2;}#mermaid-diagram-3 .section0{fill:rgba(102, 102, 255, 0.49);}#mermaid-diagram-3 .section2{fill:#fff400;}#mermaid-diagram-3 .section1,#mermaid-diagram-3 .section3{fill:white;opacity:0.2;}#mermaid-diagram-3 .sectionTitle0{fill:#333;}#mermaid-diagram-3 .sectionTitle1{fill:#333;}#mermaid-diagram-3 .sectionTitle2{fill:#333;}#mermaid-diagram-3 .sectionTitle3{fill:#333;}#mermaid-diagram-3 .sectionTitle{text-anchor:start;font-family:"trebuchet ms",verdana,arial,sans-serif;}#mermaid-diagram-3 .grid .tick{stroke:lightgrey;opacity:0.8;shape-rendering:crispEdges;}#mermaid-diagram-3 .grid .tick text{font-family:"trebuchet ms",verdana,arial,sans-serif;fill:#333;}#mermaid-diagram-3 .grid path{stroke-width:0;}#mermaid-diagram-3 .today{fill:none;stroke:red;stroke-width:2px;}#mermaid-diagram-3 .task{stroke-width:2;}#mermaid-diagram-3 .taskText{text-anchor:middle;font-family:"trebuchet ms",verdana,arial,sans-serif;}#mermaid-diagram-3 .taskTextOutsideRight{fill:black;text-anchor:start;font-family:"trebuchet ms",verdana,arial,sans-serif;}#mermaid-diagram-3 .taskTextOutsideLeft{fill:black;text-anchor:end;}#mermaid-diagram-3 .task.clickable{cursor:pointer;}#mermaid-diagram-3 .taskText.clickable{cursor:pointer;fill:#003163!important;font-weight:bold;}#mermaid-diagram-3 .taskTextOutsideLeft.clickable{cursor:pointer;fill:#003163!important;font-weight:bold;}#mermaid-diagram-3 .taskTextOutsideRight.clickable{cursor:pointer;fill:#003163!important;font-weight:bold;}#mermaid-diagram-3 .taskText0,#mermaid-diagram-3 .taskText1,#mermaid-diagram-3 .taskText2,#mermaid-diagram-3 .taskText3{fill:white;}#mermaid-diagram-3 .task0,#mermaid-diagram-3 .task1,#mermaid-diagram-3 .task2,#mermaid-diagram-3 .task3{fill:#8a90dd;stroke:#534fbc;}#mermaid-diagram-3 .taskTextOutside0,#mermaid-diagram-3 .taskTextOutside2{fill:black;}#mermaid-diagram-3 .taskTextOutside1,#mermaid-diagram-3 .taskTextOutside3{fill:black;}#mermaid-diagram-3 .active0,#mermaid-diagram-3 .active1,#mermaid-diagram-3 .active2,#mermaid-diagram-3 .active3{fill:#bfc7ff;stroke:#534fbc;}#mermaid-diagram-3 .activeText0,#mermaid-diagram-3 .activeText1,#mermaid-diagram-3 .activeText2,#mermaid-diagram-3 .activeText3{fill:black!important;}#mermaid-diagram-3 .done0,#mermaid-diagram-3 .done1,#mermaid-diagram-3 .done2,#mermaid-diagram-3 .done3{stroke:grey;fill:lightgrey;stroke-width:2;}#mermaid-diagram-3 .doneText0,#mermaid-diagram-3 .doneText1,#mermaid-diagram-3 .doneText2,#mermaid-diagram-3 .doneText3{fill:black!important;}#mermaid-diagram-3 .doneText0.taskTextOutsideLeft,#mermaid-diagram-3 .doneText0.taskTextOutsideRight,#mermaid-diagram-3 .doneText1.taskTextOutsideLeft,#mermaid-diagram-3 .doneText1.taskTextOutsideRight,#mermaid-diagram-3 .doneText2.taskTextOutsideLeft,#mermaid-diagram-3 .doneText2.taskTextOutsideRight,#mermaid-diagram-3 .doneText3.taskTextOutsideLeft,#mermaid-diagram-3 .doneText3.taskTextOutsideRight{fill:black!important;}#mermaid-diagram-3 .crit0,#mermaid-diagram-3 .crit1,#mermaid-diagram-3 .crit2,#mermaid-diagram-3 .crit3{stroke:#ff8888;fill:red;stroke-width:2;}#mermaid-diagram-3 .activeCrit0,#mermaid-diagram-3 .activeCrit1,#mermaid-diagram-3 .activeCrit2,#mermaid-diagram-3 .activeCrit3{stroke:#ff8888;fill:#bfc7ff;stroke-width:2;}#mermaid-diagram-3 .doneCrit0,#mermaid-diagram-3 .doneCrit1,#mermaid-diagram-3 .doneCrit2,#mermaid-diagram-3 .doneCrit3{stroke:#ff8888;fill:lightgrey;stroke-width:2;cursor:pointer;shape-rendering:crispEdges;}#mermaid-diagram-3 .milestone{transform:rotate(45deg) scale(0.8,0.8);}#mermaid-diagram-3 .milestoneText{font-style:italic;}#mermaid-diagram-3 .doneCritText0,#mermaid-diagram-3 .doneCritText1,#mermaid-diagram-3 .doneCritText2,#mermaid-diagram-3 .doneCritText3{fill:black!important;}#mermaid-diagram-3 .doneCritText0.taskTextOutsideLeft,#mermaid-diagram-3 .doneCritText0.taskTextOutsideRight,#mermaid-diagram-3 .doneCritText1.taskTextOutsideLeft,#mermaid-diagram-3 .doneCritText1.taskTextOutsideRight,#mermaid-diagram-3 .doneCritText2.taskTextOutsideLeft,#mermaid-diagram-3 .doneCritText2.taskTextOutsideRight,#mermaid-diagram-3 .doneCritText3.taskTextOutsideLeft,#mermaid-diagram-3 .doneCritText3.taskTextOutsideRight{fill:black!important;}#mermaid-diagram-3 .vert{stroke:navy;}#mermaid-diagram-3 .vertText{font-size:15px;text-anchor:middle;fill:navy!important;}#mermaid-diagram-3 .activeCritText0,#mermaid-diagram-3 .activeCritText1,#mermaid-diagram-3 .activeCritText2,#mermaid-diagram-3 .activeCritText3{fill:black!important;}#mermaid-diagram-3 .titleText{text-anchor:middle;font-size:18px;fill:#333;font-family:"trebuchet ms",verdana,arial,sans-serif;}#mermaid-diagram-3 .node .neo-node{stroke:#9370DB;}#mermaid-diagram-3 \[data-look="neo"\].node rect,#mermaid-diagram-3 \[data-look="neo"\].cluster rect,#mermaid-diagram-3 \[data-look="neo"\].node polygon{stroke:#9370DB;filter:drop-shadow(1px 2px 2px rgba(185, 185, 185, 1));}#mermaid-diagram-3 \[data-look="neo"\].node path{stroke:#9370DB;stroke-width:1px;}#mermaid-diagram-3 \[data-look="neo"\].node .outer-path{filter:drop-shadow(1px 2px 2px rgba(185, 185, 185, 1));}#mermaid-diagram-3 \[data-look="neo"\].node .neo-line path{stroke:#9370DB;filter:none;}#mermaid-diagram-3 \[data-look="neo"\].node circle{stroke:#9370DB;filter:drop-shadow(1px 2px 2px rgba(185, 185, 185, 1));}#mermaid-diagram-3 \[data-look="neo"\].node circle .state-start{fill:#000000;}#mermaid-diagram-3 \[data-look="neo"\].icon-shape .icon{fill:#9370DB;filter:drop-shadow(1px 2px 2px rgba(185, 185, 185, 1));}#mermaid-diagram-3 \[data-look="neo"\].icon-shape .icon-neo path{stroke:#9370DB;filter:drop-shadow(1px 2px 2px rgba(185, 185, 185, 1));}#mermaid-diagram-3 :root{--mermaid-font-family:"trebuchet ms",verdana,arial,sans-serif;}2026-04-122026-04-192026-04-262026-05-032026-05-102026-05-172026-05-242026-05-312026-06-072026-06-142026-06-21Python 独立编程 Easy+Medium 基础（数组 / 哈希 / 双指针 / 二分） 模型层认知（Attention/Tokenizer/Embedding）Agent 架构模式系统化（Lilian Weng） 独立手写 Python + 系统理解 Agent 模式 LangChain 深化 LangGraph 系统学习（从零重写意图路由） Medium 核心（BFS/DFS/ 树 / DP / 栈 / 链表） FastAPI 核心概念深化 独立写 LangChain + LangGraph 工作流 RAG 技术栈 + 向量数据库实战 高频面试题冲刺 + 模拟 MCP 实现原理 + 独立写 Server RAG + MCP 补齐，可全面投递 多 Agent 设计模式（AutoGen/CrewAI） Spring AI + Context Eng + Agent 评估 项目叙事打磨 + 简历 + 面试准备 全面面试准备就绪 第一阶段：基础巩固（2 周）✅ 里程碑①第二阶段：框架深度掌握（4 周）✅ 里程碑②第三阶段：核心 Gap 补齐（3 周）✅ 里程碑③第四阶段：差异化 + 冲刺（2 周 +）✅ 里程碑④📊 算法刷题（晚间并行）AI Agent 转型学习计划・v4（2026.04.07 起，周末双休）

* * *

## 时间线详细表

### 第一阶段：基础巩固（W1-W2・04/07 - 04/20・10 个工作日）

```plaintext
04/07      04/13  04/15  04/20
|--Python--|模型层|Agent 模式|
|  5 工作日 | 2天  | 3天      |

```

| 日期 | 内容 | 重点说明 | 学习资料链接 |
| --- | --- | --- | --- |
| 04/07 - 04/13 | Python 独立编程练习 | 关掉 Cursor 自动补全。上午 LeetCode Python 版 2-3 题 + 下午用 Python 重写你熟悉的 Java 工具类。重点练：asyncio、装饰器、类型提示、列表推导、异常处理。 | [Python 教程 — Python 3.14.9 文档](https://docs.python.org/zh-cn/3.14/tutorial/index.html) [简介 - Python 教程 - 廖雪峰的官方网站](https://liaoxuefeng.com/books/python/introduction/index.html) |
| 04/14 - 04/15 | 模型层认知 | Attention 机制 + Tokenizer 原理 + Embedding 概念。你在项目中处理过 Token 爆炸，现在补上 "为什么会爆" 的底层原理。 | 3B1B How might LLMs store facts | Deep Learning Chapter 7 [https://www.youtube.com/watch?v=9-Jl0dxWQs8](https://www.youtube.com/watch?v=9-Jl0dxWQs8) 3B1B Transformers, the tech behind LLMs | Deep Learning Chapter 5 [https://www.youtube.com/watch?v=wjZofJX0v4M](https://www.youtube.com/watch?v=wjZofJX0v4M) 3B1B Attention in transformers, step-by-step | Deep Learning Chapter 6 [https://www.youtube.com/watch?v=eMlx5fFNoYc](https://www.youtube.com/watch?v=eMlx5fFNoYc&t) Anthropic [https://transformer-circuits.pub/2021/framework/index.html](https://transformer-circuits.pub/2021/framework/index.html) [Andrej Karpathy](https://www.youtube.com/@AndrejKarpathy) [https://www.youtube.com/watch?v=zduSFxRajkE](https://www.youtube.com/watch?v=zduSFxRajkE) |
| 04/16 - 04/20 | Agent 架构模式系统化 | 读 Lilian Weng 博客。你深入了 ReAct，但需要了解 Plan-and-Execute、CoT、Function Calling 等其他模式，面试高频问 " 为什么选 ReAct 不选其他 "。 | [LLM Powered Autonomous Agents | Lil'Log](https://lilianweng.github.io/posts/2023-06-23-agent/) |

> **晚间**：算法刷题 1h（Easy 基础题，用 Python 写）

* * *

### 第二阶段：框架深度掌握（W3-W6・04/21 - 05/14・18 个工作日）

```plaintext
04/21      04/27  04/28              05/11  05/14
|LangChain-|      |-----LangGraph-----|Fast|
| 5 工作日  |      |   10 工作日       |API |
| 脱AI     |      |  从零重写路由      |3天 |

```

| 日期 | 内容 | 重点说明 | 学习资料链接 |
| --- | --- | --- | --- |
| 后加 | Nano Agent | 不依赖 AI，手写最小 Agent，理解一个最小 Agent 是怎么做的，内部核心运行流程是什么，这里是为了对骨架有个更深刻的认识，建立一个直觉，方便后续对框架帮你吃掉了什么事情有更好的理解 | [GitHub - sanbuphy/nanoAgent: If you can read ~100 lines of Python, you understand agents. · GitHub](https://github.com/sanbuphy/nanoAgent) [Learn Claude Code](https://learn.shareai.run/zh/s01/) |
| 04/21 - 04/27 | LangChain 深化 | 不依赖 AI，手写：创建 Agent、定义 Tool（ [@tool](https://linux.do/u/tool) 和 StructuredTool）、配置 Memory（Buffer/Summary/Window）、写 Callback。 关掉 AI 辅助，从零写一个带工具调用的 Agent。 | [LangChain overview - Docs by LangChain](https://docs.langchain.com/oss/python/langchain/overview) |
| 04/28 - 05/11 | LangGraph 系统学习 | 最重要的学习项。先学概念（StateGraph / 节点 / 边 / 条件路由 /checkpointer），然后关键练习：不看原代码，自己从零用 LangGraph 重写项目中的意图路由系统。做到了就说明真学会了。 | [LangGraph overview - Docs by LangChain](https://docs.langchain.com/oss/python/langgraph/overview) 安装 Langchain 官方的 Skill 以及 使用 LangSmith 进行 trace 追踪 |
| 05/12 - 05/14 | FastAPI 核心概念 | 重点理解依赖注入、中间件、异步路由、Pydantic 模型。对比 Spring Boot 学（你最熟的框架）。面试可能问 "FastAPI 和 Spring Boot 的区别"。 | [FastAPI - FastAPI](https://fastapi.tiangolo.com/zh/) |

> **05/14 里程碑**：能独立写 LangChain Agent + LangGraph 工作流。

* * *

### 第三阶段：核心 Gap 补齐（W7-W9・05/15 - 06/02・13 个工作日）

```plaintext
05/15                05/28  06/02
|-----RAG 技术栈------|MCP |
|   10 工作日         |原理|
|   含项目实战         |3天 |

```

| 日期 | 内容 | 重点说明 | 学习资料链接 |
| --- | --- | --- | --- |
| 05/15 - 05/28 | RAG 技术栈 | 包括：文档切分策略、Embedding 模型选择、向量数据库（Chroma → Milvus）、检索策略、RAG Pipeline。做一个金融文档知识库问答项目。重点是项目过程中的优化，从文档怎么切分，到 Embedding 模型怎么选，再到不同的检索策略怎么决策、优化，最后看 RAG 是怎么做评估的。 | [LLM Powered Autonomous Agents | Lil'Log](https://lilianweng.github.io/posts/2023-06-23-agent/#maximum-inner-product-search-mips) [Advanced RAG Cheat Sheet And Recipes Guide | LlamaIndex](https://www.llamaindex.ai/blog/a-cheat-sheet-and-some-recipes-for-building-advanced-rag-803a9d94c41b) [Hierarchical Navigable Small Worlds (HNSW) | Pinecone](https://www.pinecone.io/learn/series/faiss/hnsw/) [All-in-RAG | 大模型应用开发实战：RAG 技术全栈指南](https://datawhalechina.github.io/all-in-rag/#/chapter1/01_RAG_intro) |
| 05/29 - 06/02 | MCP 实现原理 | 补理解：JSON-RPC 2.0 协议、stdio transport、tool/resource 定义规范。关掉 AI IDE，自己写一个简单的 MCP Server。 | [MCP 协议：AI 时代的上下文集成革命 – MCP 中文站（Model Context Protocol 中文）](https://mcpcn.com/docs/introduction/) [mcp-for-beginners/translations/zh-CN/README.md at main · microsoft/mcp-for-beginners · GitHub](https://github.com/microsoft/mcp-for-beginners/blob/main/translations/zh-CN/README.md) [https://guangzhengli.com/blog/zh/model-context-protocol](https://guangzhengli.com/blog/zh/model-context-protocol) |

> **晚间**：算法 1.5h（Medium 核心题型）

> **06/02 里程碑**：RAG + MCP 补齐。**此时可以全面投递简历。**

* * *

### 第四阶段：差异化 + 冲刺（W10-W11・06/03 - 06/19・13 个工作日）

```plaintext
06/03      06/09  06/12  06/19
|多Agent---|Spring|面试准备--|
|设计模式   |+CE   |+简历打磨 |
|5 工作日   |3天   |5 工作日  |

```

| 日期 | 内容 | 重点说明 | 学习资料链接 |
| --- | --- | --- | --- |
| 06/03 - 06/09 | 多 Agent 设计模式 | 学习 Agent 间通信策略、任务分配模式。了解 AutoGen/CrewAI 框架。重新精读方案选型文档，理解四种方案的取舍逻辑 —— 面试一定会问。 | [Multi-agent - Docs by LangChain](https://docs.langchain.com/oss/python/langchain/multi-agent/index) |
| 06/10 - 06/12 | Spring AI + Context Eng + Agent 评估 | Spring AI 2 天（你的差异化）+ Manus 博客 + LangSmith 评测深化。 |  |
| 06/15 - 06/19 | 面试准备 | 项目叙事打磨（区分 "自己做的" 和 "团队协作的"）+ 简历关键词优化 + 模拟面试 + 重点岗位冲刺投递。 |  |

> **晚间**：算法 1.5h（高频面试原题 + 限时模拟）

* * *

## 关键里程碑

```plaintext
04/07     04/20      05/14       06/02      06/19
  |         |          |           |          |
  ▼         ▼          ▼           ▼          ▼
开始      里程碑①    里程碑②     里程碑③    里程碑④
         Python+     框架掌握    RAG补齐    全面就绪
         Agent模式   可讲清项目   可全面投递  冲刺面试

```

| 里程碑 | 目标日期 | 距起始 | 能力标志 |
| --- | --- | --- | --- |
| ① 基础巩固 | 04/20 | 2 周 | 能独立手写 Python + 系统理解 Agent 架构模式 |
| ② 框架掌握 | 05/14 | 5.5 周 | 能独立写 LangChain Agent + LangGraph 工作流（项目中别人写的部分你也能写了） |
| ③ RAG 补齐 | 06/02 | 8 周 | RAG + MCP 原理掌握，技术栈全面覆盖，可全面投递 |
| ④ 全面就绪 | 06/19 | 10.5 周 | 多 Agent 设计 + 差异化 + 面试叙事准备完成 |

* * *

## 算法刷题计划（晚间并行・全程 11 周）

> 策略：每天 2 题，用 **Python** 编写（一石二鸟 —— 练算法 + 练 Python 手感）。  
> 目标：约 **110 题**，达到 LeetCode Medium 稳定 AC。

### 三阶段分布

| 阶段 | 时间 | 题型重点 | 目标题数 | 关键题型 |
| --- | --- | --- | --- | --- |
| Easy+Medium 基础 | W1-W4（18 天） | 数组、哈希表、字符串、双指针、滑动窗口、二分查找 | ~36 题 | 两数之和、三数之和、有效字母异位词、最长无重复子串、二分查找变种 |
| Medium 核心 | W5-W7（18 天） | BFS/DFS、二叉树、链表、栈 / 队列、动态规划基础 | ~36 题 | 二叉树层序遍历、岛屿数量、反转链表、有效括号、爬楼梯、最长子序列 |
| 高频冲刺 | W8-W11（18 天） | 高频面试原题、Medium-Hard、限时模拟 | ~36 题 | LeetCode Hot 100 精选、按公司标签刷题（字节 / 腾讯） |

### 刷题资源推荐

| 资源 | 用途 |
| --- | --- |
| [LeetCode Hot 100](https://leetcode.cn/studyplan/top-100-liked/) | 高频题目集，覆盖面试核心 |
| [代码随想录](https://programmercarl.com/) | 系统化分类讲解，适合复习 |
| [NeetCode 150](https://neetcode.io/) | 按题型分组，配视频讲解 |

### 面试算法考察预期

| 公司类型 | 考不考算法 | 难度 | 你的目标岗位 |
| --- | --- | --- | --- |
| 大厂（字节 / 腾讯 / 小红书 / 美团） | 必考 | Medium 为主 | 腾讯 Agent 后台、小红书 Agent 工程师 |
| 中大型上市公司 | 大概率考 | Medium 为主 | 奇富科技、富途证券、金蝶 |
| 中小型 / 创业公司 | 部分考 | Easy-Medium | 逸文科技、滴普科技 |
| 金融公司（非互联网） | 不一定 | 偏项目和系统设计 | 和泰人寿、联储证券 |

* * *

## 每日学习节奏（全日制・三轨并行）

| 时间段 | 安排 | 时长 |
| --- | --- | --- |
| 09:00 - 09:20 | 三层递进法：心智模型 / 分歧点 / 深度测试 | 20 min |
| 09:20 - 12:00 | Agent 方向核心学习（文档 / 课程 + 代码实践） | 2h40min |
| 12:00 - 13:30 | 午休 + 碎片化阅读 | — |
| 13:30 - 17:30 | Agent 方向项目实践 / 代码练习 | 4h |
| 17:30 - 18:30 | 复盘总结 + 笔记整理 | 1h |
| 18:30 - 19:30 | 晚饭 + 休息 | — |
| 19:30 - 21:00 | 算法刷题（Python，每天 2 题） | 1.5h |
| 周六、周日 | 完全休息 | 不安排强制学习任务 |

> 白天 8h Agent（65%）+ 晚间 1.5h 算法（15%）+ 复盘笔记 1h（10%）。  
> 面试时没有 Cursor，学习时也尽量关掉。

* * *

## 投递策略

| 时间点 | Agent 方向 |
| --- | --- |
| 04/20（W2） | 小范围试水 Agent 岗位 |
| 05/14（W5.5） | 中等范围投 Agent |
| 06/02（W8） | 全面投 Agent |
| 06/15（W10） | 重点冲刺 Agent |

> **最理想的结果**：Agent 方向拿到满意 offer。

* * *

## 补充

​ 这部分主要补充的是在面试后期时查缺补漏的学习资源，按模块进行划分。

| 内容 | 重点说明 | 学习资料链接 |
| --- | --- | --- |
| 记忆 | 包括：短期记忆、长期记忆、场景记忆 | [LLM Powered Autonomous Agents | Lil'Log](https://lilianweng.github.io/posts/2023-06-23-agent/#types-of-memory) |
| Skill | Skill 相关的内容，定义、原理 | [第 7 章：Skills — 可复用的 Agent 能力包 — Deep Agents 实战](https://datawhalechina.github.io/deepagents-in-action/chapters/ch07-skills/) [Agent Skills Overview - Agent Skills](https://agentskills.io/home) |
| RAG 索引相关 | 索引选型 | [Hierarchical Navigable Small Worlds (HNSW) | Pinecone](https://www.pinecone.io/learn/series/faiss/hnsw/) [https://milvus.io/docs/zh/ivf-flat.md](https://milvus.io/docs/zh/ivf-flat.md) [https://milvus.io/docs/zh/ivf-pq.md](https://milvus.io/docs/zh/ivf-pq.md) |
| 理解性综合专业书 | 李博杰的深入理解 AI Agent：设计原理与工程实践，是一本很好的能把散落知识点串起来的一本书，如果一开始准备的时候能读到这本书，会节省我很多时间 | [GitHub - bojieli/ai-agent-book: 《深入理解 AI Agent：设计原理与工程实践》（李博杰 著）开源主仓库：全书正文、编译版 PDF 与按章配套代码・GitHub](https://github.com/bojieli/ai-agent-book) |

# 补充 - 复盘后的从零学习路线

  
\*\*\[2026-10-22\] 二编，补充了思考后觉得较优的学习路线，各位佬自取，祝大家都能够找到满意的工作～\*\*

**应评论区部分佬友需要从零开始的学习路线，按照有后端基础，从零开始学 Agent 的前提来组合，学习顺序依次从上到下顺序执行，佬友们可以结合自身实际进行合理规划。**

| 模块 | 重点说明 | 学习资料链接 |
| --- | --- | --- |
| Agent 整体认知 | 目的是为了建立对 Agent 的整体认知，知道 Agent 由什么组成，能力来源由哪些模块赋予，心里大概有个底，后续按模块进行深入学习 | [ai-agent-book/book/chapter1.md at main · bojieli/ai-agent-book · GitHub](https://github.com/bojieli/ai-agent-book/blob/main/book/chapter1.md) |
| 大模型入门 | 目的是建立对大模型的直觉认知，大概知道模型是怎么运行的，内部原理是什么，面试时要求高的厂会考 LLM 自回归原理，包含 Attention、KV Cache，这里先建立起基础认知，走通一次 Prefill 的流程，知道每个环节做什么事即可；顺带提一嘴，这个博主的视频质量很高，信息密度也高，看不懂的时候多看几遍，中途停下来思考推导一下，10 分钟后不懂，不懂的话可以问 AI 进行解释，效率更高 | 3B1B How might LLMs store facts |Deep Learning Chapter 7 [https://www.youtube.com/watch?v=9-Jl0dxWQs8](https://www.youtube.com/watch?v=9-Jl0dxWQs8) 3B1B Transformers, the tech behind LLMs |Deep Learning Chapter 5 [https://www.youtube.com/watch?v=wjZofJX0v4M](https://www.youtube.com/watch?v=wjZofJX0v4M) 3B1B Attention in transformers, step-by-step |Deep Learning Chapter 6 [https://www.youtube.com/watch?v=eMlx5fFNoYc](https://www.youtube.com/watch?v=eMlx5fFNoYc&t) [LLM Visualization](https://bbycroft.net/llm) |
| 大模型进阶【可选】 | 考虑部分佬可能对自我要求比较高，需要深入学习模型知识，学有余力的佬可以进入这部分知识；如果时间紧或对模型要求不高的佬则跳过这部分内容，不会有太大影响，可以作为上岸后深入内容进行学习。 | [llm-course/README.md at main · mlabonne/llm-course · GitHub](https://github.com/mlabonne/llm-course/blob/main/README.md) |
| Nano Agent | 不依赖 AI，手写最小 Agent，理解一个最小 Agent 是怎么做的，内部核心运行流程是什么，这里是为了对骨架有个更深刻的认识，建立一个直觉，方便后续对框架帮你吃掉了什么事情有更好的理解。 | [GitHub - sanbuphy/nanoAgent: If you can read ~100 lines of Python, you understand agents. · GitHub](https://github.com/sanbuphy/nanoAgent) [Learn Claude Code](https://learn.shareai.run/zh/s01/) |
| Agent 推理范式入门 | 已经知道 Agent 是怎么动起来的了，但 Nano Agent 只是使用 while 循环驱动的，问题在于 Agent 是怎么感知到外部的环境变化并执行对应的动作且保持循环的，需要读 ReAct 范式、 Plan & Execute、Workflow Agent 范式之间的差异，面试时会考怎么选，其中 ReAct 是 Agent Loop 的基石，有余力可以读 ReAct 论文 | [LLM Powered Autonomous Agents | Lil'Log](https://lilianweng.github.io/posts/2023-06-23-agent/#self-reflection) [[2210.03629] ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629) |
| MCP 入门和 实现原理 | Nano Agent 中会有简单的 tools，这个时候会对工具有简单的理解，那么从工具开始进入到 Agent 的子模块，通过 MCP 调取外部系统或工具JSON-RPC 2.0 协议、stdio transport、tool/resource 定义规范。关掉 AI IDE，自己写一个简单的 MCP Server。工具设计方面也需要注意思考如何设计一个好的工具，从 name、description、arg 入手 | [ai-agent-book/book/chapter4.md at main · bojieli/ai-agent-book · GitHub](https://github.com/bojieli/ai-agent-book/blob/main/book/chapter4.md) [MCP 协议：AI 时代的上下文集成革命 – MCP 中文站（Model Context Protocol 中文）](https://mcpcn.com/docs/introduction/) [mcp-for-beginners/translations/zh-CN/README.md at main · microsoft/mcp-for-beginners · GitHub](https://github.com/microsoft/mcp-for-beginners/blob/main/translations/zh-CN/README.md) [MCP 终极指南](https://guangzhengli.com/blog/zh/model-context-protocol) |
| 上下文入门 | 读 《深入理解 AI Agent - 第二章 上下文，建议读到 Skills 之前，对上下文有整体的认知，知道其他模块的信息如何进入上下文以及上下文对模型的重要性，为后续学上下文管理手段奠基。这块会读到一些提示词相关的手段和内容，一并把提示词相关的内容放进来 | [ai-agent-book/book/chapter2.md at main · bojieli/ai-agent-book · GitHub](https://github.com/bojieli/ai-agent-book/blob/main/book/chapter2.md) [Prompt Engineering | Lil'Log](https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/) |
| Agent 子模块 - 记忆 | 理解入门，包括：短期记忆、长期记忆、场景记忆。注意理解记忆和上下文的关系 | [LLM Powered Autonomous Agents | Lil'Log](https://lilianweng.github.io/posts/2023-06-23-agent/#types-of-memory) 【读到 RAG 基础前】 [ai-agent-book/book/chapter3.md at main · bojieli/ai-agent-book · GitHub](https://github.com/bojieli/ai-agent-book/blob/main/book/chapter3.md) |
| LangChain 深化 | 目的是熟悉框架，基于前面的步骤已经有了基础的认知，不依赖 AI，手写：创建 Agent、定义 Tool（ [@tool](https://linux.do/u/tool) 和 StructuredTool）、配置 Memory（Buffer/Summary/Window）、写 Callback。 关掉 AI 辅助，从零写一个带工具调用的 Agent。 | [LangChain overview - Docs by LangChain](https://docs.langchain.com/oss/python/langchain/overview) |
| LangGraph 系统学习 | 最重要的学习项。先学概念（StateGraph / 节点 / 边 / 条件路由 /checkpointer），然后逐步拓展到更复杂的 demo。注意理解为什么从 Langchain 迁移到 Langgraph | [LangGraph overview - Docs by LangChain](https://docs.langchain.com/oss/python/langgraph/overview) 安装 Langchain 官方的 Skill 以及 使用 LangSmith 进行 trace 追踪 |
| LangGraph 记忆 | 理解在实际项目中记忆如何注入，如何管理 | [Memory - Docs by LangChain](https://docs.langchain.com/oss/python/langgraph/add-memory) |
| Langgraph 项目 | 这里最好写一个贴合公司业务的项目或开源项目，跑起来观察实际 Agent 如何运行；读取其中针对关于某些 Agent 模块部分的设计，比如上下文如何管理的、工具怎么设计的，面试会考场景题，如给定上下文（情景）前提下你如何设计一个符合诉求的工具；阅读源码推荐 Hermes、Claude Code 泄露的源码；Agent 实战方面没有特别好的项目推荐 |  |
| 上下文工程 | 贴合上面，由实践后自然引出在用 Agent 过程中会遇到的一些问题，比如上下文爆炸（小模型常见）、子 Agent 拆分、上下文压缩管理等 | [Effective context engineering for AI agents \ Anthropic](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents) 让 AI 分析 Claude Code 泄露源码中对 上下文管理的部分，把原理掰给你听 |
| RAG 基础 | 记忆的注入方式天然和 RAG 贴合，二者最终会汇聚到上下文中，被模型 "看" 见 | 【读 RAG 基础部分】 [ai-agent-book/book/chapter3.md at main · bojieli/ai-agent-book · GitHub](https://github.com/bojieli/ai-agent-book/blob/main/book/chapter3.md) |
| RAG 技术栈 | 目的是 RAG 知识实践，包括：文档切分策略、Embedding 模型选择、向量数据库（Chroma → Milvus）、检索策略、RAG Pipeline。做一个金融文档知识库问答项目。重点是项目过程中的优化，从文档怎么切分，到 Embedding 模型怎么选，再到不同的检索策略怎么决策、优化，最后看 RAG 是怎么做评估的。 | [LLM Powered Autonomous Agents | Lil'Log](https://lilianweng.github.io/posts/2023-06-23-agent/#maximum-inner-product-search-mips) [Advanced RAG Cheat Sheet And Recipes Guide | LlamaIndex](https://www.llamaindex.ai/blog/a-cheat-sheet-and-some-recipes-for-building-advanced-rag-803a9d94c41b) [Hierarchical Navigable Small Worlds (HNSW) | Pinecone](https://www.pinecone.io/learn/series/faiss/hnsw/) [All-in-RAG | 大模型应用开发实战：RAG 技术全栈指南](https://datawhalechina.github.io/all-in-rag/#/chapter1/01_RAG_intro) |
| RAG 进阶 | 这里主要准备面试中可能会考的索引选型，包括 FLAT、HNSW、IVF、IVF-PQ；各向量数据库间的差异，怎么选型；检索策略怎么选，如何优化各项指标如 exact token 覆盖率；幻觉如何抑制RAG 方面的评估怎么做的，思路怎么落地评估方面可以看看 AgentCore 最好有一些落地的思路能说 | [Hierarchical Navigable Small Worlds (HNSW) | Pinecone](https://www.pinecone.io/learn/series/faiss/hnsw/) [https://milvus.io/docs/zh/ivf-flat.md](https://milvus.io/docs/zh/ivf-flat.md) [https://milvus.io/docs/zh/ivf-pq.md](https://milvus.io/docs/zh/ivf-pq.md) |
| Skills | Skill 相关的内容，定义、原理 | [第 7 章：Skills — 可复用的 Agent 能力包 — Deep Agents 实战](https://datawhalechina.github.io/deepagents-in-action/chapters/ch07-skills/) [Agent Skills Overview - Agent Skills](https://agentskills.io/home) [ai-agent-book/book/chapter2.md at main · bojieli/ai-agent-book · GitHub](https://github.com/bojieli/ai-agent-book/blob/main/book/chapter2.md) |
| 多 Agent 设计模式 | 学习 Agent 间通信策略、任务分配模式。了解 AutoGen/CrewAI 框架。重新精读方案选型文档，理解四种方案的取舍逻辑 —— 面试一定会问。 | [Multi-agent - Docs by LangChain](https://docs.langchain.com/oss/python/langchain/multi-agent/index) [Building Multi-Agent Systems: When and How to Use Them](https://claude.com/blog/building-multi-agent-systems-when-and-how-to-use-them) [https://claude.com/resources/articles/multi-agent-coordination-patterns](https://claude.com/resources/articles/multi-agent-coordination-patterns) |
| 评估 | 单独把评估拎出来讲是因为基本每场面试都会有评估的问题，评估讲得不好基本上这轮面试就挂掉，本质是因为评估做得好说明你的项目有指标和数据支撑，可信度会大幅上升。 | 评估方面可以看看 AgentCore 最好有一些落地的思路能说； [https://www.anthropic.com/research/demystifying-evals-for-ai-agents](https://www.anthropic.com/research/demystifying-evals-for-ai-agents) |
| 前沿研究跟进 | Prompt Engineering → Context Engineering → Harness Engineering → Loop Engineering → Graph Engineering 演进流程，为什么这么演进；RSI 在 Agent 中的应用，如何落地 | 前沿论文，结合自己的理解 |

# 投递 + 面试期

这里主要讲一下在投递时的思路和踩的坑，先讲简历，简历优化非常重要，STAR 法则展开项目很重要不用多说了，项目拆分出亮点或难点后按照 STAR 法则进行阐述，最好有数字量化，这样更直观体现方案价值。

技术栈方面需要把重点技术栈罗列清晰，更好命中关键词（PS: 主要为了过机筛，机筛方面会有关键词打分之类的，新公司有专门的 Agent 做匹配度分析）；

简历方面踩得最大的一个坑是，简历中只写了 AI 相关的项目，因为本身我有后端的背景和工作经历，HR 发现漏了后端经历可能会问（这种算好的），有些可能直接就给你筛掉了，连面试机会都没有。发现这个坑的原因是每次我投完简历都会问一嘴为什么没过，那段时间中间有大概一周多时间没有面试，HR 说发现您这边只有 AI 相关的经验，我们希望候选人有多一些其他方面的经验呢。  
​  
另一个是投递时的思路是小厂 → 中厂 → 大厂，边面边复盘，我的习惯是一天最多面 3 场，再多在面下一场前就来不及复习了，并且面试其实是一个非常消耗精力的过程，连续不停地输出。如果准备到 75% 左右的时候就可以开始面了，面试会暴露出真实的短板以及能收集到企业真正关心的候选人的素质是什么，方便后续再去调整复习的体系。

举个例子，面试后期我复盘时发现缺漏的内容包括 记忆、Skills 体系、RAG 的索引相关知识缺位，都是从面试过程中被问到但卡壳的部分，这部分就是薄弱的地方，需要针对性训练。另一个是如果目标城市的岗位较少，机会成本高，可以先找其他城市的岗位作为练手，注意在投递的时候不要选你想去的公司以及存在分公司的大型公司（如果在你得目标城市有）。

​总计面了 132 场面试（含 HR 面），Offer 大概有 15 个左右，面经我会放在接下来的帖子里。