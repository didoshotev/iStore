import getCookie from './cookie'

const apiCall = async (url, body, method, onSuccess, onFailure) => {

    try {
        const promise = await fetch(url, {
            method: method,
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getCookie('x-auth-token'),
            }
        })
        if (promise.status === 500) {
            onFailure(promise.statusText)
            return
        }
        if (promise.status === 200) {
            const response = await promise.json()
            onSuccess({
                ...response
            })
        }

    } catch (err) {
        onFailure()
    }
}

export default apiCall