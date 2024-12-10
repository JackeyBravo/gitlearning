// 获取所有待办事项
async function fetchTodos() {
    try {
        const response = await fetch('/api/todos');
        const todos = await response.json();
        displayTodos(todos);
    } catch (error) {
        console.error('获取待办事项失败:', error);
    }
}

// 显示待办事项列表
function displayTodos(todos) {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${todo.task}</span>
            <button class="delete-btn" onclick="deleteTodo(${todo.id})">删除</button>
        `;
        todoList.appendChild(li);
    });
}

// 添加新的待办事项
async function addTodo() {
    const input = document.getElementById('newTodo');
    const task = input.value.trim();
    
    if (!task) {
        alert('请输入待办事项内容！');
        return;
    }
    
    try {
        const response = await fetch('/api/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ task }),
        });
        
        if (response.ok) {
            input.value = '';
            fetchTodos();
        }
    } catch (error) {
        console.error('添加待办事项失败:', error);
    }
}

// 删除待办事项
async function deleteTodo(id) {
    try {
        const response = await fetch(`/api/todos/${id}`, {
            method: 'DELETE',
        });
        
        if (response.ok) {
            fetchTodos();
        }
    } catch (error) {
        console.error('删除待办事项失败:', error);
    }
}

// 页面加载时获取待办事项
document.addEventListener('DOMContentLoaded', fetchTodos); 