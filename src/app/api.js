import { ref } from 'vue'
import Router from "@/app/router.js";
import config from "@/app/config.js";

let token = false;

export const useGroups = () => { // список кружков
    let groups = ref([]);
    let loading = ref(true);

    async function fetchGroups() {
        let res = await wrapFetch(config.apiDomain + 'api/mygroups');

        if (res != false) {
            groups.value = await res.json();
            loading.value = false;
        }
    }

    return {
        groups,
        loading,
        fetchGroups
    }
}

export const useGroup = () => {
    let data = {
        name: ref(''),
        type_id: ref(1),
        users: ref([]),
    };
    let loading = ref(false);

    async function fetchGroup(id) { // получить кружок
        loading.value = true;

        let res = await wrapFetch(config.apiDomain + 'api/groups/' + id);

        if (res != false) {
            let j = await res.json();
            data.name.value = j.name;
            data.type_id.value = j.type_id;
            data.users.value = j.users;
            loading.value = false;
        }
    }

    return {
        data,
        loading,
        fetchGroup
    }
}

export const useMyGroup = () => {
    let data = {
        name: ref(''),
        share_text_template: ref(''),
        type_id: ref(1),
        hash: ref(''),
        users: ref([]),
    };
    let loading = ref(false);

    async function fetchMyGroup(id) { // получить кружок
        if (id > 0) {
            loading.value = true;

            let res = await wrapFetch(config.apiDomain + 'api/mygroups/' + id);

            if (res != false) {
                let j = await res.json();
                data.name.value = j.name;
                data.type_id.value = j.type_id;
                data.share_text_template.value = j.share_text_template;
                data.hash.value = j.hash;
                data.users.value = j.users;
                loading.value = false;
            }

            return id;
        } else { // Создать новый
            loading.value = true;

            data.name.value = "";
            data.type_id.value = 0;
            data.share_text_template.value = config.shareTextTemplate;
            data.users.value = [];

            let res = await wrapFetch(config.apiDomain + 'api/mygroups', {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": "token-value",
                },
                body: JSON.stringify({
                    'share_text_template': data.share_text_template.value,
                }),
            });

            if (!res) {
                return false;
            } else {
                let j = await res.json();
                data.hash.value = j.hash;
                loading.value = false;
                return j.id;
            }
        }
    }

    return {
        data,
        loading,
        fetchMyGroup
    }
}

export async function updateMyGroup(id, props) {

    let res = await wrapFetch(config.apiDomain + 'api/mygroups/' + (id == '' ? '0' : id), {
        method: "put",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": "token-value",
        },
        body: JSON.stringify(props),
    });

    return !res ? false : true;
}

export async function deleteMyGroup(id) {

    let res = await wrapFetch(config.apiDomain + 'api/mygroups/' + (id == '' ? '0' : id), { method: "delete" });
    return !res ? false : true;
}

// Queues

export async function updateQueue(id, props) {

    let res = await wrapFetch(config.apiDomain + 'api/queues/' + (id == '' ? '0' : id), {
        method: "put",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": "token-value",
        },
        body: JSON.stringify(props),
    });

    return !res ? false : true;
}

//wraps

async function wrapFetch(url, request = {}) {
    if (!token) {
        if (!await auth()) return false;
    }

    if (typeof request.headers == 'undefined') {
        request.headers = {};
    }
    request.headers.token = token;
    let res = await fetch(url, request);
    if (!res.ok) {
        if (await auth()) {
            res = await fetch(url, request);
            if (!res.ok) {
                error();
                return false;
            }
        } else {
            return false;
        }
    }
    return res;
}

async function auth() {
    let res = await fetch(config.apiDomain + 'api/auth/webapp?' + window.Telegram.WebApp.initData);
    if (res.ok) {
        let j = await res.json();
        token = j.token;
        return true;
    } else {
        error();
        return false;
    }
}

function error() {
    Router.push({ path: '/error' });
}