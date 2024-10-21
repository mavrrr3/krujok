import store from '@/store';
let token = false;

export async function api(url, request = {}) {
    try {

        if (!token) await auth();

        if (typeof request.headers == 'undefined') request.headers = {};
        request.headers.token = token;

        let response = await fetch(store.state.apiDomain + url, request);
        if (!response.ok) {
            await auth();

            response = await fetch(url, request);
            if (!response.ok) throw new Error(`Network error: ${response.status}`);
        }
        return response;
    } catch (error) {
        console.log(error.message);
        //Router.push({ path: '/error' });
        throw error;
    }
}

async function auth() {
    let response = await fetch(store.state.apiDomain + 'api/auth/webapp?' + window.Telegram.WebApp.initData);
    if (!response.ok) throw new Error(`Network error: ${response.status}`);
    const data = await response.json();
    token = data.token;
}