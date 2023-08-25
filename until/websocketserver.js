// websocket.js
import store from '../src/store/index';
let socket = null; // WebSocket对象
const heartbeatMessage = 'ping'; // 心跳包消息内容
const reconnectInterval = 3000; // 重连间隔（毫秒）
let isConnecting = false; // 标志位，表示是否正在连接中

function connectWebSocket() {
    if (socket) {
        // 如果WebSocket对象存在，则关闭它
        socket.close();
    }

    if (isConnecting) {
        // 如果正在连接中，不再执行连接操作
        return;
    }

    isConnecting = true;

    socket = new WebSocket('ws://8.130.35.235:8765'); // 连接WebSocket服务器地址

    socket.addEventListener('open', () => {
        console.log('WebSocket 连接已建立');
        isConnecting = false; // 连接成功后重置标志位
        const id = localStorage.getItem('user_id');
        const user_name = localStorage.getItem('user_name');
        const userInfo = {
            id:id,
            user_name:user_name,
        };
        socket.send(JSON.stringify(userInfo));
    });

    socket.addEventListener('message', (event) => {
        const message = event.data;
        console.log("更新ing");
        store.commit('addMessage', JSON.parse(message)); 
    });

    socket.addEventListener('close', (event) => {
        isConnecting = false;
        if (event.wasClean) {
            console.log(`连接已关闭，状态码: ${event.code}, 原因: ${event.reason}`);
        } else {
            console.error('连接意外断开');
            // 连接意外断开，尝试自动重连
            setTimeout(() => {
                console.log('尝试重新连接...');
                connectWebSocket();
            }, reconnectInterval);
        }
    });

    socket.addEventListener('error', (error) => {
        console.error('WebSocket 错误:', error);
        isConnecting = false;
    });
}

// 初始化时连接WebSocket

// 封装发送消息的函数，确保WebSocket处于打开状态再发送
function sendMessage(message) {
    if (socket.readyState === WebSocket.OPEN) {
        socket.send(message);
    } else {
        console.error('WebSocket is not in OPEN state. Cannot send message.');
    }
}

function getWsMessage() {
    return new Promise((resolve) => {
        socket.addEventListener('message', (event) => {
            // 解析并返回接收到的消息
            const message = event.data;
            resolve(message);
        });
    });
}

function CloseSocket(){
    socket.close();
}

// 导出WebSocket对象和发送消息的函数，以便在其他文件中使用
export { socket,sendMessage,getWsMessage,CloseSocket,connectWebSocket };
