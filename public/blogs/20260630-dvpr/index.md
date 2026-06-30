---
来源: https://linux.do/t/topic/2146977
标题: "Agent 基础入门实战教程 (1)：初识 Agent"
作者: HPZS
分类: 开发调优
tags:
  - discourse
  - 人工智能
  - 软件开发
  - agent
  - openai
  - chatgpt
保存时间: 2026-06-30 13:42:45
评论数: 0
---

# Agent 基础入门实战教程 (1)：初识 Agent

## 【写在前面】

1：本教程为本人学习 agent 的总结文档，均为手动筛选个人觉得重点的内容，也当做是一个笔记分享给想学习 agent 的佬友们，如有错误，请指正。  
2：本人为前端转 agent 中，如有岗位可私，base：杭州。

* * *

## 1.1 Agent 的定义

  AI Agent (智能体) 是一个以大语言模型为核心决策模块，在给定目标、工具和约束条件下，能够读取上下文、规划下一步动作、调用外部工具，并根据执行结果持续调整的任务执行系统。

## 1.2 Agent 的能力

| 维度 | AI Agent |
| --- | --- |
| 交互模式 | 多轮自主：接收目标后自主规划、执行、迭代 |
| 工具使用 | 动态选择并调用任意工具（搜索、数据库、API、代码执行） |
| 环境感知 | 感知对话 + 工具返回结果 + 外部环境状态 |
| 任务复杂度 | 适合多步复杂任务（调研、分析、报告生成） |
| 状态管理 | 有状态：维护工作记忆、长期记忆、任务进度 |
| 错误处理 | 工具失败或结果不符合预期时，可以重试、换工具、调整计划 |

  从表格可以看出 Agent 更强调围绕目标进行多步执行，并能根据中间结果调整后续动作。他的价值在于：处理那些需要多步推理、工具协作、动态决策的复杂任务。但并不意味着所有场景下 Agent 都是最优解，如你只想翻译文字，或者生成一些简单的内容，直接只用普通的 LLM 调用是更优的。

## 1.3 Agent 的核心架构 - TAO 循环

  （为了方便理解，我们可以把 Agent 的核心运行过程概括为 TAO 循环：Think、Act、Observe。）

  Agent 内部运转的核心为 - TAO 循环 (Think: 思考 → Act: 行动 → Observe: 观察)

  **Think（思考）**：LLM 作为 "大脑"，分析当前状态和用户目标，决定下一步行动。这一步可能包括：判断任务是否完成、确定需要调用的工具、规划执行顺序、评估风险等。

  **Act（行动）**：根据 Think 阶段的决策，调用相应的工具或生成回答。如果决定调用工具，就执行工具调用；如果判断任务已完成，就生成最终回答。

  **Observe（观察）**：收集 Act 阶段的结果 —— 如果是工具调用，收集工具返回的数据；如果是生成回答，观察用户的反馈。将观察结果纳入上下文，为下一轮 Think 提供输入。

  这三个环节形成一个闭环，循环往复直到任务完成。无论一个 agent 有多复杂，这个就是一个 agent 的内部核心运转流程。举例一个我们经常使用到的场景：使用 codex 查询一个知识点：LangChain 最新版本的 Agent 怎么使用？?

1.  用户输入问题
2.  LLM 思考这个问题是否需要外部工具
3.  需要调用工具查询最新文档
4.  查询到的文档返回给 LLM：本质是将用户输入 + 查询的结果 统一成一个上下文，在塞给 LLM
5.  LLM 思考：不需要再调用工具了，可以直接输出
6.  输出结果

  TAO 循环的精妙之处在于它的**自终止性** ——Agent 在每一轮的 Think 阶段都会判断 "任务是否已经完成"，如果完成就输出最终答案并退出循环，如果未完成就继续下一轮。这意味着 Agent 可以根据任务复杂度自动调整执行步数：简单任务一轮就结束，复杂任务可能需要五轮、十轮甚至更多。

## 1.4 新手常见问题 Q&A

Q1：Agent 是不是就是 ChatGPT？  
不是。  
ChatGPT 更像是一个可以对话的大语言模型应用，而 Agent 是一种围绕目标执行任务的系统设计方式。Agent 通常会在 LLM 的基础上接入工具、状态管理和执行循环，让它可以根据任务进展决定下一步做什么。  
简单理解：

*   普通聊天：你问一句，它答一句
*   Agent：你给一个目标，它拆步骤、用工具、看结果，再继续执行

Q2：Agent 是不是一定要调用工具？  
不一定。  
如果任务很简单，Agent 可能不需要调用工具，直接回答就可以。但工具是 Agent 能力扩展的关键。没有工具的 Agent，能力基本只来自模型本身；接入工具后，它才能搜索资料、查询数据库、执行代码、读取文件、调用 API。

Q3：Agent 和工作流 Workflow 有什么区别？

