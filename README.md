# Easy Code Block

[中文] | [English](#english)

## 简介 (Introduction)

**Easy Code Block** 是一个简单而强大的 Obsidian 插件，旨在优化代码块的输入体验。它允许您通过点击左侧 Ribbon 栏的图标，快速将选中文本包裹在代码块中，或者插入新的代码块并自动定位光标。

## 核心功能 (Features)

1.  **包裹模式 (Wrap Mode)**
    *   **操作**：在编辑器中选中一段文本，然后点击左侧的 "Easy Code Block" 图标（`code-glyph`）。
    *   **效果**：选中的文本会被自动包裹在 ` ``` ` 代码块中。

2.  **插入模式 (Insert Mode)**
    *   **操作**：在未选中任何文本的情况下，点击图标。
    *   **效果**：在当前光标处插入一个空的代码块。
    *   **智能定位**：光标会自动跳转到第一行三个反引号的后面 (` ```| `)，方便您直接输入语言名称（如 `ts`, `python` 等），无需手动调整光标位置。

## 安装 (Installation)

目前建议使用 **BRAT** 插件进行安装：

1.  在 Obsidian 社区插件市场中搜索并安装 **Obsidian 42 - BRAT** 插件。
2.  启用 BRAT 插件。
3.  打开 BRAT 插件设置，点击 **"Add Beta plugin"**。
4.  输入本 GitHub 仓库的 URL 地址。
5.  点击 **"Add Plugin"**。
6.  安装完成后，在社区插件列表中启用 **Easy Code Block**。

---

<a id="english"></a>

# Easy Code Block

## Introduction

**Easy Code Block** is a simple yet powerful Obsidian plugin designed to streamline the code block entry experience. It allows you to quickly wrap selected text in a code block or insert a new one with automatic cursor positioning by simply clicking an icon in the Ribbon.

## Features

1.  **Wrap Mode**
    *   **Action**: Select text in the editor and click the "Easy Code Block" icon (`code-glyph`) in the left Ribbon.
    *   **Result**: The selected text is automatically wrapped in triple backticks (` ``` `).

2.  **Insert Mode**
    *   **Action**: Click the icon without selecting any text.
    *   **Result**: An empty code block is inserted at the current cursor position.
    *   **Smart Positioning**: The cursor is automatically placed immediately after the first three backticks (` ```| `), allowing you to type the language name (e.g., `ts`, `python`) directly without manual navigation.

## Installation

It is recommended to install using the **BRAT** plugin:

1.  Search for and install **Obsidian 42 - BRAT** from the Obsidian Community Plugins marketplace.
2.  Enable the BRAT plugin.
3.  Open BRAT settings and click **"Add Beta plugin"**.
4.  Enter the URL of this GitHub repository.
5.  Click **"Add Plugin"**.
6.  Once installed, enable **Easy Code Block** in your Community Plugins list.
