import axios from 'axios';

const host = 'http://localhost:8080';

const  API = {

   makeFileURL: (url, token) => {
      return host + url + "?access_token" + token;
  },
  //Request login to the blog
  login: (email, pass, success) => {
        axios.post(`${host}/api/users/login`, {email: email, password: pass})
        .then(res => {
            success(res);
        });
    },

    //Request users registered
    getUsers: (token, success) => {
        axios.get(`${host}/api/users?access_token=${token}`)
        .then(res => {
            success(res);
        })
    },

    //Request all the pots made in the blog
    getPosts: (token, success) => {
        axios.get(`${host}/api/Posts?access_token=${token}`)
        .then(res => {
            success(res);
        })
    },

    //Add a new post to the blog
    addPost: (post, token, success) => {
        axios.post(`${host}/api/Posts?access_token=${token}`, post)
        .then(res => {
            success(res);
        })
    },

    //Request a single post by Id
    getSinglePost: (id, token, success) => {
 
        axios.get(`${host}/api/Posts/${id}?access_token=${token}`, {
            params: {
                filter: {
                    Include: 'PostImage'
                }
            }
        })
        .then(res => {
                success(res);
            })
        },

    //Edits a single post by id
    updatePost: (post, token, success) => {
       axios.patch(`${host}/api/Posts/${post.id}?access_token=${token}`, post)
        .then(res => {
            success(res);
        })
    },

    //Uploads an image
    uploadImage: (data, token, postId, userId, success) => {
        axios.post(`${host}/api/PostImages/upload?post_id=${postId}&user_id=${userId}&access_token=${token}`, data)
        .then(res => {
            success(res);
        })
    },

    //Request up until 10 posts to be render on the site 
    getSitePosts: (skip, success) => {
        axios.get(`${host}/api/Posts`, {
            params: {
                filter: {
                    skip,
                    limit: 10,
                    Include: 'PostImage',
                    fields: {
                        id: true,
                        title: true,
                        slug: true,
                        content: false
                    }
                }
            }
        })
        .then(res => {
            success(res)
        })
    },
    
    }




export default API;