*   Workflow：开发者提前规定好每一步
*   Agent：开发者提供目标、工具和约束，由模型动态决定下一步

Q4：Agent 是不是一定比普通 LLM 更强？  
不是。  
Agent 的优势是能处理复杂任务，但它也会带来额外成本，比如执行时间更长、调用费用更高、结果不稳定性增加、调试难度变大。  
如果一个任务一次 LLM 调用就能完成，就没必要强行做成 Agent。

Q5：学习 Agent 需要先学很多框架吗？  
不需要。  
刚开始学习 Agent，最重要的是先理解核心思想：  
目标 → 思考 → 行动 → 观察 → 再思考 → 最终回答

Q6：在企业项目中，Agent 和后端服务有什么区别？  
简单理解：

*   后端服务：负责确定性的业务逻辑
*   Agent：负责不确定性较高的智能决策和任务执行

在真实企业项目中，Agent 往往是接入后端系统的一部分，而不是单独替代后端。后端提供接口、权限、数据和业务规则，Agent 在这些约束下调用工具完成任务。  
企业里的合理架构通常不是 “用 Agent 替代后端”，而是：  
前端 → 后端服务 → Agent → 工具 / API / 数据库

```plaintext
如：用户说：帮我查一下这个客户最近三个月的订单异常情况

后端负责：
1. 校验用户是否有权限查看该客户数据
2. 提供订单查询接口
3. 提供异常订单规则
4. 记录操作日志

Agent 负责：
1. 理解用户想查什么
2. 决定需要调用哪些接口
3. 分析接口返回的数据
4. 总结异常原因并生成自然语言结果

```

* * *

  到这里，我们已经基本理解了什么是 Agent：它是一个围绕目标进行思考、行动、观察，并不断迭代的任务执行系统。

  下一章，我们将从代码角度出发，手写一个最小可运行的 Agent，看看这些概念在真实代码中到底是如何落地的。

