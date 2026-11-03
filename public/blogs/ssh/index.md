# GitLab SSH 密钥配置与代码拉取指南

本文档适用于 Mac / Linux / Windows (Git Bash) 环境，指导你如何生成 SSH 密钥、配置到 GitLab，并解决多密钥冲突问题。

## 一、 生成 SSH 密钥

打开终端，运行以下命令（将邮箱替换为你的 GitLab 注册邮箱）：

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

**执行过程中的提示说明：**
1. `Enter file in which to save the key (/Users/xxx/.ssh/id_ed25519):` 
   👉 **直接按回车**（使用默认路径）。
   *如果提示 `already exists. Overwrite (y/n)?`，说明已有同名文件，输入 `y` 覆盖，或输入 `n` 后重新命名文件（如 `id_ed25519_gitlab`）。*
2. `Enter passphrase (empty for no passphrase):` 
   👉 **直接按回车**（不设置密码，方便后续免密拉取）。
3. `Enter same passphrase again:` 
   👉 **再次按回车**。

生成成功后，公钥和私钥会保存在 `~/.ssh/` 目录下。

## 二、 添加公钥到 GitLab

1. **复制公钥内容：**
   * **Mac:** `pbcopy < ~/.ssh/id_ed25519.pub`
   * **Windows/Linux:** `cat ~/.ssh/id_ed25519.pub` （手动复制输出的以 `ssh-ed25519` 开头的全部内容）
2. **登录 GitLab 网页：**
   * 点击右上角头像 -> **Preferences (偏好设置)** -> 左侧菜单 **SSH Keys**。
3. **粘贴并保存：**
   * 将复制的公钥粘贴到 **Key** 文本框中。
   * 填写 **Title**（如：公司MacBook）。
   * 点击 **Add key** 保存。

## 三、 测试连接与拉取代码

### 1. 测试 SSH 连接
在拉取代码前，建议先测试连接是否成功（注意替换为你的 GitLab 服务器 IP 或域名）：

```bash
ssh -T git@172.20.10.10
```
* **首次连接提示：** 出现 `Are you sure you want to continue connecting (yes/no/[fingerprint])?` 时，输入 **`yes`** 并回车。
* **成功标志：** 看到 `Welcome to GitLab, @你的用户名!`。
* **失败标志：** 提示 `Permission denied (publickey)` 或要求输入密码。

### 2. 拉取代码
在 GitLab 项目页面点击 **Clone**，选择 **Clone with SSH**，复制地址，在终端执行：

```bash
git clone git@172.20.10.10:用户名/项目名.git
```

---

## 四、 如何指定特定的 SSH 密钥（解决多密钥冲突）

**问题场景：** 电脑里有多个 SSH 密钥（如 GitHub 用的 `id_rsa`，GitLab 用的 `id_ed25519`），SSH 默认找错了密钥，导致 `Permission denied`。此时需要强制指定使用哪个密钥。

### 方案 A：永久指定（推荐，一劳永逸）
通过修改 `~/.ssh/config` 配置文件，为特定服务器指定专属密钥。

**1. 编辑配置文件**
在终端执行：
```bash
nano ~/.ssh/config
```
*(如果没有该文件，此命令会自动创建)*

**2. 添加配置规则**
在文件中添加以下内容（针对你的公司 GitLab 服务器 IP `172.20.10.10`）：

```text
Host 172.20.10.10
    HostName 172.20.10.10
    User git
    IdentityFile ~/.ssh/id_ed25519
    IdentitiesOnly yes
```
* **说明：** 
  * `Host`：你连接时使用的地址。
  * `IdentityFile`：强制指定使用的私钥文件路径。
  * `IdentitiesOnly yes`：告诉 SSH 只使用上面指定的私钥，不要瞎尝试其他密钥。

**3. 保存并修改权限**
* 按 `Ctrl + O` 保存，回车确认，按 `Ctrl + X` 退出。
* **修改文件权限（必须执行，否则 SSH 会忽略配置）：**
```bash
chmod 600 ~/.ssh/config
chmod 700 ~/.ssh
chmod 600 ~/.ssh/id_ed25519
```

### 方案 B：临时指定（适合快速测试或单次拉取）
如果你不想修改配置文件，或者只是想临时用某个特定密钥克隆一次代码，可以通过 `GIT_SSH_COMMAND` 环境变量来临时指定：

**1. 临时拉取代码**
在终端执行以下命令（按需替换仓库地址）：
```bash
GIT_SSH_COMMAND='ssh -i ~/.ssh/id_ed25519 -o IdentitiesOnly=yes' git clone git@172.20.10.10:用户名/项目名.git
```

**2. 临时测试连接**
如果你想先测试这个密钥能否连上服务器：
```bash
GIT_SSH_COMMAND='ssh -i ~/.ssh/id_ed25519 -o IdentitiesOnly=yes' ssh -T git@172.20.10.10
```
*(注意：这里的 `GIT_SSH_COMMAND` 对原生的 `ssh` 命令不生效，但如果你在 Git 命令前面加上它，Git 会调用它指定的 SSH 参数)*

**参数说明：**
* `-i ~/.ssh/id_ed25519`：指定要使用的私钥文件路径。
* `-o IdentitiesOnly=yes`：强制 SSH 只使用 `-i` 指定的这个密钥，忽略其他默认密钥。

---

## 附：常见报错排查

| 报错信息 | 原因及解决办法 |
| :--- | :--- |
| `Permission denied (publickey)` | 1. 公钥没有正确添加到 GitLab<br>2. SSH 没找对私钥（参考第四部分）<br>3. 文件权限过于开放（执行 `chmod 600`） |
| `git@...'s password:` | 说明密钥认证失败，服务器退回密码登录。**不要输密码**，去检查密钥配置。 |
| `WARNING: connection is not using a post-quantum...` | 这是 OpenSSH 较新版本的安全提示，**不影响使用**，可以忽略。 |
| 提示 `Are you sure you want to continue connecting` | 首次连接未知服务器，输入 `yes` 回车即可。 |