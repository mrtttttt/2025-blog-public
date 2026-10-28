'use client'

export function MarkdownHelp() {
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
		<details className='mb-3 rounded-xl border px-4 py-3'>
			<summary className='cursor-pointer rounded text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-4'>
				Markdown 语法提示
				<span className='text-secondary ml-2 text-xs font-normal'>点击展开 / 收起</span>
			</summary>
			<p className='text-secondary mt-2 text-xs leading-5'>快捷键：Ctrl / Cmd + B 加粗，Ctrl / Cmd + I 斜体，Ctrl / Cmd + K 插入链接；支持直接粘贴图片。</p>
			<div className='mt-3 grid max-h-[360px] grid-cols-1 gap-2 overflow-y-auto sm:grid-cols-2'>
				{syntaxItems.map(item => (
					<div key={item.label} className='min-w-0 rounded-lg border p-3'>
						<div className='mb-2 text-xs font-medium'>{item.label}</div>
						<pre className='text-secondary font-mono text-xs leading-5 break-all whitespace-pre-wrap'>
							<code>{item.example}</code>
						</pre>
					</div>
				))}
			</div>
			<p className='text-secondary mt-3 text-xs leading-5'>标题、列表和引用的标记后需要加空格；段落之间留一个空行。点击右上角「预览」查看效果。</p>
		</details>
	)
}