![image](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAHAAcAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAwADADAREAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAABQYEBwACAwn/xAAyEAABBAAFAgUCBAcBAAAAAAABAgMEEQAFBhIhEzEHIkFRYRSBFTJCcRcjJDM0kaGx/8QAHAEAAQUBAQEAAAAAAAAAAAAABgMEBQcIAAIB/8QAMhEAAQIEBQMCBAYDAQAAAAAAAQIRAAMEIQUSMUFRBmFxE7EUIjKRFYGhwdHwB0JS4f/aAAwDAQACEQMRAD8A9U8dHQDz7WGX6dnwYsxzpql7yFkgJQEi7VZ9TSR8nEFX41RYbUSqapXlVMCiNG+UOXOz6Dk2F4f09DOqZa5ksOEt+p/pPaEjRPiu5LzORGzgpbjvF19h88dFIBX01ccgJBpXfij6HFc9NddfHT5kjERlBzLSrYJDqyq7pTod2Y31IsRwP0paV01yGBHJNnHk7R30l4kJzbVWbuOOCPkpjB9BkL/tbClO4nsN27t7gVzeHmA9Y/ieIVapvyUyUhQKrZWIT8x0Gd3A2Zrl4SrsHNNTSgm80liBu7m3hte/iGjTOt4uqs2zSNBSVxYbbKkyDx1CsuA0k8gDYOfWz7YLsH6hpcbnVCKS6JWX5v8ArM+gN2DN38REVmHzKKXLVN1U9uGb+YYGJDUpvqMuJdRZG5BsWCQefggjBMhaZgzILiIxSSksoNATXsh2No3OXGFbXBGX5gaoVRN+9Xgc6mXORg1WqnLKyKbba7Hlnbd9LxI4YlCqyUF6ZhFDzMxnaoVCZdUhpnLo4iGSgErWAeBzY3AVZ+e14yh1B1HNxJMkTkj1JacrjQpsxI2Vq7WPAiypUiVhwWU3Kzmbjv44Gvdo6s5NBZH+M24o91vDqKP3N4Alzpiy6lQmqqnK/wBiPFh+kY7lERxC0pa+nKqtUc9MmjYuuDR9wcKS6qfKBShZYs4exbRx224jk1M1JBJdub+9x+UQo+d5lpQSoyJ646Jik08wgJW8AKSixyCLJoH9RPvR3g+PYgiQqjopnp5i6mYE7OVm4AHcAaw4XT01a05aHKdi5bd23B8bNF0eGuYwsvybLchVPjycyDLslbcd1LqWwXNxSVJ4sdQCvWieavGmOlamjp6ORhEuemZNQjMchzADNe4tYqAG51aK8xWVNmTplWUFKCQA4Ym3B8QkeNEBnLc1VNZmhxclHUdglZJSpKSA4B2o0kUaN2RfNVl/kSjp6epFQid88y6pdyLBs+rDQC4ubjeCbpyaudL9JSLCwV5NxyeffaFLMJzWk9NPynGnJCYUcuqaZouOEfmr7kkn0Fn0xQNHTLxKrRISoJK1AOdA/P7Dc2iblS1V9WmWCBnLAnQcfpCnoDxD/iDnyloalZeiDFdC4zbqXYz/AFFt7VrVtBC0bFBI7EOL9hgpx7p04DTJJWF+ooXIKVBgpwA5BSXDnUEDmJnF8EOEy0qKwrMeGIYHZy45O1oj648UDoPVzzC4sqey/FjkMuOpaZaoulSmvKSpStyQq6A6aR74cYH0v+OUHrCYlBClBwCon6WzXDAMSGuXJ4hbCcAOK0xnCYEsSNHO2tww4+8OUqW1m2SKfZCm3UsolpadTtcbO3cAoenFpP3GAsS10lRlVdiQ4uCxa3uO0D8kGRU+mSDcpLaG7OPzuIafCZzLI2fxX5clw5i9uYYitMnpoKk2Vld88JqqFX2PcaH6BOFSK0ETlKqJgKQkoYAfUS7kGyeRw28QuOipVJUlKR6YuS9zdgG217+edvFDK9M6bkyYkXLHBMfjqdFSlNR2lKsIIT60U3tFJ/3WE+s5OBYbUqp5VG8+YklwpSUgqcBQSHzKcEswGkfcEm11SlMxc35EkDQEkDUPsG31gAlxp5DE9IBSpIWpXchJHf7ED/uM6DMM0o/08fnD5aChSkHaJLbTbbZS2hDaF8/ykhIN+vH/ALhIqUVOokkcufePJJUXUXjChsITvSjY0LBcAIRXrZ7fvjgpTnKTfjf7axwJDsdYgZi4E5bPkFPneR00bh5jflSOfckmvnC6EkrTKG3vv/EOKVOacgcF/tc+0GvCvNYcDUVfhj2bzCOmw5EIWqOfyqtJISkEHlRNjt+rGgOgamVT1hQqkUuYr6VpD5QWd3ISE75hc6XcQwxyVMmyHE0JTuDvwzXJ7ab7RZfiJmMLIID+ZGEXM0UwWY0tMUu9M7gU2qiE0ohQvuRxeLi6jq/w2jm1VPKKp5SUpKUFRB2cgFgDe9n7wH4ZKVUzUyVKZDuQSz8+XFrRSjciXkr5TmDElth/+oQ68khadyjaik+baSCbI7k1Y5xkHGcJrKeYJ1UkhcwZmV9RBJGYg3DkHW51ixymVVpenIJTa2hYWAOjgMP/AGCUdplxIdjkFtXILC/Ir5ocYFitWir+f68R6gUHKsMe8ayEsR0B2U5SU1RfVxfvXYn7Y5KlGyB9v51j0hKphyoDntAxh4akzSCyl0sRXJDbLa9m871qCAtSbHAKu1g9z8YNuncKk1FfLpKsqSpZCQzOknRwRcc6ML7MX0wKoqdcxLFQBJ4YXYHnk3G3eL/0bpNWk8v+l/EpE5FkpQ6EpQgk2dqQLFnnkn4qzjYGC4SnBqQUiJqlpGmZrdgwDDgXbaKvrqz42aZuQJPZ7+YYKxPRHQiZ14Yual1J+IZrmgeiJpIisR+mS2CSEFe4+/JAs3xtxXld0gjFcUGIYhOzoSwCAkAMCSAVOSoOS9g+mloIqfF/hKUyKdDKO5L35Ab7cd4QM08M5zGYaheey11ZaaXIiuRAUodtyuyDe5KLIRXcetC65reiqr1MRnTpXqrYqlECysynVYMy0pslOj6PaCaTjUsy6dCVsHAUDchhbV7E6n2gJpPR8fVEp0ZfmEdObtKCPppK1FJbrduSobiFg3YI7ViAwPpeXjdIuTJWJU9Ki4Uk3QUpAvZmL2v3A3kK7E10RBmJJlkahtX40Zmi69OaHiQ8ryH66BDRmeWNoSHo3m3FKCgHeUgmxRo9j+140XRYXKlSaf4lCVTZSQAoDcJy2JuxGx/YGK6n1q1Lm+kohCybHuX0doa+2J2IyP/Z)

[Agent 基础入门实战教程 (2)：从 0 到 1 手写一个最小 Agent](https://linux.do/t/topic/2147429) [<span style="color:#0088CC">开发调优，Lv1</span>](/c/develop/develop-lv1/20)

> 【写在前面】 1：本教程为本人学习 agent 的总结文档，均为手动筛选个人觉得重点的内容，也当做是一个笔记分享给想学习 agent 的佬友们，如有错误，请指正。 2：本人为前端转 agent 中，如有岗位可私，base：杭州。 上一篇导航 2.1 环境准备 环境 说明 Python 推荐 Python 3.10 及以上版本 VS Code 用于打开项目和运行 Notebook …