const axios = require('axios');

const API_URL = 'http://localhost:3000/api/auth';

async function testAuth() {
    try {
        // 1. Register
        console.log('Testing Registration...');
        const registerRes = await axios.post(`${API_URL}/register`, {
            email: `test${Date.now()}@example.com`,
            password: 'password123',
            name: 'Test User'
        });
        console.log('Registration successful:', registerRes.data);

        // 2. Login
        console.log('Testing Login...');
        const loginRes = await axios.post(`${API_URL}/login`, {
            email: registerRes.data.user.email,
            password: 'password123'
        });
        console.log('Login successful:', loginRes.data);

    } catch (error) {
        console.error('Test failed:', error.response ? error.response.data : error.message);
    }
}

testAuth();
