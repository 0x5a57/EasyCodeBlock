import { Editor, MarkdownView, Plugin } from 'obsidian';

export default class EasyCodeBlock extends Plugin {
	async onload() {
		// Add ribbon icon
		this.addRibbonIcon('code-glyph', 'Easy Code Block', (evt: MouseEvent) => {
			const view = this.app.workspace.getActiveViewOfType(MarkdownView);
			if (!view) {
				return;
			}

			const editor = view.editor;
			const selection = editor.getSelection();

			if (selection) {
				// --- 功能 2: 包裹逻辑 (已修改) ---
        
				// 1. 关键步骤：在替换前，获取选中区域的“起始”光标位置
				// 'from' 参数确保无论用户是从上往下选，还是从下往上选，都能拿到最开始的位置
				const startCursor = editor.getCursor('from');

				// 2. 执行替换
				editor.replaceSelection("```\n" + selection + "\n```");

				// 3. 设置光标位置
				// 目标：停留在第一行 ``` 的后面
				// 逻辑：行号不变，列号 = 原本的列号 + 3
				editor.setCursor({
					line: startCursor.line,
					ch: startCursor.ch + 3
				});
			} else {
				// Insert mode: Insert empty code block and position cursor
				const cursor = editor.getCursor();
				editor.replaceRange('```\n```', cursor);
				
				// Move cursor to after the first three backticks
				// We stay on the same line, just advance 3 characters
				editor.setCursor({
					line: cursor.line,
					ch: cursor.ch + 3
				});
			}
		});
	}

	onunload() {

	}
}
