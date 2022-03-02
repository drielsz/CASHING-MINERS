interface Response {
    token: string;
    user: {
        name: string;
        email: string
    }
}


export  function signIn (): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'skdokdpqwokdoqwpdaskopdpqwo21312dsa',
                user: {
                    name: 'Adriel',
                    email: 'adriellaurentino4@gmail.com'
                }
            })
        }, 2000)
    })
}