#!/bin/bash

echo "🚀 开始同步 upstream/main（排除 public 目录）..."

# 1. 拉取最新 upstream
git fetch upstream

# 2. 临时记录当前 public 目录（防止被覆盖）
echo "📦 备份 public 目录..."
cp -r public /tmp/public_backup_$$ 2>/dev/null

# 3. 同步 upstream 内容（全部）
echo "⬇️ 同步 upstream 文件..."
git checkout upstream/main -- .

# 4. 恢复本地 public
echo "🔄 恢复 public 目录..."
rm -rf public
cp -r /tmp/public_backup_$$ public

# 5. 清理临时文件
rm -rf /tmp/public_backup_$$

# 6. 提示完成
echo "✅ 同步完成（public 已保留本地版本）"