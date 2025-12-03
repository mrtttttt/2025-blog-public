'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export function MarkdownHelp() {
	const [isOpen, setIsOpen] = useState(false)

	const syntaxItems = [
		{ label: '一级标题', syntax: '# 标题', example: '# 我的标题' },
		{ label: '二级标题', syntax: '## 标题', example: '## 子标题' },
		{ label: '三级标题', syntax: '### 标题', example: '### 小标题' },
		{ label: '加粗', syntax: '**文本**', example: '**加粗文本**' },
		{ label: '斜体', syntax: '*文本*', example: '*斜体文本*' },
		{ label: '删除线', syntax: '~~文本~~', example: '~~删除文本~~' },
		{ label: '行内代码', syntax: '`代码`', example: '`const x = 1`' },
		{ label: '代码块', syntax: '```语言\n代码\n```', example: '```js\nconsole.log("hi")\n```' },
		{ label: '链接', syntax: '[文本](URL)', example: '[百度](https://baidu.com)' },
		{ label: '图片', syntax: '![描述](URL)', example: '![logo](https://xxx.png)' },
		{ label: '无序列表', syntax: '- 项目', example: '- 第一项\n- 第二项' },
		{ label: '有序列表', syntax: '1. 项目', example: '1. 第一项\n2. 第二项' },
		{ label: '引用', syntax: '> 引用文本', example: '> 这是一段引用' },
		{ label: '分割线', syntax: '---', example: '---' },
		{ label: '表格', syntax: '| 列1 | 列2 |\n|---|---|\n| 值1 | 值2 |', example: '| 姓名 | 年龄 |\n|---|---|\n| 张三 | 20 |' }
	]

	return (
		<div className='relative'>
			{/* 问号图标 */}
			<button
				onMouseEnter={() => setIsOpen(true)}
				onMouseLeave={() => setIsOpen(false)}
				onClick={() => setIsOpen(!isOpen)}
				className='flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-800'>
				<svg className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
					<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
				</svg>
			</button>

			{/* 提示浮层 */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.2 }}
						onMouseEnter={() => setIsOpen(true)}
						onMouseLeave={() => setIsOpen(false)}
						className='absolute top-10 right-0 z-50 w-[450px] rounded-xl border bg-white p-4 shadow-xl'>
						<h3 className='mb-3 text-sm font-bold text-gray-800'>Markdown 语法速查</h3>

						<div className='max-h-[500px] space-y-2 overflow-y-auto pr-2'>
							{syntaxItems.map((item, index) => (
								<div key={index} className='rounded-lg border border-gray-100 bg-gray-50 p-2.5'>
									<div className='mb-1 text-xs font-semibold text-gray-700'>{item.label}</div>
									<div className='mb-1.5 rounded bg-white px-2 py-1 font-mono text-xs text-gray-600'>{item.syntax}</div>
									<div className='text-xs text-gray-500'>
										<span className='font-semibold'>示例：</span>
										<pre className='mt-1 whitespace-pre-wrap rounded bg-white px-2 py-1 font-mono text-xs'>{item.example}</pre>
									</div>
								</div>
							))}
						</div>

						<div className='mt-3 border-t pt-3 text-xs text-gray-500'>
							<div className='font-semibold mb-1'>快捷键：</div>
							<div className='space-y-0.5'>
								<div>• Ctrl/Cmd + B：加粗</div>
								<div>• Ctrl/Cmd + I：斜体</div>
								<div>• Ctrl/Cmd + K：链接</div>
								<div>• Tab：缩进</div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
