export const APIUrls = {
    fetchPosts : (page=1 , limit=5) => `http://codeial.com:8000/api/v2/posts?page=${page}&limit=${limit}`,
    signUp : () => `http://codeial.com:8000/api/v2/users/signup`,
    logIn : () => `http://codeial.com:8000/api/v2/users/login`,
    edit : () => `http://codeial.com:8000/api/v2/users/edit`,
    fetchUser : (userId) => `http://codeial.com:8000/api/v2/users/${userId}`,
    fetchUserFriends : () => `http://codeial.com:8000/api/v2/friendship/fetch_user_friends`,
    addFreind : (userId) => `http://codeial.com:8000/api/v2/friendship/create_friendship?user_id=${userId}`,
    removeFriend : (userId) => `http://codeial.com:8000/api/v2/friendship/remove_friendship?user_id=${userId}`,
    createNewPost : () => `http://codeial.com:8000/api/v2/posts/create`,
    createNewComment : () => `http://codeial.com:8000/api/v2/comments/`,
    toggleLike : (likeId , likeType) => `http://codeial.com:8000/api/v2/likes/toggle?likeable_id=${likeId}&likeable_type=${likeType}`,
    search : (searchText) => `http://codeial.com:8000/api/v2/users/search?text=${searchText}`
}