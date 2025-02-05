// 产品列表状态管理
let currentPage = 1;
const pageSize = 10;
let totalProducts = 0;
let productList = [];

// 初始化产品管理页面
async function initProductsPage() {
    // 从main.js获取产品数据
    productList = window.products || [];
    totalProducts = productList.length;
    
    // 更新仪表盘统计
    updateDashboardStats();
    
    // 绑定搜索和筛选事件
    document.getElementById('productSearch')?.addEventListener('input', debounce(filterProducts, 500));
    document.getElementById('productFilter')?.addEventListener('change', () => {
        currentPage = 1;
        filterProducts();
    });
    
    // 渲染产品列表
    renderProductList();
}

// 显示添加产品模态框
function showAddProductModal() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    const template = document.getElementById('productFormTemplate');
    
    modalBody.innerHTML = template.innerHTML;
    const form = document.getElementById('productForm');
    
    // 生成新的产品ID
    const maxId = Math.max(...window.products.map(p => parseInt(p.id.replace('P', ''))));
    const newId = `P${String(maxId + 1).padStart(3, '0')}`;
    form.querySelector('[name="id"]').value = newId;
    
    form.onsubmit = handleAddProduct;
    modal.style.display = 'block';
}

// 处理添加产品
function handleAddProduct(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // 构建新产品数据
    const newProduct = {
        id: formData.get('id'),
        title: formData.get('title'),
        image: "./img/产品主图.jpg", // 默认图片路径
        operator: formData.get('operator'),
        monthlyFee: formData.get('monthlyFee'),
        packageDetails: formData.get('packageDetails'),
        numberSelection: formData.get('numberSelection') === 'true',
        contractRules: formData.get('contractRules'),
        age: formData.get('age'),
        location: formData.get('location'),
        delivery: {
            forbiddenAreas: formData.get('forbiddenAreas').split(',').map(area => area.trim())
        },
        commission: {
            type: formData.get('commission.type'),
            amount: formData.get('commissionAmount'),
            rules: formData.get('commission.rules')
        },
        settlementRules: formData.get('settlementRules'),
        isProvincialProduct: formData.get('isProvincialProduct') === 'true',
        listingDate: new Date().toISOString().split('T')[0],
        status: formData.get('status'),
        tags: formData.get('tags').split(',').map(tag => tag.trim()).filter(tag => tag)
    };

    // 添加到products数组
    window.products.push(newProduct);
    
    // 更新显示
    closeModal();
    initProductsPage();
    alert('添加产品成功');
}

// 显示编辑产品模态框
function showEditProductModal(productId) {
    const product = window.products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    const template = document.getElementById('productFormTemplate');
    
    modalBody.innerHTML = template.innerHTML;
    const form = document.getElementById('productForm');
    form.querySelector('.form-title').textContent = '编辑产品';
    
    // 填充表单数据
    form.querySelector('[name="id"]').value = product.id;
    form.querySelector('[name="id"]').readOnly = true; // ID不允许修改
    form.querySelector('[name="title"]').value = product.title;
    form.querySelector('[name="operator"]').value = product.operator;
    form.querySelector('[name="monthlyFee"]').value = product.monthlyFee;
    form.querySelector('[name="packageDetails"]').value = product.packageDetails;
    form.querySelector(`[name="numberSelection"][value="${product.numberSelection}"]`).checked = true;
    form.querySelector('[name="contractRules"]').value = product.contractRules;
    form.querySelector('[name="age"]').value = product.age;
    form.querySelector('[name="location"]').value = product.location;
    form.querySelector('[name="forbiddenAreas"]').value = product.delivery.forbiddenAreas.join(',');
    form.querySelector('[name="commission.type"]').value = product.commission.type;
    form.querySelector('[name="commission.amount"]').value = product.commission.amount;
    form.querySelector('[name="commission.rules"]').value = product.commission.rules;
    form.querySelector('[name="settlementRules"]').value = product.settlementRules;
    form.querySelector(`[name="isProvincialProduct"][value="${product.isProvincialProduct}"]`).checked = true;
    form.querySelector('[name="tags"]').value = product.tags.join(',');
    form.querySelector('[name="status"]').value = product.status;

    form.onsubmit = (e) => handleEditProduct(e, productId);
    modal.style.display = 'block';
}

// 处理编辑产品
function handleEditProduct(e, productId) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // 更新产品数据
    const productIndex = window.products.findIndex(p => p.id === productId);
    if (productIndex === -1) return;

    const updatedProduct = {
        ...window.products[productIndex],
        title: formData.get('title'),
        operator: formData.get('operator'),
        monthlyFee: formData.get('monthlyFee'),
        packageDetails: formData.get('packageDetails'),
        numberSelection: formData.get('numberSelection') === 'true',
        contractRules: formData.get('contractRules'),
        age: formData.get('age'),
        location: formData.get('location'),
        delivery: {
            forbiddenAreas: formData.get('forbiddenAreas').split(',').map(area => area.trim())
        },
        commission: {
            type: formData.get('commission.type'),
            amount: formData.get('commissionAmount'),
            rules: formData.get('commission.rules')
        },
        settlementRules: formData.get('settlementRules'),
        isProvincialProduct: formData.get('isProvincialProduct') === 'true',
        status: formData.get('status'),
        tags: formData.get('tags').split(',').map(tag => tag.trim()).filter(tag => tag)
    };

    window.products[productIndex] = updatedProduct;
    
    closeModal();
    initProductsPage();
    alert('更新产品成功');
}

