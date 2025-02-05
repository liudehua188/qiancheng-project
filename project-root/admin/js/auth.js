// 检查是否已登录
function checkAuth() {
    const token = localStorage.getItem('adminToken');
    if (!token && !window.location.href.includes('login.html')) {
        // 未登录且不在登录页面，跳转到登录页
        window.location.href = 'login.html';
        return;
    }
    
    if (token && window.location.href.includes('login.html')) {
        // 已登录且在登录页面，跳转到管理页面
        window.location.href = 'index.html';
        return;
    }
}

// 登录处理
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorMsg = document.getElementById('errorMsg');
        
        try {
            const response = await fetch('/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            
            const data = await response.json();
            
            if (response.ok) {
                // 登录成功，保存token
                localStorage.setItem('adminToken', data.token);
                localStorage.setItem('adminUser', username);
                window.location.href = 'index.html';
            } else {
                errorMsg.textContent = data.message || '登录失败，请检查用户名和密码';
            }
        } catch (error) {
            errorMsg.textContent = '服务器错误，请稍后重试';
            console.error('Login error:', error);
        }
    });
}

// 退出登录
function logout() {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    window.location.href = 'login.html';
}

// 上传头像
async function uploadAvatar() {
    const input = document.getElementById('avatarInput');
    const file = input.files[0];
    
    if (!file) {
        alert('请选择图片文件');
        return;
    }
    
    const formData = new FormData();
    formData.append('avatar', file);
    
    try {
        const response = await fetch('/api/admin/upload-avatar', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
            },
            body: formData
        });
        
        const data = await response.json();
        
        if (response.ok) {
            // 更新头像显示
            document.getElementById('adminAvatar').src = data.avatarUrl;
            document.getElementById('modal').style.display = 'none';
        } else {
            alert(data.message || '上传失败');
        }
    } catch (error) {
        alert('服务器错误，请稍后重试');
        console.error('Upload error:', error);
    }
}

// 在页面加载时检查登录状态
document.addEventListener('DOMContentLoaded', checkAuth); 