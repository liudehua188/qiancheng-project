// 主要的管理界面逻辑
document.addEventListener('DOMContentLoaded', function() {
    // 检查登录状态
    checkAuth();
    
    // 菜单切换
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.dataset.page;
            switchPage(page);
        });
    });

    // 头像点击事件
    document.getElementById('adminAvatar').addEventListener('click', function() {
        showAvatarUploadModal();
    });

    // 退出登录
    document.getElementById('logout').addEventListener('click', function(e) {
        e.preventDefault();
        logout();
    });

    // 设置当前用户名显示
    const currentUser = localStorage.getItem('adminUser');
    if (currentUser) {
        document.getElementById('currentUser').textContent = currentUser;
    }
});

// 页面切换函数
function switchPage(page) {
    // 移除所有活动页面
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    // 移除所有活动菜单
    document.querySelectorAll('.menu a').forEach(a => a.classList.remove('active'));
    
    // 激活选中的页面和菜单
    document.getElementById(page)?.classList.add('active');
    document.querySelector(`.menu a[data-page="${page}"]`)?.classList.add('active');
    
    // 更新面包屑
    document.querySelector('.breadcrumb').textContent = 
        document.querySelector(`.menu a[data-page="${page}"]`)?.textContent || '控制台';
}

// 显示头像上传模态框
function showAvatarUploadModal() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <h3>更换头像</h3>
        <input type="file" id="avatarInput" accept="image/*">
        <button onclick="uploadAvatar()">上传</button>
    `;
    
    modal.style.display = 'block';
}

// 关闭模态框
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// 添加全局请求拦截器
async function fetchWithAuth(url, options = {}) {
    const token = localStorage.getItem('adminToken');
    if (!token) {
        window.location.href = 'login.html';
        return;
    }
    
    options.headers = {
        ...options.headers,
        'Authorization': `Bearer ${token}`
    };
    
    try {
        const response = await fetch(url, options);
        if (response.status === 401) {
            // token失效，跳转到登录页
            localStorage.removeItem('adminToken');
            window.location.href = 'login.html';
            return;
        }
        return response;
    } catch (error) {
        console.error('Request error:', error);
        throw error;
    }
} 