// 删除产品
function deleteProduct(productId) {
    if (!confirm('确定要删除这个产品吗？')) return;
    
    const productIndex = window.products.findIndex(p => p.id === productId);
    if (productIndex === -1) return;
    
    window.products.splice(productIndex, 1);
    initProductsPage();
    alert('删除产品成功');
}

// 显示产品详情
function showProductDetail(productId) {
    const product = window.products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    const template = document.getElementById('productDetailTemplate');
    
    modalBody.innerHTML = template.innerHTML;
    
    // 填充详情数据
    modalBody.querySelector('.product-id').textContent = product.id;
    modalBody.querySelector('.product-title').textContent = product.title;
    modalBody.querySelector('.product-operator').textContent = product.operator;
    modalBody.querySelector('.product-monthly-fee').textContent = product.monthlyFee;
    modalBody.querySelector('.product-package-details').textContent = product.packageDetails;
    modalBody.querySelector('.product-contract-rules').textContent = product.contractRules;
    modalBody.querySelector('.product-age').textContent = product.age;
    modalBody.querySelector('.product-number-selection').textContent = product.numberSelection ? '支持' : '不支持';
    modalBody.querySelector('.product-location').textContent = product.location;
    modalBody.querySelector('.product-forbidden-areas').textContent = product.delivery.forbiddenAreas.join('、');
    modalBody.querySelector('.product-commission-type').textContent = product.commission.type === 'instant' ? '秒返' : '月返';
    modalBody.querySelector('.product-commission-rules').textContent = product.commission.rules;
    modalBody.querySelector('.product-settlement-rules').textContent = product.settlementRules;
    modalBody.querySelector('.product-provincial').textContent = product.isProvincialProduct ? '是' : '否';
    
    // 渲染标签
    const tagsContainer = modalBody.querySelector('.product-tags');
    tagsContainer.innerHTML = product.tags.map(tag => 
        `<span class="tag">${tag}</span>`
    ).join('');
    
    modal.style.display = 'block';
}

// 渲染产品列表
function renderProductList() {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const displayedProducts = productList.slice(startIndex, endIndex);

    const tbody = document.getElementById('productList');
    tbody.innerHTML = displayedProducts.map(product => `
        <tr>
            <td><a href="javascript:void(0)" onclick="showProductDetail('${product.id}')">${product.id}</a></td>
            <td><img src="${product.image}" alt="${product.title}"></td>
            <td><a href="javascript:void(0)" onclick="showProductDetail('${product.id}')">${product.title}</a></td>
            <td>${product.operator}</td>
            <td>${product.monthlyFee}</td>
            <td>${product.status}</td>
            <td>${product.listingDate}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-edit" onclick="showEditProductModal('${product.id}')">编辑</button>
                    <button class="btn-delete" onclick="deleteProduct('${product.id}')">删除</button>
                </div>
            </td>
        </tr>
    `).join('');

    renderPagination();
}

// 渲染分页控件
function renderPagination() {
    const totalPages = Math.ceil(totalProducts / pageSize);
    const pagination = document.getElementById('productPagination');
    
    let paginationHTML = '';
    
    // 上一页按钮
    paginationHTML += `
        <button ${currentPage === 1 ? 'disabled' : ''} 
                onclick="changePage(${currentPage - 1})">
            上一页
        </button>
    `;
    
    // 页码按钮
    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `
            <button class="${currentPage === i ? 'active' : ''}"
                    onclick="changePage(${i})">
                ${i}
            </button>
        `;
    }
    
    // 下一页按钮
    paginationHTML += `
        <button ${currentPage === totalPages ? 'disabled' : ''} 
                onclick="changePage(${currentPage + 1})">
            下一页
        </button>
    `;
    
    pagination.innerHTML = paginationHTML;
}

// 切换页码
function changePage(page) {
    if (page < 1 || page > Math.ceil(totalProducts / pageSize)) return;
    currentPage = page;
    renderProductList();
}

// 筛选产品
function filterProducts() {
    const searchTerm = document.getElementById('productSearch').value.toLowerCase();
    const filterValue = document.getElementById('productFilter').value;
    
    let filteredProducts = [...window.products];
    
    // 应用状态筛选
    if (filterValue !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.status === filterValue);
    }
    
    // 应用搜索筛选
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(p => 
            p.id.toLowerCase().includes(searchTerm) ||
            p.title.toLowerCase().includes(searchTerm) ||
            p.operator.toLowerCase().includes(searchTerm) ||
            p.monthlyFee.toLowerCase().includes(searchTerm)
        );
    }
    
    productList = filteredProducts;
    totalProducts = filteredProducts.length;
    currentPage = 1;
    renderProductList();
}

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 更新统计数据
function updateDashboardStats() {
    if (document.getElementById('totalProducts')) {
        document.getElementById('totalProducts').textContent = window.products.length;
    }
}

// 关闭模态框
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('products')) {
        initProductsPage();
    }
});