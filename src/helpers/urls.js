export const APIUrls = {
    fetchPosts : (page=1 , limit=5) => `http://codeial.com:8000/api/v2/posts?page=${page}&limit=${limit}`,
    signUp : () => `http://codeial.com:8000/api/v2/users/signup`,
    logIn : () => `http://codeial.com:8000/api/v2/users/login`,
    edit : () => `http://codeial.com:8000/api/v2/users/edit`
}