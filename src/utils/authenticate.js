const authenticate = async (url, body, onSuccess, onFailure) => {

    try {
        const promise = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(promise);
        if(promise.status === 500) {
            onFailure(promise.statusText)
            return
        } else if (promise.status === 200) {
            const authToken = promise.headers.get('Authorization')
            document.cookie = `x-auth-token=${authToken}`
            const response = await promise.json()
            if (response.username && authToken) {
                onSuccess({
                    username: response.username,
                    id: response._id,
                    role: response.role
                })
        }
        } else {
            onFailure(promise.statusText)
        }
    } catch (err) {
        onFailure('Unauthorized')
    }
}

export default authenticate